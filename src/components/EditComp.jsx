import React , {useRef} from 'react'
import downloadIcon from "../assets/svg/download.svg"
import FooterIconComp from './FooterIconComp'

const EditComp = () => {

    const fileInputRef = useRef(null);

    const handleClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

  return (
    <div className='bg-[#093545] w-full h-auto flex flex-col gap-24'>
        <div className='w-[94%] sm:w-[75%] mx-auto flex flex-col mt-[80px] sm:mt-[120px]'>
        <div className='text-[32px] sm:text-[48px] sm:w-auto w-[380px] mx-auto sm:mx-0 font-semibold text-white text-start sm:mb-[120px] mb-[80px]'>
            Edit
        </div>
        
        <div className='flex justify-between w-full flex-wrap sm:gap-20 '>

          {/* mobile inputs  */}
          <div className=' sm:hidden w-[380px] mx-auto flex flex-col gap-7 mb-7'>
          <input type="text" alt='Title' placeholder='Title'  className='h-[45px] bg-[#224957] w-full   rounded-[10px] pl-4 '/>
          <input type="text" alt='Publishing year' placeholder='Publishing year'  className='h-[45px]  w-full  bg-[#224957] rounded-[10px] pl-4 '/>
          </div>

            {/* Left side  */}
            <div className='sm:w-[473px] w-[380px] sm:h-[504px] h-[372px] mx-auto '>
            <input 
             type="file"
             accept="image/*" 
             ref={fileInputRef}
             className=' hidden'/>
           
            <div className='border-2 border-dotted border-white rounded-[10px] sm:w-[473px] w-[380px] sm:h-[504px] h-[372px] bg-[#224957] flex flex-col justify-center items-center gap-3' onClick={handleClick}>
                <img src={downloadIcon} alt="" />
                <div className='text-white text-[14px]'>Drop an image here</div>
            </div>
            </div>

            {/* Right side  */}
            <div className='w-[380px] sm:w-[473px] h-auto  flex flex-col gap-7 mx-auto'>
            <input type="text" alt='Title' placeholder='Title'  className='h-[45px] w-[362px] bg-[#224957] rounded-[10px] pl-4 sm:block hidden'/>
            <input type="text" alt='Publishing year' placeholder='Publishing year'  className='h-[45px] w-[216px] bg-[#224957] rounded-[10px] pl-4 sm:block hidden'/>

            <div className='flex gap-4 mt-9'>
            <div className='w-[47%] sm:w-[167px] h-[56px] rounded-[10px]  flex justify-center items-center text-white font-semibold text-[16px] border-[1px]'>
                Cancel
            </div>
            <div className='w-[47%] sm:w-[167px] h-[56px] rounded-[10px] bg-[#2BD17E] flex justify-center items-center text-white font-semibold text-[16px]'>
                Update
            </div>
            </div>
            </div>
        </div>
        </div>

         <FooterIconComp/>

</div>
  )
}

export default EditComp