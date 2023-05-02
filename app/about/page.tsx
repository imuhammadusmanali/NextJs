import Link from 'next/link';
import React from 'react';

export default function About() {
  // throw new Error('New Error');
  return (
    <>
      <h1>About Us Page</h1>
      <Link href={'/'}>Link to Home Page</Link>
    </>
  );
}
