
'use client';
import React, { useState } from 'react';
import { submitFormAction } from './actions';

const Page = () => {
    const [outputmsg, setOutputmsg] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <div className='mt-5 mx-8 md:flex md:flex-col'>
            <form action={async (formData) => {
                setLoading(true);
                const response = await submitFormAction(formData);
                setOutputmsg(response);
                setLoading(false);
            }} className='flex flex-col'>
                <input type='text' name='name' placeholder='Name' 
                className='border border-black px-2 py-1 w-[100%] h-[50px] my-5 md:h-[30px] outline-none'
                required />
                <input type='text' name='email' placeholder='Email' 
                className='border border-black px-2 py-1 w-[100%] h-[50px] my-5 md:h-[30px] outline-none' 
                required/>
                <input type='text' name='phone' placeholder='Phone' 
                className='border border-black px-2 py-1 w-[100%] h-[50px] my-5 md:h-[30px] outline-none' 
                required/>
                <input name='message' placeholder='Message' 
                className='border border-black px-2 py-1 w-[100%] h-[120px] resize-none my-5 md:h-[80px] outline-none'
                required></input>
                <button type='submit' className={`w-[90px] h-[90px] ${outputmsg.includes('Submitted') ? 'bg-green-400' : 'bg-blue-400'} rounded-full mb-5 text-white`}>
                    {loading ? 'Submitting' : `${outputmsg.includes('Submitted') ? 'Submitted' : 'Submit'}`}
                </button>
                {outputmsg && <p className='text-green-500'>{outputmsg}</p>}
            </form>
        </div>
    );
};