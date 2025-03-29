import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { useAuthStore } from './store/authStore';

// Lazy load pages
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const Appointments = React.lazy(() => import('./pages/Appointments'));
const Patients = React.lazy(() => import('./pages/Patients'));
const Prescriptions = React.lazy(() => import('./pages/Prescriptions'));
const Settings = React.lazy(() => import('./pages/Settings'));

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

function App() {
  React.useEffect(() => {
    useAuthStore.getState().initialize();
  }, []);

  return (
    <BrowserRouter>
      <React.Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/prescriptions" element={<Prescriptions />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;