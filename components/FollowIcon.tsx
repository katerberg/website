import React from 'react';

type FollowIconProperties = {
  src: string;
  link: string;
  alt: string;
};

function FollowIcon({ src, link, alt }: FollowIconProperties) {
  return (
    <a href={link}>
      <img alt={alt} src={src} />
    </a>
  );
}

export default FollowIcon;
