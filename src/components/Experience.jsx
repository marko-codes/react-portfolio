import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import mysql from '../assets/mysql.png'
import php from '../assets/php.png'
import postgre from '../assets/postgre.png'
import springboot from '../assets/springboot.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import angular from '../assets/angular.png'
import dart from '../assets/dart.png'

const Experience = () => {

const techs =[
    {
        id:1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id:2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        id:3,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id:4,
        src: reactImage,
        title: 'React',
        style: 'shadow-blue-600'
    },
    {
        id:5,
        src: angular,
        title: 'Angular',
        style: 'shadow-red-500'
    },
    {
        id:6,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-400'
    },
    {
        id:7,
        src: springboot,
        title: 'Spring Boot',
        style: 'shadow-green-400'
    },
    {
        id:8,
        src: php,
        title: 'PHP',
        style: 'shadow-blue-700'
    },
    {
        id:9,
        src: mysql,
        title: 'My SQL',
        style: 'shadow-blue-500'
    },
    {
        id:10,
        src: postgre,
        title: 'Postgre SQL',
        style: 'shadow-blue-600'
    },
    {
        id:11,
        src: dart,
        title: 'Dart',
        style: 'shadow-sky-400'
    },
    {
        id:12,
        src: github,
        title: 'GitHub',
        style: 'shadow-gray-400'
    },
]

  return (
    <div name="experience" className=' bg-gradient-to-b from-gray-800 to-black w-full h-auto md:h-screen'>
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className=' py-6'>These are the technologies I`ve worked with</p>
            </div>
            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-6 px-6 sm:p-0'>
                {techs.map(({id, src, title, style})=>(
                    <div key={id} className={
                        "shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
                        +" "
                        +style
                        }>
                    <img src={src} alt={title} className=' w-20 mx-auto'/>
                    <p className=' mt-4'>{title}</p>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience