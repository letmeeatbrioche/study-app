"use client";

import { useState } from "react";
import { UploadButton } from "../utils/uploadthing";
import Link from "next/link";

export type UploadFileResponse<TServerOutput> = {
  name: string;
  size: number;
  key: string;
  url: string;

  // Matches what's returned from the serverside `onUploadComplete` callback
  // serverdata: TServerOutput;
};

export default function ImageUpload() {
  // const [images, setImages] = useState<UploadFileResponse<{ uploadedBy: string; }>[]>([])
  const [images, setImages] = useState<string>('');

  const imageList = images ? (
    <>
      <p>Upload Complete!</p>
      <Link href={images} target='_blank'>
        <img className="uploaded-img" src={images} alt="User-uploaded image" />
      </Link>
    </>
  ) : null

  return (
    <div className='image-upload'>
      <div>
        {imageList &&
          <div>
            {imageList}
          </div>
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
              setImages(image);
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
  );
}
