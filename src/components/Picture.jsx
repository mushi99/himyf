import React from 'react'
import { cave } from '../assets'
import { lastDay } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'
import { scotland } from '../assets'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: cave, title: 'August 18, 2024', description: "Remember the cave? Those rocks were crazy, the echoes were so cute!"},   
    { Image: scotland, title: 'August 26, 2024', description: "From talking about it in snapchat to actually going to Edinburg, making my dreams come true!"},
    { Image: lastDay, title: 'August 28, 2024', description: "Last day of the most amazing trip of my life!"},

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
