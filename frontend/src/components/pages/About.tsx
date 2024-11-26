import React from 'react';

interface AboutProps {
  open: boolean;
}
export const About = ({open}:AboutProps) => {
  return (
    <div>
      {open ? <h1>About Page</h1> : <h1>Page About</h1>};
    </div>
  );
};

