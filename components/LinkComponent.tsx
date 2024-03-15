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
  // let path: string;

  // try {
  //   path = usePathname();
  // } catch {
  //   console.log(`COULDN'T GET PATH NAME`);
  // }

  // setTimeout(() => {
  //   console.log(`path: ${path}`);
  //   console.log(`path.slice(0, 5): ${path.slice(0, 5)}`);
  // }, 3000);

  useEffect(() => {
    if (path === '/create' || path.slice(0, 5) === '/edit' || path === '/test') {
      // console.log('On a form page...');
      const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = '';
      }

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    } else {
      // console.log('NOT a form page');
    }
  }, []);

  const handleNavigation = (url) => {
    if (path === '/create' || path.slice(0, 5) === '/edit' || path === '/test') {
      // console.log(`path: ${path}, confirming navigation...`);
      const confirmLeave = window.confirm('You have unsaved changes! Are you sure you want to leave?');
      if (!confirmLeave) {
        return;
      }
    }
    // console.log(`Not on a form page, navigating away...`);
    router.push(url);
  };

  return (
    <>
      {props.purpose === 'home' ?
        <a className='home-button' onClick={() => handleNavigation('/')}>Categori</a>
      : <a href={'/create'}>
         {/* <Button variant='contained'>Create---Note</Button> */}
         <Button variant='contained' onClick={() => handleNavigation('/create')}>Create New Note</Button>
        </a>
      // <Button variant='contained' onClick={() => handleNavigation('/create')}>Create New Note</Button>
      }
    </>
  )
};

export default LinkComponent;