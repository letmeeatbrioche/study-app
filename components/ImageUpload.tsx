"use client";

import { useEffect, useState } from "react";
import { UploadButton } from "../utils/uploadthing";
import Link from "next/link";
import { propagateServerField } from "next/dist/server/lib/render-server";

export type UploadFileResponse<TServerOutput> = {
  name: string;
  size: number;
  key: string;
  url: string;

  // Matches what's returned from the serverside `onUploadComplete` callback
  // serverdata: TServerOutput;
};

type Props = {
  image?: string
}

export default function ImageUpload(props: Props) {
  // const [images, setImages] = useState<UploadFileResponse<{ uploadedBy: string; }>[]>([])
  const [uploadedImage, setUploadedImage] = useState<string>('');

  const imageList = uploadedImage ? (
    <>
      <p>Upload Complete!</p>
      <Link href={uploadedImage} target='_blank'>
        <img className="uploaded-img" src={uploadedImage} alt="User-uploaded image" />
      </Link>
    </>
  ) : null

  return (

    <div className='image-upload'>

      <div>
        {props.image ?
          <div>
            <Link href={props.image} target='_blank'>
              <img className="Note image" src={props.image} alt="User-uploaded image" />
            </Link>
          </div>
        : imageList ?
          <div>
            {imageList}
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
  );
}