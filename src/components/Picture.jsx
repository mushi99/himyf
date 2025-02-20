import React from 'react'
import {arcade1, firstDate} from '../assets'
import { lastDay } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'
import { scotland } from '../assets'
import {aquarium} from '../assets'
import {boatRide} from '../assets'

function Picture() {
  const navigate = useNavigate();

  const pictures = [   
    { Image: firstDate, title: 'August 04, 2024', description: "First Date!"},   
    { Image: scotland, title: 'August 26, 2024', description: "From talking about it in snapchat to actually going to Edinburg, you make my dreams come true!"},
    { Image: lastDay, title: 'August 28, 2024', description: "Last day of the most amazing trip of my life!"},
    { Image: boatRide, title: 'August 17, 2024', description: ""},   
    { Image: arcade1, title: 'August 09, 2024', description: "Arcade Date Checked!"},  
    { Image: aquarium, title: 'August 24, 2024', description: "First visit to aquarium! We need to take our sophia and zach here."},

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Pictures
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture
