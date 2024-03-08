// useNavigationEvent.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const useNavigationEvent = (onPathnameChange: () => void) => {
  // Get current route
  const pathname = usePathname();

  // Save pathname on component mount into a REF
  const savedPathNameRef = useRef(pathname);

  useEffect(() => {
    // If REF has been changed, do the stuff
    if (savedPathNameRef.current !== pathname) { // <-- DOES NOT SEEM TO ENTER CONDITIONAL
      console.log('PATH HAS BEEN CHANGED. Calling callback function...')
      onPathnameChange();
      // Update REF
      savedPathNameRef.current = pathname;
    }
  }, [pathname, onPathnameChange]);
};

/*
// useNavigationEvent.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const useNavigationEvent = (onPathnameChange: () => void) => {
  console.log('inside useNavigationEvent');
  const pathname = usePathname(); // Get current route
  console.log('got pathname:', pathname);

  // Save pathname on component mount into a REF
  const savedPathNameRef = useRef(pathname);
  console.log('savedPathNameRef:', savedPathNameRef);
  useEffect(() => {
    console.log('inside useEffect')
    console.log('pathname inside useEffect:', pathname);
    // If REF has been changed, do the stuff
    if (savedPathNameRef.current !== pathname) { // <-- DOES NOT SEEM TO ENTER CONDITIONAL
      console.log('PATH HAS BEEN CHANGED. Calling callback function...')
      onPathnameChange();
      console.log('callback function has been called')
      // Update REF
      savedPathNameRef.current = pathname;
      console.log('updated REF with new pathname')
    } else if (savedPathNameRef.current === pathname) {
      console.log('savedPathNameRef.current === pathname')
    }
  }, [pathname, onPathnameChange]);
};
*/