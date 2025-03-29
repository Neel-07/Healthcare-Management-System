import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

export default function Settings() {
  return (
    <div>
      <div className="pb-5 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
          <SettingsIcon className="w-5 h-5 mr-2" />
          Settings
        </h3>
      </div>
      
      <div className="mt-6">
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:p-6">
            <div className="text-center text-gray-500">
              Settings interface coming soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}