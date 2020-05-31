import withBasicLayout from '../components/layouts/basic-layout/withBasicLayout'
import BannerType1 from '../components/banners/banner-type-1/BannerType1'
import { BANNER_BTN_TEXT, BANNER_TEXT_1, BANNER_TEXT_2, BANNER_TEXT_3, BANNER_IMAGE, SEARCH_BOX_HEADING, SPECIALITIES_CARDS, SPECIALITIES_TEXT_1, SPECIALITIES_TEXT_2, SPECIALITIES_BTN_TEXT, HOW_IT_WORK_PRETITLE, HOW_IT_WORK_TITLE_P_1, HOW_IT_WORK_TITLE_P_2, HOW_IT_WORK_CONTENT, HOW_IT_WORK_STEPS } from '../constants/messages/home'
import SearchBox from '../components/search/search-box/SearchBox'
import Specialityslider from '../components/speciality-slider/specialityslider'
import FlicktySlider from '../components/sliders/flickty-slider/FlicktySlider'
import SimpleSlideCard from '../components/sliders/slides/simple-slide-card/SimpleSlideCard'
import { ReactSVG } from 'react-svg'
import HowItworks from '../components/how-it-works/HowItworks'
import Link from 'next/link'

const Home = () => (
  <div className="c-home">
    <BannerType1 
      image={BANNER_IMAGE} 
      title={
        <>
          <span className="text-danger">{BANNER_TEXT_1}</span><br />
          <b className="text-dark">{BANNER_TEXT_2}</b><br />
          <span className="text-danger">{BANNER_TEXT_3}</span>
        </>
      }
      button={
        <div>
          <Link href="/search">
          <a className="btn-lg btn btn-primary btn-primary-shadow d-md-inline-block d-block ">{BANNER_BTN_TEXT}</a>
          </Link>
        </div>
      }
    />
    <div className="container mt-n5 mb-2">
      <div className="row justify-content-center">
        <div className="col-12 col-xxl-10">
          <SearchBox title={SEARCH_BOX_HEADING} />
        </div>
      </div>
    </div>
    <HowItworks 
    preTitle={HOW_IT_WORK_PRETITLE}
    title={HOW_IT_WORK_TITLE_P_1}
    titleNext={HOW_IT_WORK_TITLE_P_2}
    steps={HOW_IT_WORK_STEPS}
    >
      <p>{HOW_IT_WORK_CONTENT}</p>
    </HowItworks>
    <div className="container-fluid pt-5">
      <Specialityslider></Specialityslider>
      {/* <div className="row">
        <div className="col-md-3 bg-secondary d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-dark display-4 font-weight-bold">{SPECIALITIES_TEXT_1}</h2>
          <h2 className="text-danger display-4 font-weight-bold">{SPECIALITIES_TEXT_2}</h2>
          <div className="pt-2">
            <button className="btn btn-outline-primary text-dark">
              {SPECIALITIES_BTN_TEXT}
            </button>
          </div>
        </div>
        <div className="col-md-9 p-0">
          <FlicktySlider >
            {
              SPECIALITIES_CARDS.map(speciality => <SimpleSlideCard 
                cardClass="text-center"
                link={speciality.link}
                backgroundColor={speciality.color}
                icon={<ReactSVG src={speciality.svg} />}
                title={speciality.name}
              />)
            }        
          </FlicktySlider>
        </div> */}
      {/* </div> */}
    </div>
    <div className="p-5"></div>
  </div>
)

export default withBasicLayout(Home)
