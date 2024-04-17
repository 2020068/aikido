import React from 'react';
import { useRouter } from 'next/router';

const Menu = () => {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/about');
  };

  const navigateToApply = () => {
    router.push('/apply');
  };

  const navigateToVisit = () => {
    router.push('/visit');
  };

  const navigateToPrograms = () => {
    router.push('/programs');
  };

  const navigateToMenu = () => {
    console.log('Navigate to Menu');
    // Add logic to toggle menu visibility or close the menu
  };

  const navigateToSearch = () => {
    console.log('Navigate to Search');
    // Add logic to navigate to search page
  };

  const navigateToNewsEvents = () => {
    console.log('Navigate to News-Events');
    // Add logic to navigate to news-events page
  };

  return (
    <div className="fixed top-0 right-0 h-screen w-screen bg-gray-500 bg-opacity-0 transform mt-8 -translate-y-1/2 z-10"> {/* Set z-index to 10 to ensure the menu is above other content */}

      <div className="flex flex-col items-end justify-end h-full">
        {/* Larger Buttons */}
        <button
          className="bg-blue-500 hover:bg-blue-700 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]"
          onClick={navigateToMenu}
        >
          Menu
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-l mb-4 w-[160px]"
          onClick={navigateToSearch}
        >
          Search
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-l mb-4 w-[160px]"
          onClick={navigateToNewsEvents}
        >
          News-Events
        </button>

        {/* Smaller Buttons */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-l mb-4 w-[120px]"
          onClick={navigateToApply}
        >
          Apply
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-l mb-4 w-[120px]"
          onClick={navigateToVisit}
        >
          Visit
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-l w-[120px]"
          onClick={navigateToPrograms}
        >
          Programs
        </button>
      </div>
    </div>
  );
};

export default Menu;