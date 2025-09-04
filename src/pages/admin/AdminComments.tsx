import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, MessageSquare, UserX, Trash2 } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminComments: React.FC = () => {
  const comments = [
    { id: 1, user: 'John Doe', comment: 'This was an incredibly insightful article!', post: 'The Hidden Meanings...', status: 'Pending' },
    { id: 2, user: 'Jane Smith', comment: 'I have a question about the timeline...', post: 'Unsealing Revelation', status: 'Approved' },
    { id: 3, user: 'SpamBot', comment: 'Buy cheap widgets here!', post: 'The Power of Sacred Names', status: 'Blocked' },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Blocked': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300';
    }
  };
  
  return (
    <AdminLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Comments</h1>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="th-class">User</th>
                <th className="th-class">Comment</th>
                <th className="th-class">In Response To</th>
                <th className="th-class">Status</th>
                <th className="th-class text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {comments.map(comment => (
                <tr key={comment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="td-class font-medium">{comment.user}</td>
                  <td className="td-class italic">"{comment.comment}"</td>
                  <td className="td-class underline cursor-pointer">{comment.post}</td>
                  <td className="td-class">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusClass(comment.status)}`}>
                      {comment.status}
                    </span>
                  </td>
                  <td className="td-class text-right">
                    <div className="flex items-center justify-end space-x-1">
                      <button title="Approve" className="p-2 text-gray-400 hover:text-green-500"><Check size={16} /></button>
                      <button title="Reply" className="p-2 text-gray-400 hover:text-blue-500"><MessageSquare size={16} /></button>
                      <button title="Block User" className="p-2 text-gray-400 hover:text-yellow-500"><UserX size={16} /></button>
                      <button title="Delete" className="p-2 text-gray-400 hover:text-red-500"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      <style>{`
        .th-class { @apply px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400; }
        .td-class { @apply px-6 py-4 text-sm text-gray-700 dark:text-gray-300; }
      `}</style>
    </AdminLayout>
  );
};

export default AdminComments;
