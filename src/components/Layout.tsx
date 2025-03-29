import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { 
  Home, 
  Calendar, 
  Users, 
  FileText, 
  Settings,
  LogOut
} from 'lucide-react';

export function Layout() {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  if (!user) return <Outlet />;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">HMS</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Dashboard
                </Link>
                <Link
                  to="/appointments"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Appointments
                </Link>
                <Link
                  to="/patients"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Patients
                </Link>
                <Link
                  to="/prescriptions"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Prescriptions
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => navigate('/settings')}
                className="p-2 rounded-md text-gray-500 hover:text-gray-900"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={handleSignOut}
                className="ml-4 p-2 rounded-md text-gray-500 hover:text-gray-900"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}