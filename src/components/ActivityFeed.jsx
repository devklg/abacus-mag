import React from 'react';

const ActivityFeed = () => {
  // This would eventually be real-time data
  const activities = [
    {
      id: '1',
      name: 'John D.',
      pack: 'Pro Pack',
      timestamp: '06:37:42',
    },
    {
      id: '2',
      name: 'Sarah M.',
      pack: 'Elite Pack',
      timestamp: '06:35:31',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Pre-Enrollees</h2>
      <div className="space-y-2">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between py-2 border-b last:border-0"
          >
            <div>
              <span className="font-medium">{activity.name}</span>
              <span className="text-gray-600"> chose </span>
              <span className="text-blue-600">{activity.pack}</span>
            </div>
            <span className="text-gray-500 text-sm">{activity.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
