"use client"
import React, { useEffect, useState } from 'react'
import SaveNoteButton from './SaveNoteButton'
import DiscardEditButton from './DiscardEditButton'
import CategoryDropdown from './CategoryDropdown'
import ImageUpload from './ImageUpload'
import { Grid, Paper } from '@mui/material'

// IMAGE UPLOADER
import { UploadButton } from "../utils/uploadthing";
import Link from "next/link";
import { propagateServerField } from "next/dist/server/lib/render-server";
import { redirect, usePathname, useRouter } from 'next/navigation'
import { NextResponse } from 'next/server'

export type UploadFileResponse<TServerOutput> = {
  name: string;
  size: number;
  key: string;
  url: string;

  // Matches what's returned from the serverside `onUploadComplete` callback
  // serverdata: TServerOutput;
};

// type Props = {
//   image?: string
// }

// NOTE EDIT FORM
type Props = {
  image?: string,
  text: string,
  title?: string,
  category?: string,
  categories?: string[],
  id: string
}

const NoteEdit = (props: Props) => {
  const categoryNames = props.categories.map((category) => category.name);
  const router = useRouter();
  const path = usePathname();
  const id = path.slice(path.lastIndexOf('/') + 1);
  const [noteTitle, setNoteTitle] = useState(props.title);
  const [noteText, setNoteText] = useState(props.text);
  const [isActive, setIsActive] = useState(false);
  const noteCategory = props.categories.find((category) => category._id === props.category);
  const [selectedCategory, setSelectedCategory] = useState(noteCategory.name || categoryNames[0]);
  const [noteData, setNoteData] = useState({});
  // IMGAE UPLOADER
  const [uploadedImage, setUploadedImage] = useState<string>('');

  // IMGAE UPLOADER
  const imageList = uploadedImage ? (
    <>
      <p>Upload Complete!</p>
      <Link href={uploadedImage} target='_blank'>
        <img className="uploaded-img" src={uploadedImage} alt="User-uploaded image" />
      </Link>
    </>
  ) : null


  // Handle Navigation with Unsaved Changes
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleChange = (e, input) => {
    console.log('in handleChange');
    if (input === 'title') setNoteTitle(e.target.value);
    if (input === 'text') setNoteText(e.target.value);
    setHasUnsavedChanges(true);
  };

  useEffect(() => {
    console.log('uploadedImage:', uploadedImage);

    setHasUnsavedChanges(true);

    const handleBeforeUnload = (e) => {
      console.log('handlingBeforeUnload');
      if (hasUnsavedChanges) {
        console.log('hasUnsavedChanges');
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasUnsavedChanges, uploadedImage, selectedCategory]);

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


  // EDIT NOTE FORM
  const formSubmit = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    console.log('data:', data);
    var formObject = Object.fromEntries(data.entries());
    if (categoryNames.indexOf(selectedCategory) > -1) {
      const categoryId = props.categories.find((element) => element.name === selectedCategory);
      formObject.category = categoryId._id;
    } else {
      formObject.categoryName = selectedCategory;
    }
    formObject.image = uploadedImage || props.image;
    formObject.id = id;
    setNoteData(formObject);
    console.log(formObject);

    const editNote = fetch(`http://localhost:3000/api/note/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject),
      cache: 'no-store',
    })
    .then((res) => {
      router.push(`/note-view/${id}`);
    })
    .catch((error) => {
      console.log('Error creating note in NoteEdit:', error)
      alert(`error: ${error}`)
    })
  }

  return (
    <Paper className='paper-form' elevation={3}>
      <h1>Note Edit</h1>
      <form onSubmit={formSubmit}>
        <Grid container justifyContent='space-around' >
          <Grid item xs={5.7} className='form-grid-item'>
            <input className='note-title-input' name='title' type='text' placeholder='Title' value={noteTitle} onChange={(e) => handleChange(e, 'title')} />

        <div className='image-uploader'>
          <div>
            {imageList ?
              <div>
                {imageList}
              </div>
            : props.image ?
            <div>
              <Link href={props.image} target='_blank'>
                <img className="Note image" src={props.image} alt="User-uploaded image" />
              </Link>
            </div>
            : null
            }

            <UploadButton
              className="image-upload-button-container"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                if (res) {
                  // Do something with the response
                  const json = JSON.stringify(res);
                  const image = res[0].url;
                  console.log("Files (json): ", json);
                  console.log('res[0].url:', image);
                  setUploadedImage(image);
                }
                // alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
        </div>

          </Grid>
          <Grid item xs={5.7} className='form-grid-item'>
            <CategoryDropdown categories={categoryNames} isActive={isActive} setIsActive={setIsActive} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <textarea className='note-text-input' name='text' placeholder='Notes...' value={noteText} onChange={(e) => handleChange(e, 'text')} />
            <SaveNoteButton />
            <DiscardEditButton buttonText='Note' confirmationText='note' />
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default NoteEdit
































// "use client"
// import React, { useState } from 'react'
// import SaveNoteButton from './SaveNoteButton'
// import DiscardEditButton from './DiscardEditButton'
// import CategoryDropdown from './CategoryDropdown'
// import ImageUpload from './ImageUpload'
// import { Grid, Paper } from '@mui/material'

// type Props = {
//   image?: string,
//   text: string,
//   title?: string,
//   category?: string,
//   categories?: string[],
//   id: string
// }

// const NoteEdit = (props: Props) => {
//   const [noteTitle, setNoteTitle] = useState(props.title);
//   const [noteText, setNoteText] = useState(props.text);
//   const [isActive, setIsActive] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(props.category || props.categories[0]);

//   return (
//     <Paper className='paper-form' elevation={3}>
//       <h1>Note Edit</h1>
//       <form>
//         <Grid container justifyContent='space-around' >
//           <Grid item xs={5.7} className='form-grid-item'>
//             <input className='note-title-input' type='text' placeholder='Title' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
//             <ImageUpload image={props.image} /> {/** GET IMAGE FROM PROPS TO DISPLAY */}
//           </Grid>
//           <Grid item xs={5.7} className='form-grid-item'>
//             <CategoryDropdown categories={props.categories} isActive={isActive} setIsActive={setIsActive} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
//             <textarea className='note-text-input' placeholder='Notes...' value={noteText} onChange={(e) => setNoteText(e.target.value)} />
//             <SaveNoteButton />
//             <DiscardEditButton buttonText='Edits' confirmationText='edits' />
//           </Grid>
//         </Grid>
//       </form>
//     </Paper>
//   )
// }

// export default NoteEdit