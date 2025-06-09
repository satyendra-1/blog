import React from 'react';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt, isPublished, _id } = blog;
  const blogDate = new Date(createdAt);
  const { axios } = useAppContext();

  // Delete blog function
  const deleteBlog = async () => {
    const confirm = window.confirm("Are you sure you want to delete this blog?");
    if (!confirm) return;
    try {
      const { data } = await axios.post('/api/blog/delete', { id: _id });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to delete blog");
    }
  };

  // Toggle publish/unpublish
  const togglePublish = async () => {
    try {
      const { data } = await axios.post('/api/blog/toggle-publish', { id: _id });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Toggle failed: " + error.message);
    }
  };

  return (
    <tr className='border-y border-gray-300'>
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{title}</td>

      {/* Date formatted nicely */}
      <td className="px-2 py-4 max-sm:hidden">
        {blogDate.toLocaleDateString("en-US", {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}
      </td>

      {/* Status */}
      <td className="px-2 py-4 max-sm:hidden">
        <p className={isPublished ? "text-green-600" : "text-orange-700"}>
          {isPublished ? "Published" : "Unpublished"}
        </p>
      </td>

      {/* Actions: toggle + delete */}
      <td className="px-2 py-4 flex text-xs gap-3">
        <button
          onClick={togglePublish}
          className="border px-2 py-0.5 mt-1 rounded cursor-pointer hover:bg-gray-100"
        >
          {isPublished ? "Unpublish" : "Publish"}
        </button>
        <img
          src={assets.cross_icon}
          alt="delete"
          className="w-8 hover:scale-110 transition-all cursor-pointer"
          onClick={deleteBlog}
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;
