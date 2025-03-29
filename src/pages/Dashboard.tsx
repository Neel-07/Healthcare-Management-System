import React from 'react';
import { useAuthStore } from '../store/authStore';
import { 
  Users, 
  Calendar, 
  FileText, 
  Activity 
} from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuthStore();

  const stats = [
    {
      name: 'Total Patients',
      stat: '1,234',
      icon: Users,
      change: '+4.75%',
      changeType: 'increase',
    },
    {
      name: 'Appointments Today',
      stat: '12',
      icon: Calendar,
      change: '+54.02%',
      changeType: 'increase',
    },
    {
      name: 'Active Prescriptions',
      stat: '445',
      icon: FileText,
      change: '-1.39%',
      changeType: 'decrease',
    },
    {
      name: 'Patient Satisfaction',
      stat: '98.5%',
      icon: Activity,
      change: '+6.18%',
      changeType: 'increase',
    },
  ];

  return (
    <div>
      <div className="pb-5 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Welcome back, {user?.firstName}!
        </h3>
      </div>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-blue-500 rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  item.changeType === 'increase'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {item.change}
              </p>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h4 className="text-lg font-medium text-gray-900">
              Recent Appointments
            </h4>
            {/* Add appointment list component here */}
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h4 className="text-lg font-medium text-gray-900">
              Recent Prescriptions
            </h4>
            {/* Add prescription list component here */}
          </div>
        </div>
      </div>
    </div>
  );
}