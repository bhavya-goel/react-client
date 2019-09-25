import React, { Component } from 'react'
import { getNextRoundRobin, getRandomNumber } from '../../lib/utils/math'
import { PUBLIC_IMAGE_FOLDER } from '../../configs/constants'
class Slider extends Component {
    constructor(props) {
        super(props)
        this.state={
            bannerNumber: 0,
            source: props.banners[0] || props.defaultBanner,
            altText: props.altText || 'Default Banner',
            duration: props.duration || 2000,
            height: props.height || 200
        }

        this.changeBanner = this.changeBanner.bind(this)
    }

    componentDidMount() {
        let time = this.state.duration
        setInterval(this.changeBanner, time)
    }

    changeBanner() {
        const current = this.state.bannerNumber
        const index = this.props.random ? 
        getRandomNumber(5) :
        getNextRoundRobin(6, current)
        this.setState({
            bannerNumber: index,
            source: this.props.banners[index]
        })
    }

    render() {
        return (
            <img src={PUBLIC_IMAGE_FOLDER + this.state.source}
            alt={this.state.altText}
            style={{
                margin: 'auto',
                display: 'block',
                height: `${this.state.height}px`
                }}
            />
        )
    }
}

export default Slider
