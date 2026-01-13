
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Users, Layout, ShieldAlert, TrendingUp, CheckCircle, Clock } from 'lucide-react';

const data = [
  { name: 'Mon', visits: 400, emergency: 24 },
  { name: 'Tue', visits: 300, emergency: 13 },
  { name: 'Wed', visits: 200, emergency: 9 },
  { name: 'Thu', visits: 278, emergency: 39 },
  { name: 'Fri', visits: 189, emergency: 48 },
  { name: 'Sat', visits: 239, emergency: 38 },
  { name: 'Sun', visits: 349, emergency: 43 },
];

const AdminDashboard: React.FC<{activeLanguage: string}> = ({ activeLanguage }) => {
  return (
    <div className="px-4 md:px-8 py-8 animate-in zoom-in-95 duration-500">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Admin Command Center</h1>
            <p className="text-slate-500">Oversee CoxHelp operations and user analytics.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold">Download Reports</button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={<Users />} label="Total Users" value="12,840" trend="+12%" color="text-blue-600" />
          <StatCard icon={<Layout />} label="Active Listings" value="482" trend="+3%" color="text-green-600" />
          <StatCard icon={<ShieldAlert />} label="SOS Alerts" value="18" trend="-5%" color="text-red-600" />
          <StatCard icon={<TrendingUp />} label="Ad Revenue" value="৳45,200" trend="+22%" color="text-indigo-600" />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold mb-6">User Visits & Traffic</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip />
                  <Area type="monotone" dataKey="visits" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorVisits)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Emergency Tool Usage</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip cursor={{fill: '#f8fafc'}} />
                  <Bar dataKey="emergency" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Task Management Table */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-bold">Pending Approvals</h3>
            <button className="text-blue-600 text-sm font-bold">View Queue</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-500 font-bold">
                  <th className="px-6 py-4 uppercase tracking-wider">Business Name</th>
                  <th className="px-6 py-4 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <ApprovalRow name="Beach Front Cafe" cat="Restaurant" status="Pending" />
                <ApprovalRow name="Hasan Guide Pro" cat="Guide" status="Pending" />
                <ApprovalRow name="Bay of Blue Resort" cat="Hotel" status="Processing" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, trend, color }: any) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-3">
    <div className={`p-3 rounded-2xl bg-slate-50 w-fit ${color}`}>{icon}</div>
    <div>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{label}</p>
      <div className="flex items-end justify-between">
        <h4 className="text-2xl font-black text-slate-800">{value}</h4>
        <span className={`text-xs font-bold ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{trend}</span>
      </div>
    </div>
  </div>
);

const ApprovalRow = ({ name, cat, status }: any) => (
  <tr className="hover:bg-slate-50/50 transition-colors">
    <td className="px-6 py-4 font-bold text-slate-800">{name}</td>
    <td className="px-6 py-4 text-slate-500">{cat}</td>
    <td className="px-6 py-4">
      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1 w-fit ${
        status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
      }`}>
        {status === 'Pending' ? <Clock className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
        {status}
      </span>
    </td>
    <td className="px-6 py-4">
      <div className="flex gap-2">
        <button className="text-blue-600 font-bold text-xs hover:underline">Approve</button>
        <button className="text-slate-400 font-bold text-xs hover:underline">Ignore</button>
      </div>
    </td>
  </tr>
);

export default AdminDashboard;
