import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout';

//Component
import Poster from '../Components/Poster/Poster.Component';
import PlayFilters from '../Components/PlayFilters/PlayFilters.Component';

const PlayPage = () => {
    return (
        <>
            <div className='container mx-auto px-4 my-10'>
                <div className='w-full flex flex-col-reverse lg:flex-row-reverse gap-4'>
                    <div className='lg:w-3/4 p-4 bg-white rounded'>
                        <h2 className='text-2xl font-bold mb-4'>Play in NCR Delhi</h2>
                        <div className='flex flex-wrap'>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster isPlay={true} src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-vipul-goyal-live-0-2022-2-11-t-14-39-30.jpg" title="Vipul Goyal Live" subtitle="Comedy Shows | Hindi | 1hr 15mins" />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster isPlay={true} src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-madhur-sharma-live-in-bengaluru-0-2022-11-9-t-6-27-47.jpg" title="Vipul Goyal Live" subtitle="Comedy Shows | Hindi | 1hr 15mins" />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster isPlay={true} src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-stand-up-comedy-indiranagar-yuck-comedy-club-0-2022-11-10-t-16-5-12.jpg" title="Vipul Goyal Live" subtitle="Comedy Shows | Hindi | 1hr 15mins" />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster isPlay={true} src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-mehfil-01-karnataka-s-biggest-business-expo-0-2022-11-4-t-12-1-58.jpg" title="Vipul Goyal Live" subtitle="Comedy Shows | Hindi | 1hr 15mins" />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster isPlay={true} src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-vipul-goyal-live-0-2022-2-11-t-14-39-30.jpg" title="Vipul Goyal Live" subtitle="Comedy Shows | Hindi | 1hr 15mins" />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster isPlay={true} src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-vipul-goyal-live-0-2022-2-11-t-14-39-30.jpg" title="Vipul Goyal Live" subtitle="Comedy Shows | Hindi | 1hr 15mins" />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster isPlay={true} src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-vipul-goyal-live-0-2022-2-11-t-14-39-30.jpg" title="Vipul Goyal Live" subtitle="Comedy Shows | Hindi | 1hr 15mins" />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/4 p-4 bg-white rounded'>
                        <h2 className='text-2xl font-bold mb-2'>Filters</h2>
                        <div>
                            <PlayFilters title='Date' tags={['Today', 'Tomorrow', 'This Weekend']} />
                        </div>
                        <div>
                            <PlayFilters title='Language' tags={['English', 'Hindi', 'Tamil']} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DefaultLayoutHoc(PlayPage);