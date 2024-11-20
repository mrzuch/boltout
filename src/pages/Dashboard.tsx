import React from 'react';
import { Upload, FileText, Settings, PlusCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <PlusCircle className="h-5 w-5 mr-2" />
            New Analysis
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Analyses"
            value="128"
            icon={<FileText className="h-6 w-6 text-indigo-600" />}
          />
          <StatCard
            title="This Month"
            value="24"
            icon={<Upload className="h-6 w-6 text-green-600" />}
          />
          <StatCard
            title="Remaining Credits"
            value="76"
            icon={<Settings className="h-6 w-6 text-purple-600" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Analyses</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentAnalyses.map((analysis) => (
              <AnalysisRow key={analysis.id} analysis={analysis} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
      </div>
      {icon}
    </div>
  </div>
);

const recentAnalyses = [
  {
    id: 1,
    email: 'john.doe@example.com',
    date: '2024-03-15',
    status: 'Completed',
    returnDate: '2024-03-20',
    alternateContact: 'jane.smith@example.com',
  },
  {
    id: 2,
    email: 'sarah.wilson@example.com',
    date: '2024-03-14',
    status: 'Completed',
    returnDate: '2024-03-25',
    alternateContact: 'mike.brown@example.com',
  },
  {
    id: 3,
    email: 'michael.johnson@example.com',
    date: '2024-03-13',
    status: 'Completed',
    returnDate: '2024-03-18',
    alternateContact: 'lisa.taylor@example.com',
  },
];

const AnalysisRow = ({ analysis }: { analysis: typeof recentAnalyses[0] }) => (
  <div className="px-6 py-4 hover:bg-gray-50">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-900">{analysis.email}</p>
        <p className="text-sm text-gray-500">
          Return Date: {analysis.returnDate} • Alternate Contact: {analysis.alternateContact}
        </p>
      </div>
      <div className="flex items-center">
        <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
          {analysis.status}
        </span>
        <button className="ml-4 text-gray-400 hover:text-gray-500">
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);

export default Dashboard;