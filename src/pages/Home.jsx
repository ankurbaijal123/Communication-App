import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Connecting People Across Faiths & Interests
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Welcome to CommunionApp, where we bring people together through meaningful events
            and foster understanding across different faiths and communities.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/events')}
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold
                     hover:bg-secondary transition-colors duration-300"
          >
            Explore Events
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Connect</h3>
            <p className="text-gray-600">
              Build meaningful relationships with people from diverse backgrounds.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Learn</h3>
            <p className="text-gray-600">
              Discover and understand different faiths, cultures, and perspectives.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Grow</h3>
            <p className="text-gray-600">
              Participate in events that enrich your spiritual and personal growth.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default Home;