import React , {useRef} from 'react'
import downloadIcon from "../assets/svg/download.svg"
import FooterIconComp from './FooterIconComp'

const CreateMovie = () => {

    const fileInputRef = useRef(null);

    const handleClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

  return (
    <div className='bg-[#093545] w-full h-auto flex flex-col gap-24'>
        <div className='w-[75%] mx-auto flex flex-col  mt-[120px]'>
        <div className='text-[48px] font-semibold text-white text-start mb-[120px]'>
            Create a new movie
        </div>
        
        <div className='flex justify-between w-full'>

            {/* Left side  */}
            <div className='w-[45%]'>
            <input 
             type="file"
             accept="image/*" 
             ref={fileInputRef}
             className=' hidden'/>
           
            <div className='border-2 border-dotted border-white rounded-[10px] w-[473px] h-[504px] bg-[#224957] flex flex-col justify-center items-center gap-3' onClick={handleClick}>
                <img src={downloadIcon} alt="" />
                <div className='text-white text-[14px]'>Drop an image here</div>
            </div>
            </div>

            {/* Right side  */}
            <div className='w-[45%]  flex flex-col gap-7'>
            <input type="text" alt='Email' placeholder='Email'  className='h-[45px] w-[362px] bg-[#224957] rounded-[10px] pl-4'/>
            <input type="text" alt='Password' placeholder='Password'  className='h-[45px] w-[216px] bg-[#224957] rounded-[10px] pl-4'/>

            <div className='flex gap-4 mt-7'>
            <div className='w-[167px] h-[56px] rounded-[10px]  flex justify-center items-center text-white font-semibold text-[16px] border-[1px]'>
                Title
            </div>
            <div className='w-[167px] h-[56px] rounded-[10px] bg-[#2BD17E] flex justify-center items-center text-white font-semibold text-[16px]'>
                Publishing year
            </div>
            </div>
            </div>
        </div>
        </div>

         <FooterIconComp/>

</div>
  )
}

export default CreateMovie