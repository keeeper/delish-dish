'use client';

import { useEffect } from 'react';
 
const Error = ({error}:{error:Error}) => {
  useEffect(() => {
    console.error(error);
  }, [error])
 
  return (
    <section className="max-w-[480px] w-full mx-auto sm:rounded-2xl bg-white p-4 sm:p-8 text-center">
      <h4>
        <strong>Error:</strong> Data can not be fetched
      </h4>
    </section>
  )
}

export default Error;