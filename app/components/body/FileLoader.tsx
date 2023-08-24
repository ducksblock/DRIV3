'use client'

import SvgComponent from './SvgComponent'

const FileLoader = () => {
  return (
    <>
      <div className='max-w-xl'>
        <label className='flex justify-center w-full h-32 px-4 transition bg-blue-600 border-2 rounded-md appearance-none cursor-pointer hover:bg-blue-400 shadow-2xl shadow-blue-500/40 hover:shadow-blue-400/50 border-none focus:outline-none'>
          <div className='flex items-center space-x-2'>
            <SvgComponent className='fill-white w-10' />
            <div className='font-medium text-2xl text-white'>Choose File</div>
          </div>
          <input type='file' name='file_upload' className='hidden' />
        </label>
      </div>
    </>
  )
}

export default FileLoader
