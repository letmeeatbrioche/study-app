'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const Test = () => {
  const router = useRouter();
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleChange = () => {
    setHasUnsavedChanges(true);
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasUnsavedChanges]);

  const handleNavigation = (url) => {
    if (hasUnsavedChanges) {
      const confirmLeave = window.confirm('You have unsaved changes! Are you sure you want to leave?');
      if (!confirmLeave) {
        return;
      }
      setHasUnsavedChanges(false);
    }
    router.push(url);
  };

    return (
      <div>
        <h1>TESTING NAVIGATION EVENT HANDLING</h1>
        <input type="text" onChange={handleChange} placeholder="Type something..." />
        <button onClick={() => handleNavigation('/')}>Go Home</button>
      </div>
    );
};

export default Test;