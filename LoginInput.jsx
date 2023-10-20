import React, { useState } from 'react';
import {motion} from 'framer-motion';
import { fadeInOut } from '../animations';

const LoginInput = ({placeHolder, icon, inputState, inputStateFunc, type, isSignUp}) => {
    const [isfocus, setIsfocus] = useState(false)
  return (
    <motion.div
    {...fadeInOut}
     className={`flex items-center justify-center gap-4 bg-gray-300 backdrop-blur-md rounded-md w-full px-4 py-2
     ${isfocus ? "shadow-md shadow-orange-400" : "shadow-none"}`}>
      {icon}
      <input
       type={type}
       placeholder={placeHolder}
       className='w-full h-full bg-transparent text-headingColor text-lg font-semibold border-none outline-none'
       value={inputState}
       onChange={(e) => inputStateFunc(e.target.value)}
       onFocus={() => setIsfocus(true)}
       onBlur={() => setIsfocus(false)}
       />
    </motion.div>
  )
}

export default LoginInput
