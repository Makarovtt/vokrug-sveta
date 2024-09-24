"use client";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Image from "next/image";
import { FC, useState } from "react";
import { IGalleryItem } from "./gallery.interface";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface Iprops {
  initialState: IGalleryItem[];
  showBtn?: true | false;
}

export const GallerySection: FC<Iprops> = ({
  initialState,
  showBtn = false,
}) => {
  const [dataGallery, setDataGallery] = useState<IGalleryItem[]>(initialState);
  const onInit = () => {
    console.log("");
  };

  return (
    <section>
      <div
        className="max-w-[800px] mx-auto pt-10 px-3
                         sm:px-10"
      >
        <LightGallery
          onInit={onInit}
          speed={500}
          // plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-2 gap-2
            sm:grid-cols-3 
            lg:grid-cols-4 lg:gap-5"
        >
          {dataGallery &&
            dataGallery?.map((item) => {
              return (
                <a
                  href={item.src_big ? item.src_big : item.src}
                  key={item.id}
                  className="h-[150px] w-[150px] bg-white cursor-zoom-in relative"
                >
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    className="object-contain w-full h-full hover:opacity-50 transition"
                  />
                </a>
              );
            })}
        </LightGallery>

        {showBtn && (
          <div className="my-10 flex justify-center items-center">
            <Button
              as={Link}
              href="/sertificates"
              color="primary"
              variant="ghost"
              className="text-base"
            >
              смотреть все
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
