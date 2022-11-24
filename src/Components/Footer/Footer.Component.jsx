import React from 'react'
import { BiSupport, BiReceipt, BiListOl, BiLeftIndent, BiWorld } from 'react-icons/bi'
const Footer = () => {
    return (
        <>
            <div className=' bg-red-400'>
                <div className=' flex-col text-md text-black p-4 w-full'>
                    <hr />
                    <div className='flex gap-2 justify-end'>
                        Contact us
                        <BiSupport />
                    </div>
                    <div className='flex gap-2 justify-end'>
                        Read More
                        <BiReceipt />
                    </div>
                    <div className='flex gap-2 justify-end'>
                        Other Services
                        <BiListOl />
                    </div>
                    <div className='flex gap-2 justify-end'>
                        Terms and Conditions
                        <BiLeftIndent />
                    </div>
                    <div className='flex gap-2 justify-end'>
                        Socials
                        <BiWorld />
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Footer