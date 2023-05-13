import React from 'react'

export default function Page() {
    return (
        <div className="min-w-full px-20 text-white font-display">
            <h1 className='text-4xl my-5 text-center'>Contact Us</h1>
            <div className='flex justify-center my-10'>
                <div className='flex flex-col justify-around'>
                    <div>
                        <h3 className='text-2xl underline'>Address</h3>
                        <p>Nigdi</p>
                        <p>Pune, Maharastra</p>
                    </div>
                    <div>
                        <h3 className='text-2xl underline'>Phone</h3>
                        <p>7887317615</p>
                        <p>8668554794</p>
                    </div>
                    <div>
                        <h3 className='text-2xl underline'>Email</h3>
                        <p>support@honeybadgersco.com</p>
                    </div>
                </div>
                <div className='ml-64 flex flex-col space-y-5'>
                    <div>
                        <label htmlFor="name" className='block text-white text-xl'>Name:</label>
                        <input name='name' id='name' type="text" className='w-96 p-2 rounded-md' />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-white text-xl'>Email:</label>
                        <input name='email' id='email' type="email" className='w-96 p-2 rounded-md' />
                    </div>
                    <div>
                        <label htmlFor="contact" className='block text-white text-xl'>Select Team to contact:</label>
                        <select name="contact" id="contact" className='text-black w-96  p-2 rounded-md'>
                            <option value="0">Select Value</option>
                            <option value="1">Sales Team</option>
                            <option value="2">Customer Support</option>
                            <option value="3">Partner</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-white text-xl'>Message:</label>
                        <textarea name='message' id='message' rows={4} className='w-96 p-2 rounded-md' />
                    </div>
                    <div className='text-center'>
                        <button className='bg-dark1 px-5 py-2 rounded-md hover:bg-light1 hover:text-dark2'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
