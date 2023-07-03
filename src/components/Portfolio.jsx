import React from 'react'
import kanban from '../assets/portfolio/kanbantech.png'
import myportfolio from '../assets/portfolio/my-portfoliotech.png'
import nps from '../assets/portfolio/npstech.png'
import scientific from '../assets/portfolio/scientifictech.png'
import npsbackend from '../assets/portfolio/npsbackendtech.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: nps,
            demolink: '',
            codelink: '',
            name: 'NPS Statistics frontend'
        },
        {
            id: 2,
            src: npsbackend,
            demolink: '',
            codelink: '',
            name: 'NPS Statistics Backend'
        },
        {
            id: 3,
            src: myportfolio,
            demolink:'',
            codelink:'',
            name: 'My Portfolio'
        },
        {
            id: 4,
            src: kanban,
            demolink:'',
            codelink:'',
            name: 'Kanban-Progress Board'
        },
        {
            id: 5,
            src: scientific,
            demolink:'https://amsjournal.org/index.php/ams/issue/view/current/6',
            codelink:'',
            name: 'Scientific Paper'
        },
    ]
    function openLink(link) {
        window.open(link, '_blank');
      }

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className=' py-6'>
                    Check out some of my work here
                </p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0'>
            {portfolios.map(({id, src, demolink, codelink, name}) => (
                
                <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center mt-4 text-xl'>{name}</div>
                    <div className='flex items-center justify-center '>
                        <button onClick={() => openLink(demolink)} className='w-1/2 px-6 pb-3 m-4 duration-200 hover:scale-105 text-xl'>{id === 5 ? 'Read' : 'Demo'}</button>
                        {id === 5 ? <></> : <button onClick={() => openLink(codelink)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-xl'>Code</button>}
                    </div>
                </div>
            
            ))}
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio