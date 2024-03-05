"use client"
import React, { useState } from 'react'
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

// NOTE CREATE FORM
type Props = {
  category?: string,
  categories: string[],
  image?: string
}


const NoteCreate = (props: Props) => {
  const categoryNames = props.categories.map((category) => category.name);
  const router = useRouter();
  const path = usePathname();
  const id = path.slice(path.lastIndexOf('/') + 1);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(props.category || categoryNames[0]);
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



  // CREATE NOTE FORM
  const formSubmit = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    console.log('data:', data);
    var formObject = Object.fromEntries(data.entries());
    const categoryId = props.categories.find((element) => element.name === selectedCategory);
    formObject.category = categoryId._id;
    formObject.image = uploadedImage;
    setNoteData(formObject);
    console.log(formObject);

    const postNote = fetch(`http://localhost:3000/api/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject),
      cache: 'no-store',
    })
    .then((res) => {
      router.push(`/category/${selectedCategory}`);
    })
    .catch((error) => {
      console.log('Error creating note in NoteCreate:', error)
      alert(`error: ${error}`)
    })
  }

  return (
    <Paper className='paper-form' elevation={3}>
      <h1>Note Create</h1>
      <form onSubmit={formSubmit}>
        <Grid container justifyContent='space-around' >
          <Grid item xs={5.7} className='form-grid-item'>
            <input className='note-title-input' name='title' type='text' placeholder='Title' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />

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
            <textarea className='note-text-input' name='text' placeholder='Notes...' value={noteText} onChange={(e) => setNoteText(e.target.value)} />
            <SaveNoteButton />
            <DiscardEditButton buttonText='Note' confirmationText='note' />
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default NoteCreate