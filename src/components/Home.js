import img from './photo/buffer.png';
import image from './photo/wertyu.jpeg';
import images from './photo/qwerty.jpeg';
import imgs from './photo/pp.jpg';




const Home = () => {

    return (
        <div>

            <div className='grid grid-cols-2 mt-20 '>
                <div className='p-5'><img src={img} alt="" srcset="" /></div>
                <div className=''>
                    <h1 className='text-6xl font-bold'>Trust, Transparency, and Curiosity: Batsirai Chada on Buffer's Unique Culture</h1>
                    <h1 className="text-xl font-normal py-7">Batsirai Chada is a Growth Product Manager at Buffer, where he’s worked for about nine months. We spoke to him when he first joined to find out about his journey to Buffer, how he works, and what he does outside of work.</h1>

                    <div className=' ring-5 ring-blue-100  '>
                        <div className='m-6 space-y-3 flex '>
                            <div>
                            <img src={imgs} alt="" className="w-16 h-16 rounded-full border-4 p-1 border-blue-300" />
                            </div>
                            <div className='px- 2'>

                                <h1 class="  font-bold">Tamilo Oladipo</h1>
                                <h1 className="float-left text-black font-semibold">Content Writter @Buffer</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex space-x-20 text-xl  text-black  mt-10 mx-20 ">
                <a href="#" className="border-b-4 border-blue-700 border-bottom-width: 16px; ">Latest updates</a>
                <a href="#" className="  ">Small Business</a>
                <a href="#" className="  ">Social Media Marketing</a>
                <a href="#" className="  ">News</a>
                <a href="#" className="  ">Podcasts</a>
                <a href="#" className="  ">Open blog</a>
                <a href="#" className="  ">Case studies</a>
            </div>

            <div className="grid grid-cols-3 divide-x space-x-5 mx-20 divide-white border-t-4 ring-blue-100 ">
                <div className='ring-2 ring-blue-100 mt-10'>
                    <div className='m-6 space-y-5 '>
                        <img src={img} alt="" srcset="" className="w-full h-64 " />
                        <div className="flow-root mx-1  text-xl ">
                            <p className="float-left text-blue-700 font-semibold">
                                Open
                            </p>

                            <p className="float-right text-black font-semibold">
                                Apr 27, 2023
                            </p>
                        </div>
                        <h1 className="text-2xl font-bold">Trust, Transparency, and Curiosity: Batsirai Chada on Buffer's Unique Culture</h1>
                        <h1 className="text-xl font-normal ">Batsirai Chada is a Growth Product Manager at Buffer, where he's worked for about nine months.</h1>
                    </div>
                </div>
                <div className='ring-2 ring-blue-100 mt-10'>
                    <div className='m-6 space-y-5 '>
                        <img src={image} alt="" srcset="" className="w-full h-64 " />
                        <div className="flow-root mx-1  text-xl">
                            <p className="float-left text-blue-700 font-semibold">
                                Open
                            </p>

                            <p className="float-right text-black font-semibold">
                                Apr 25, 2023
                            </p>
                        </div>
                        <h1 className="text-2xl font-bold">how we handle severance in cases
                            of mutual separation</h1>
                        <h1 className="text-xl font-normal py-7">we ve always aimed to chart our courses at
                            buffer for how we approach traditional business</h1>

                    </div>
                </div>



                <div className=' ring-2 ring-blue-100 mt-10'>
                    <div className='m-6 space-y-3'>
                        <img src={images} alt="" srcset="" className="w-full h-64  " />
                        <div className="flow-root mx-1  text-xl py-1">
                            <p className="float-left text-blue-700 font-semibold">
                                Open
                            </p>

                            <p className="float-right text-black font-semibold">
                                Apr 24, 2023
                            </p>
                        </div>
                        <h1 className="text-2xl font-bold py-2">An update on twitter's API changes
                            and buffer</h1>
                        <h1 className="text-xl font-normal py-7">twitter has made anumber of change
                            to ther api and acces tier over over last few weeks</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;