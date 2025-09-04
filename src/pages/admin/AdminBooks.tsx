import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2 } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminBooks: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);
  const books = [
    { id: 1, title: 'The Enoch Cipher', amazonLink: 'https://amazon.com/...' },
    { id: 2, title: 'Parables of Power', amazonLink: 'https://amazon.com/...' },
  ];

  const FormView = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Add New Book</h1>
      <form className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Book Title</label>
          <input type="text" className="w-full input-class" placeholder="Enter book title" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mockup Picture URL</label>
          <input type="url" className="w-full input-class" placeholder="https://example.com/image.jpg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Amazon KDP Link</label>
          <input type="url" className="w-full input-class" placeholder="https://amazon.com/dp/..." />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
          <textarea rows={4} className="w-full input-class" placeholder="Short description of the book"></textarea>
        </div>
        <div className="flex space-x-4">
          <button type="submit" className="btn-primary">Add Book</button>
          <button type="button" onClick={() => setIsCreating(false)} className="btn-secondary">Cancel</button>
        </div>
      </form>
    </motion.div>
  );

  const ListView = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Books</h1>
        <button onClick={() => setIsCreating(true)} className="flex items-center space-x-2 btn-primary">
          <Plus size={20} />
          <span>New Book</span>
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700">
              <th className="th-class">Title</th>
              <th className="th-class">Amazon Link</th>
              <th className="th-class text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {books.map(book => (
              <tr key={book.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="td-class font-medium">{book.title}</td>
                <td className="td-class truncate max-w-xs">{book.amazonLink}</td>
                <td className="td-class text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="p-2 text-gray-400 hover:text-primary-500"><Edit size={16} /></button>
                    <button className="p-2 text-gray-400 hover:text-red-500"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  return (
    <AdminLayout>
      <style>{`
        .input-class { padding: 0.75rem 1rem; border: 1px solid; border-radius: 0.5rem; width: 100%; }
        .input-class { @apply border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500; }
        .btn-primary { @apply px-4 py-2 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-lg transition-all; }
        .btn-secondary { @apply px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium; }
        .th-class { @apply px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400; }
        .td-class { @apply px-6 py-4 text-sm text-gray-700 dark:text-gray-300; }
      `}</style>
      {isCreating ? <FormView /> : <ListView />}
    </AdminLayout>
  );
};

export default AdminBooks;
