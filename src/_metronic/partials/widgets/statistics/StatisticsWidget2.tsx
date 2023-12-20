
import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  className: string
  title: string
  description: string
  avatar: string
}

const StatisticsWidget2: FC<Props> = ({className, title, description, avatar}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body d-flex align-items-center pt-4 pb-4 '>
        <div className='d-flex flex-column flex-grow-1   '>
          <Link to='/crafted/pages/profile/connections' className='fw-bold text-gray-900 fs-4 mb-4 text-hover-primary'>
            {title}
          </Link>

          <span
            className='fw-semibold text-muted fs-5'
            dangerouslySetInnerHTML={{__html: description}}
          ></span>
        </div>

        <img src={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gaming-esports-streamer-video-game-logo-design-template-8f5817bdb7eda4d33cfc1456b9e150a6.jpg?ts=1603864077"} alt='' className='align-self-end h-100px rounded ' />
      </div>
      {/* end::Body */}
    </div>
  )
}

export {StatisticsWidget2}
