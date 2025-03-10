import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About CommunionApp</h1>
          
          <section className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              CommunionApp was created with a vision to bridge gaps between different faith communities
              and foster meaningful connections through shared experiences and events. We believe in
              the power of community and understanding to create a more harmonious world.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Development Process</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Technology Stack</h3>
                <p className="text-gray-700">
                  Built with React, Tailwind CSS, and Framer Motion for smooth animations.
                  React Router handles navigation, while state management is handled through
                  React's built-in hooks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Responsive design that works across all devices</li>
                  <li>Interactive event filtering system</li>
                  <li>Smooth page transitions and animations</li>
                  <li>User-friendly event creation interface</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Developer</h2>
            <p className="text-gray-700">
              Made with ❤️ by Ankur Baijal
            </p>
          </section>
        </motion.div>
      </main>
    </div>
  );
}

export default About;