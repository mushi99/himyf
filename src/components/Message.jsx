import React from 'react'
import { arcade, butterbeer, bwood, cambridge, cambridge1, cave, church, firstTrip, stair } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: cave, title: 'August 18, 2024', description: "Remember the cave? Those rocks were crazy, the echoes were so cute!"},
    { Image: arcade, title: 'August 09, 2024', description: "This was such a cute and surprising date bb! Remember I sat down and we took photos and people thought I was posing lol!"}, 
    { Image: butterbeer, title: 'August 28, 2024', description: "I loved the butter beer more than the icecream!"},
    { Image: bwood, title: 'August 28, 2024', description: "The palace from the bollywood movie that I can't remember >_<"},
    { Image: cambridge1, title: 'August 6, 2024', description: "Cambridge: Your ARMS! (˶˃⤙˂˶)(drooling)"},
    { Image: cambridge, title: 'August 6, 2024', description: "Cambridge: Good day! "},
    { Image: church, title: 'August 28, 2024', description: "The isolated church: I still remember our convo on how middleeast is growing, weirdly we don't talk about deep stuff like that. "},
    { Image: stair, title: 'August 26, 2024', description: "The stairs where apparently Joker was shot lol XD!"},
    { Image: firstTrip, title: 'August 28, 2024', description: "First Trip!"},

  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Memories
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

export default Message