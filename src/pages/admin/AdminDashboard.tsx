import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  Mic, 
  ShoppingBag, 
  MessageCircle, 
  TrendingUp,
  Globe,
  Calendar,
  PieChart,
  BarChart3
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell } from 'recharts';

const AdminDashboard: React.FC = () => {
  // Mock analytics data
  const visitorData = [
    { name: 'Jan', visitors: 4000 },
    { name: 'Feb', visitors: 3000 },
    { name: 'Mar', visitors: 5000 },
    { name: 'Apr', visitors: 4500 },
    { name: 'May', visitors: 6000 },
    { name: 'Jun', visitors: 5500 },
  ];

  const regionData = [
    { name: 'North America', value: 40, color: '#c900ff' },
    { name: 'Europe', value: 30, color: '#330040' },
    { name: 'Asia', value: 20, color: '#9900cc' },
    { name: 'Others', value: 10, color: '#b300e6' },
  ];

  const stats = [
    {
      title: 'Total Visitors',
      value: '12,543',
      icon: Users,
      change: '+12%',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Blog Posts',
      value: '28',
      icon: BookOpen,
      change: '+3',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Podcast Episodes',
      value: '15',
      icon: Mic,
      change: '+2',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Comments',
      value: '234',
      icon: MessageCircle,
      change: '+18',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const quickActions = [
    {
      title: 'New Blog Post',
      description: 'Create and publish new content',
      icon: BookOpen,
      link: '/admin/blog',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Add Podcast',
      description: 'Upload new episode',
      icon: Mic,
      link: '/admin/podcast',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Manage Books',
      description: 'Add or edit book listings',
      icon: BookOpen,
      link: '/admin/books',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Add Merchandise',
      description: 'Upload new designs',
      icon: ShoppingBag,
      link: '/admin/merch',
      color: 'from-yellow-500 to-red-500'
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-primary rounded-2xl p-8 text-white"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-white/90">
            Manage your biblical wisdom platform from this central dashboard
          </p>
          <div className="mt-4 flex items-center text-white/80">
            <Calendar size={20} className="mr-2" />
            <span>{new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <span className="text-green-500 text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visitor Analytics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <TrendingUp className="text-primary-500 mr-3" size={24} />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Visitor Analytics
              </h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="visitors" 
                  stroke="#c900ff" 
                  fill="url(#colorGradient)" 
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c900ff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#c900ff" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Regional Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Globe className="text-primary-500 mr-3" size={24} />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Regional Distribution
              </h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={action.title}
                to={action.link}
                className="group block"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <action.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {action.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[
              { action: 'New comment on "Biblical Parables"', time: '2 hours ago', type: 'comment' },
              { action: 'Blog post "Revelation Secrets" published', time: '1 day ago', type: 'blog' },
              { action: 'New podcast episode uploaded', time: '3 days ago', type: 'podcast' },
              { action: '50 new visitors from social media', time: '1 week ago', type: 'visitor' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white">{activity.action}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
