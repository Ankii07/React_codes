import React, { useState } from 'react'
import Modal from './Modal'

export default function Contact() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <>
    <h1 className='text-xl'>
      Connect with us on{' '}
      <a className='text-blue-600 hover:text-blue-700' href="https://www.youtube.com/@procodrr" target="_blank">
        YouTube
      </a>
    </h1>
    <button onClick={() => setIsOpen(true)}>Open PopUp</button>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} header={<p>Hero</p>}></Modal>
    </>
  )
}
