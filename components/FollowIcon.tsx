import React from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';

type FollowIconProperties = {
  src: ImageProps['src'];
  link: string;
  alt: string;
};

function FollowIcon({ src, link, alt }: FollowIconProperties) {
  return (
    <a href={link}>
      <Image width={100} height={100} alt={alt} src={src} />
    </a>
  );
}

export default FollowIcon;
