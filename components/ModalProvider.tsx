'use client';
import React, { useState, useEffect } from 'react'
import ProModal from './ProModal';

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true);
    }, [])
    
    if (!isMounted) {
        return null;
    }

  return (
    <>
      <ProModal />
    </>
  )
}

export default ModalProvider