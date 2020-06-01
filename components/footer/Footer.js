import {useState, useEffect} from 'react'
import Link from 'next/link'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Icon } from 'react-icons-kit'
import { location, phone} from 'react-icons-kit/icomoon/'
import { mail } from 'react-icons-kit/ikons/mail'
import List from '../list/List'
import cityJson from '../../constants/US_States_and_Cities.json';
import carriers from "../../services/extra/Carriers.json";
import Footertop from '../footertop/footertop';
import Footerbottom from '../footerbottom/footer';
import { TOP_TITLE_1, TOP_TITLE_2, TOP_TITLE_3, TOP_HEADING, BOTTOM_CONTENT, SITE_LINKS, BOTTOM_TITLE_2, BOTTOM_TITLE_3, BOTTOM_CONTENT_3, ADDRESS, EMAIL, NUMBER, APP_STORE_LINK, PLAY_STORE_LINK, MID_EMAIL_VALUE, MID_EMAIL_LABEL, MID_NUMBER_LABEL, MID_NUMBER_VALUE, COPY_RIGHT_TEXT, } from '../../constants/messages/footer.js';

const Footer = (props) => {
    const statesList        = Object.keys(cityJson).slice(0, 10).map((name, i) => ({name, link: i % 2 === 0 ? "#" : null}))
    const specialitiesList  = props.specialities.slice(0, 10).map(({name})   => ({name}))
    const carriersList      = carriers.carriers.slice(0, 10).map(({name})    => ({name}))
    return (
        <div className="c-footer">
            <Footertop></Footertop>
            {/* <FooterTop 
                list1={statesList}
                list2={specialitiesList}
                list3={carriersList}
            />
            <div className="c-footer__middle-bar bg-secondary">
                <div className="c-footer__middle-pill">
                    <div className="c-footer__middle-row">
                        <div className="c-footer__number-wrap">
                            <div className="c-footer__number-icon">
                                <img src="/images/footer/number.png" />
                            </div>
                            <div className="c-footer__number-text">
                                {MID_NUMBER_LABEL}
                                <a href={`tel:${MID_NUMBER_VALUE}`} className="c-footer__number">{MID_NUMBER_VALUE}</a>
                            </div>
                        </div>
                        <div className="c-footer__middle-saperator">
                            - OR -
                        </div>
                        <div className="c-footer__mid-email-wrap">
                            <div className="c-footer__mid-email-icon">
                                <img src="/images/footer/mid-email.png" />
                            </div>
                            <div className="c-footer__mid-email-text">
                                {MID_EMAIL_LABEL}
                                <a href={`mailto:${MID_EMAIL_VALUE}`} className="c-footer__mid-email">{MID_EMAIL_VALUE}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-footer__bottom-section bg-dark py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Link href="/">
                                <a className="c-logo c-footer__logo">
                                    <img src="/images/logo-white.png" />
                                </a>
                            </Link>
                            <p className="pt-3">
                                {BOTTOM_CONTENT}
                            </p>
                            <div>
                                <p>
                                    <Icon icon={location} className="c-footer__address-icon" />
                                    {ADDRESS}
                                </p>
                                <p>
                                    <Icon icon={mail} className="c-footer__address-icon" />
                                    {EMAIL}
                                </p>
                                <p>
                                    <Icon icon={phone} className="c-footer__address-icon" />
                                    {NUMBER}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h5 className="text-white">{BOTTOM_TITLE_2}</h5>
                            <List items={SITE_LINKS} />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h5 className="text-white">{BOTTOM_TITLE_3}</h5>
                            <p>{BOTTOM_CONTENT_3}</p>
                            <div className="c-footer__store-icons">
                                <a href={APP_STORE_LINK} target="_blank" className="c-footer__store-icon pr-2 pb-2">
                                    <img src="/images/footer/app-store.png" />
                                </a>
                                <a href={PLAY_STORE_LINK} target="_blank" className="c-footer__store-icon pb-2">
                                    <img src="/images/footer/play-store.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid c-footer__copy-wrapper text-center">
                <p className="c-footer__copy">
                    {COPY_RIGHT_TEXT}
                </p>
            </div> */}
            <Footerbottom></Footerbottom>
        </div>
    )
}
// const FooterTop  = ({list1, list2, list3}) => {
//     return (
//         <div className="c-footer__top-section bg-secondary py-5">
//             <div className="container">
//                 <h4 className="pb-5 text-dark font-weight-bold">{TOP_HEADING}</h4>
//                 <div className="row">
//                     <div className="col-md-4">
//                         <h3>{TOP_TITLE_1}</h3>
//                         <hr />
//                         <List items={list1} />
//                     </div>
//                     <div className="col-md-4">
//                         <h3>{TOP_TITLE_2}</h3>
//                         <hr />
//                         <List items={list2} />
//                     </div>
//                     <div className="col-md-4">
//                         <h3>{TOP_TITLE_3}</h3>
//                         <hr />
//                         <List items={list3} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

const mapStateToProps = state => ({
    specialities: state.specialities
})
export default connect(mapStateToProps)(Footer)
