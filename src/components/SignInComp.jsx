import FooterIconComp from "./FooterIconComp"

 

const SignInComp = () => {
  return (
    <div className='bg-[#093545] w-full h-auto flex flex-col '>

        <div className='w-[300px]  mx-auto flex flex-col gap-7  justify-center items-center mt-[220px] mb-[120px]'>
            <div className='text-[64px] font-semibold text-white text-center'>
                Sign In
            </div>
            <input type="text" alt='Email' placeholder='Email'  className='h-[45px] w-full bg-[#224957] rounded-xl pl-4'/>
            <input type="text" alt='Password' placeholder='Password'  className='h-[45px] w-full bg-[#224957] rounded-xl pl-4'/>
            
            <div className='flex w-full justify-center items-center gap-4'>
                <input 
                type="checkbox"
                id='checkbox'
                className='h-[17px] w-[18px]  rounded-none accent-[#224957] '
                />
                <label for="checkbox" className='font-normal text-white text-[14px]'>Remember me</label>
            </div>

            <div className='w-full h-[54px] rounded-[10px] bg-[#2BD17E] flex justify-center items-center text-white font-semibold text-[16px]'>
                Login
            </div>
        </div>

     <FooterIconComp/>
        

    </div>
  )
}

export default SignInComp