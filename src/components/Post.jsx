import React, {Component} from 'react'
import User from './User';

export default class Post extends Component{
    render(){
        return(
            <div className ='post'>
                    <User
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_bCt0mULcxceW0UghWUaUG9KifR2YR7a2u15Oi7x1kaSTQp_0VQ"
                    atl="men"
                    name="ouuuse"/>
                <img href= {this.props.src} alt ={this.props.alt}></img>
                <div className='post__name'>
                        some acc
                </div>
                <div className='post__descr'></div>
            </div>
        )
    }
}