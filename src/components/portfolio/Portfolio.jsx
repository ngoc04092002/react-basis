import React from 'react'
import './portfolio.scss'
import ME from '../../assets/me.png'

const datas =[
  {
    id:1,
    image:ME,
    title:'This is a portfolio item title',
    github: 'https://github.com/ngoc04092002',
    demo:'https://www.facebook.com/profile.php?id=100009696701104'
  },
  {
    id:2,
    image:ME,
    title:'This is a portfolio item title',
    github: 'https://github.com/ngoc04092002',
    demo:'https://www.facebook.com/profile.php?id=100009696701104'
  },
  {
    id:3,
    image:ME,
    title:'This is a portfolio item title',
    github: 'https://github.com/ngoc04092002',
    demo:'https://www.facebook.com/profile.php?id=100009696701104'
  },
  {
    id:4,
    image:ME,
    title:'This is a portfolio item title',
    github: 'https://github.com/ngoc04092002',
    demo:'https://www.facebook.com/profile.php?id=100009696701104'
  },
  {
    id:5,
    image:ME,
    title:'This is a portfolio item title',
    github: 'https://github.com/ngoc04092002',
    demo:'https://www.facebook.com/profile.php?id=100009696701104'
  },
  {
    id:6,
    image:ME,
    title:'This is a portfolio item title',
    github: 'https://github.com/ngoc04092002',
    demo:'https://www.facebook.com/profile.php?id=100009696701104'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {datas.map(data => (
            <article key={data.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={data.image} alt="" />
            </div>
            <h3>{data.title}</h3>
            <div className="portfolio__item-cta">
              <a href={data.github} className='btn'>Github</a>
              <a href={data.demo} className='btn btn-primary'>Live Demo</a>
            </div>
          </article>
        ))}
        
      </div>
    </section>
  )
}

export default Portfolio