import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Interfaith Dialog',
      date: '2025-03-15',
      location: 'Community Center',
      category: 'Religious',
      description: 'A gathering for open dialogue between different faith communities.'
    },
    {
      id: 2,
      title: 'Community Service Day',
      date: '2025-03-20',
      location: 'Downtown',
      category: 'Charity',
      description: 'Join us in giving back to our community through various service projects.'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    category: 'Religious',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setNewEvent({
      title: '',
      date: '',
      location: '',
      category: 'Religious',
      description: ''
    });
  };

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <div className="container mx-auto px-6 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold mb-6">Community Events</h2>
        
        <div className="mb-6 flex space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('Religious')}
            className={`px-4 py-2 rounded ${filter === 'Religious' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Religious
          </button>
          <button
            onClick={() => setFilter('Social')}
            className={`px-4 py-2 rounded ${filter === 'Social' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Social
          </button>
          <button
            onClick={() => setFilter('Charity')}
            className={`px-4 py-2 rounded ${filter === 'Charity' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Charity
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Add New Event</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
              className="border p-2 rounded"
              required
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={newEvent.location}
              onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
              className="border p-2 rounded"
              required
            />
            <select
              value={newEvent.category}
              onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}
              className="border p-2 rounded"
            >
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
            <textarea
              placeholder="Description"
              value={newEvent.description}
              onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
              className="border p-2 rounded md:col-span-2"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition-colors"
          >
            Add Event
          </button>
        </form>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-600 mb-2">{event.location}</p>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                  {event.category}
                </span>
                <p className="text-gray-700">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Events;