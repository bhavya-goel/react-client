import React, { Component } from 'react'
import { getNextRoundRobin, getRandomNumber } from '../../lib/utils/math'
import { PUBLIC_IMAGE_FOLDER } from '../../configs/constants'
class Slider extends Component {
    constructor(props) {
        super(props)
        const { banners, defaultBanner, altText, duration, height } = props
        this.state={
            bannerNumber: 0,
            source: banners[0] || defaultBanner,
            altText: altText || 'Default Banner',
            duration: duration || 2000,
            height: height || 200
        }
    }

    componentDidMount() {
        let time = this.state.duration
        setInterval(this.changeBanner, time)
    }

    changeBanner = () => {
        const { props: { random, banners }, state: { bannerNumber } } = this
        const current = bannerNumber
        const index = random ? 
        getRandomNumber(5) :
        getNextRoundRobin(6, current)
        this.setState({
            bannerNumber: index,
            source: banners[index]
        })
    }

    render() {
        const { state: { source, altText, height } } = this
        return (
            <img src={PUBLIC_IMAGE_FOLDER + source}
            alt={altText}
            style={{
                margin: 'auto',
                display: 'block',
                height: `${height}px`
                }}
            />
        )
    }
}

export default Slider
