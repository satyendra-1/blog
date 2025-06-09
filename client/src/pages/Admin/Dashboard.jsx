import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import BlogTableItem from './BlogTableItem';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast'; //  FIXED: Required for showing success/error messages

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const { axios } = useAppContext();

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get('/api/admin/dashboard');
      data.success
        ? setDashboardData(data.dashboardData)
        : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">An overview of your blog's activity.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[ 
          { icon: assets.dashboard_icon_1, value: dashboardData.blogs, label: 'Blogs' },
          { icon: assets.dashboard_icon_2, value: dashboardData.comments, label: 'Comments' },
          { icon: assets.dashboard_icon_3, value: dashboardData.drafts, label: 'Drafts' }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-5 bg-white p-5 rounded-lg shadow-sm hover:-translate-y-1 transition-transform">
            <div className="bg-indigo-100 p-3 rounded-full">
              <img src={item.icon} alt={item.label} className="w-8 h-8" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-800">{item.value}</p>
              <p className="text-gray-500 font-medium">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Blogs Table */}
      <div>
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>

        <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg bg-white">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 text-left uppercase">
              <tr>
                <th className="px-2 py-4 xl:px-6">#</th>
                <th className="px-2 py-4">Blog Title</th>
                <th className="px-2 py-4">Date</th>
                <th className="px-2 py-4">Status</th>
                <th className="px-2 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboard} //   Correct function passed
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
