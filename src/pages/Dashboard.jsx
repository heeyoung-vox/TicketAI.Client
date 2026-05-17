import { Clock, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function Dashboard() {
  // Placeholder tickets for Iteration 1
  const tickets = [
    {
      id: "T-1001",
      title: "Cannot access the VPN from home",
      user: "john.doe",
      status: "Open",
      priority: "High",
      time: "2 hours ago",
      aiTag: "Network Access"
    },
    {
      id: "T-1002",
      title: "Need license for Visual Studio",
      user: "sarah.smith",
      status: "In Progress",
      priority: "Medium",
      time: "4 hours ago",
      aiTag: "Software Request"
    },
    {
      id: "T-1003",
      title: "Laptop battery draining fast",
      user: "mike.jones",
      status: "Resolved",
      priority: "Low",
      time: "1 day ago",
      aiTag: "Hardware"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-lg">
              <AlertCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Open Tickets</p>
              <h3 className="text-2xl font-bold text-slate-800">12</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">In Progress</p>
              <h3 className="text-2xl font-bold text-slate-800">5</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-lg">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Resolved Today</p>
              <h3 className="text-2xl font-bold text-slate-800">18</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Queue */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-800">Recent Tickets</h3>
          <button className="text-sm font-medium text-primary-600 hover:text-primary-700">View All</button>
        </div>
        
        <div className="divide-y divide-slate-100">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="p-6 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-500">{ticket.id}</span>
                  <h4 className="font-semibold text-slate-800 group-hover:text-primary-600 transition-colors">{ticket.title}</h4>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span>{ticket.user}</span>
                  <span>•</span>
                  <span>{ticket.time}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1 text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full text-xs font-medium">
                    <Sparkles size={12} />
                    {ticket.aiTag}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                  ticket.priority === 'High' ? 'bg-red-50 text-red-700 border-red-200' :
                  ticket.priority === 'Medium' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                  'bg-green-50 text-green-700 border-green-200'
                }`}>
                  {ticket.priority}
                </span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                  ticket.status === 'Open' ? 'bg-slate-100 text-slate-700' :
                  ticket.status === 'In Progress' ? 'bg-blue-50 text-blue-700' :
                  'bg-green-50 text-green-700'
                }`}>
                  {ticket.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
