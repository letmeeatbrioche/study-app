'use client';
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import CreateNoteButton from "./CreateNoteButton";
import { Button } from "@mui/material";

type Props = {
  href?: string,
  purpose?: string
}

const LinkComponent = (props: Props) => {
  const router = useRouter();
  const path = usePathname();

  setTimeout(() => {
    console.log(`path: ${path}`);
    console.log(`path.slice(0, 5): ${path.slice(0, 5)}`);
  }, 3000);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (path === '/create') {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleNavigation = (url) => {
    if (path === '/create' || path.slice(0, 5) === '/edit') {
      console.log(`path: ${path}, confirming navigation...`);
      const confirmLeave = window.confirm('You have unsaved changes! Are you sure you want to leave?');
      if (!confirmLeave) {
        return;
      }
    }
    console.log(`Not on a form page, navigating away...`);
    router.push(url);
  };

  return (
    <>
      {props.purpose === 'home' ?
        <h1 className='home-button' onClick={() => handleNavigation(props.href)}>RAGGLE?</h1>
      : <Button variant='contained' onClick={() => handleNavigation('/create')}>Create New Note</Button>
      }
    </>
  )
};

export default LinkComponent;
