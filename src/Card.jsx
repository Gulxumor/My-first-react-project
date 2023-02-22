import React from "react";
import "./Card.css"

class Card extends React.Component{
    render() {
        return (
            <div className="wrapper">
                <div className="img"></div>
                <div className="title">{this.props.title}</div>
                <div className="top">
                    <div className="1">
                        <img src={this.props.time} alt="" />
                        <p>{this.props.day}</p>
                    </div>
                    <div className="2">
                        <img src={this.props.pupil} alt="" />
                        <p>{ this.props.person}</p>
                    </div>
                    <div className="3">
                        <img src={this.props.star} alt="" />
                        <p>{ this.props.review}</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom1">
                        <img src={this.props.location} alt="" />
                        <p>{ this.props.state}</p>
                    </div>
                    <div className="bottom2">
                        <button className="card__btn">$1200</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Card