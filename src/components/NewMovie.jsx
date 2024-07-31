import React from 'react'
import FooterIconComp from './FooterIconComp'

const NewMovie = () => {
  return (
    <div className='bg-[#093545] w-full h-auto flex flex-col gap-24'>

    
      <div className='flex flex-col gap-7 justify-center mt-[324px] mb-[170px]'>
        <div className='text-[48px] font-semibold text-white text-center'>
            Your movie list is empty
        </div>
        <div className='w-[202px] h-[54px] rounded-[10px] mx-auto bg-[#2BD17E] flex justify-center items-center text-white font-semibold text-[16px]'>
            Add a new movie
        </div>
      </div>

     <FooterIconComp/>

</div>
  )
}

export default NewMovie