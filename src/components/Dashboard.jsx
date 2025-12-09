import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";
import {
  TrendingUp,
  DollarSign,
  Calendar,
  Car,
  Bell,
  CheckCircle,
  Clock,
  Plus,
  User,
  MapPin,
  CreditCard,
} from "lucide-react";

const Dashboard = () => {
  // Sample data for charts
  const weeklyEarningsData = [
    { day: "Mon", amount: 0 },
    { day: "Tue", amount: 30000 },
    { day: "Wed", amount: 45000 },
    { day: "Thu", amount: 60000 },
    { day: "Fri", amount: 75000 },
    { day: "Sat", amount: 90000 },
    { day: "Sun", amount: 85000 },
  ];

  const monthlyTrendsData = [
    { month: "Jan", earnings: 1200000 },
    { month: "Feb", earnings: 1350000 },
    { month: "Mar", earnings: 1180000 },
    { month: "Apr", earnings: 1580000 },
    { month: "May", earnings: 1720000 },
    { month: "Jun", earnings: 1850000 },
  ];

  const bookings = [
    {
      id: 1,
      customer: "Adebayo Johnson",
      pickup: "Dec 8, 2024",
      return: "Dec 10, 2024",
      price: "₦75,000",
      status: "pending",
    },
    {
      id: 2,
      customer: "Chioma Okafor",
      pickup: "Dec 9, 2024",
      return: "Dec 11, 2024",
      price: "₦90,000",
      status: "approved",
    },
    {
      id: 3,
      customer: "Emeka Nwosu",
      pickup: "Dec 12, 2024",
      return: "Dec 14, 2024",
      price: "₦60,000",
      status: "pending",
    },
  ];

  const vehicles = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      rate: "₦45,000",
      status: "Available",
      trips: 28,
      image: "🚗",
    },
    {
      id: 2,
      name: "Range Rover Sport",
      rate: "₦65,000",
      status: "On Trip",
      trips: 42,
      image: "🚙",
    },
  ];

  const notifications = [
    {
      id: 1,
      message: "New booking request from Lagos Airport",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      message: "Documents verified successfully",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      message: "Weekly earnings report available",
      time: "3 hours ago",
      unread: true,
    },
  ];

  const earningsData = [
    {
      period: "Today",
      amount: "₦95,000",
      change: "+12%",
      color: "text-green-600",
    },
    {
      period: "This Week",
      amount: "₦502,000",
      change: "+8%",
      color: "text-green-600",
    },
    {
      period: "This Month",
      amount: "₦1,850,000",
      change: "+23%",
      color: "text-green-600",
    },
    {
      period: "Total Earnings",
      amount: "₦5,420,000",
      change: "+45%",
      color: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6">

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">Luxy Dashboard</h2>
            <p className="text-purple-100">Welcome back, Owner</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-purple-100">Last updated</p>
            <p className="text-sm font-medium">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {earningsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                {item.period}
              </span>
              <DollarSign className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {item.amount}
                </p>
                <p className={`text-sm font-medium ${item.color}`}>
                  {item.change}
                </p>
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Weekly Earnings Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Weekly Earnings
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyEarningsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                  axisLine={{ stroke: "#e5e7eb" }}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                  axisLine={{ stroke: "#e5e7eb" }}
                  tickFormatter={(value) => `₦${value / 1000}k`}
                />
                <Tooltip
                  formatter={(value) => [
                    `₦${value.toLocaleString()}`,
                    "Earnings",
                  ]}
                  labelStyle={{ color: "#374151" }}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Bar
                  dataKey="amount"
                  fill="url(#purpleGradient)"
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient
                    id="purpleGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#9333ea" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Trends Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Monthly Trends
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyTrendsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                  axisLine={{ stroke: "#e5e7eb" }}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                  axisLine={{ stroke: "#e5e7eb" }}
                  tickFormatter={(value) => `₦${value / 1000000}M`}
                />
                <Tooltip
                  formatter={(value) => [
                    `₦${value.toLocaleString()}`,
                    "Earnings",
                  ]}
                  labelStyle={{ color: "#374151" }}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="earnings"
                  stroke="#9333ea"
                  strokeWidth={2}
                  fill="url(#areaGradient)"
                />
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9333ea" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#9333ea" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Notifications */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Notifications
            </h3>
            <div className="flex items-center gap-2">
              <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                {notifications.filter((n) => n.unread).length} new
              </span>
              <Bell className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    notification.unread ? "bg-purple-500" : "bg-gray-300"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.time}
                  </p>
                </div>
                {notification.unread && (
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pending Bookings */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Pending Bookings
            </h3>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-500 border-b border-gray-100">
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Pickup</th>
                  <th className="pb-3">Return</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="text-sm">
                    <td className="py-3">{booking.customer}</td>
                    <td className="py-3">{booking.pickup}</td>
                    <td className="py-3">{booking.return}</td>
                    <td className="py-3 font-medium">{booking.price}</td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          booking.status === "approved"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3">
                      {booking.status === "pending" && (
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600">
                            Approve
                          </button>
                          <button className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600">
                            Decline
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Your Vehicles */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Your Vehicles</h3>
          <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium">
            <Plus className="w-4 h-4" />
            Add Another Car...
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {vehicle.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Daily Rate: {vehicle.rate}
                  </p>
                </div>
                <span className="text-2xl">{vehicle.image}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      vehicle.status === "Available"
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {vehicle.status}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  {vehicle.trips} trips completed
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
