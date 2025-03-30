import React from 'react';

const BinaryTree = () => {
  // Placeholder data for the binary tree
  const treeData = {
    user: { name: 'You', volume: 500 },
    leftLeg: { name: 'Left Leg', volume: 300 },
    rightLeg: { name: 'Right Leg', volume: 200 },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Binary Powerline Visualization</h2>
      <div className="flex flex-col items-center">
        {/* User Node */}
        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4">
          <p className="font-bold">{treeData.user.name}</p>
          <p>Volume: {treeData.user.volume}</p>
        </div>

        {/* Binary Tree */}
        <div className="flex justify-between w-full max-w-md">
          {/* Left Leg */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <p className="font-bold">{treeData.leftLeg.name}</p>
              <p>Volume: {treeData.leftLeg.volume}</p>
            </div>
            <p className="text-sm text-gray-500 mt-2">Team Members: 10</p>
          </div>

          {/* Right Leg */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <p className="font-bold">{treeData.rightLeg.name}</p>
              <p>Volume: {treeData.rightLeg.volume}</p>
            </div>
            <p className="text-sm text-gray-500 mt-2">Team Members: 8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinaryTree;
