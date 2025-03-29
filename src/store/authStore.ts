import { create } from 'zustand';
import { User } from '../types';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  error: null,

  initialize: async () => {
    try {
      if (!isSupabaseConfigured()) {
        set({ 
          error: 'Supabase is not configured. Please connect to Supabase to enable authentication.',
          loading: false 
        });
        return;
      }

      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const { data: userData } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single();

        set({ user: userData, loading: false });
      } else {
        set({ user: null, loading: false });
      }
    } catch (error) {
      set({ error: 'Failed to initialize auth', loading: false });
    }
  },

  signIn: async (email: string, password: string) => {
    try {
      if (!isSupabaseConfigured()) {
        set({ 
          error: 'Supabase is not configured. Please connect to Supabase to enable authentication.',
          loading: false 
        });
        return;
      }

      set({ loading: true, error: null });
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      const { data: userData } = await supabase
        .from('users')
        .select('*')
        .eq('id', data.user.id)
        .single();

      set({ user: userData, loading: false });
    } catch (error) {
      set({ error: 'Failed to sign in', loading: false });
    }
  },

  signOut: async () => {
    try {
      if (!isSupabaseConfigured()) {
        set({ 
          error: 'Supabase is not configured. Please connect to Supabase to enable authentication.',
          loading: false 
        });
        return;
      }

      set({ loading: true, error: null });
      await supabase.auth.signOut();
      set({ user: null, loading: false });
    } catch (error) {
      set({ error: 'Failed to sign out', loading: false });
    }
  },
}));