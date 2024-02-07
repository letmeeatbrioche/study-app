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
  image: string
}

// ADDED TEST PROPS HERE TO TEST IN DIFFERENT BRANCH
const testProps = {
  name: 'Math and raggle and fraggle',
  image: 'https://s3-eu-west-1.amazonaws.com/media.squirrelaccord.uk/2021/09/AdobeStock_239716417_Isle_of_Wight_square_256.jpg',
  text: `"They use a mental, spatial map in order to find it. Think of a squirrel GPS. And they go off of, okay there's a rock here, and a tree there, the nut is somewhere between there," Tekiela said. Then, they use their sense of smell to find the exact location, even under the snow."`,
  title: 'How squirrels find their burried food',
  category: 'Squirrels'
}

export default function ImageUpload(props: Props) {
  // const [images, setImages] = useState<UploadFileResponse<{ uploadedBy: string; }>[]>([])
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const [isClient, setIsClient] = useState(false)

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
        {imageList ?
          <div>
            {imageList}
          </div>
          :
          <div>
            <Link href={props.image} target='_blank'>
              <img className="Note image" src={props.image} alt="User-uploaded image" />
            </Link>
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