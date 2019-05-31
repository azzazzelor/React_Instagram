import React, {Component} from 'react';
import User from './User';
import InstaService from '../service/instaservice.js'
import ErrorMasage from './ErrorMesage';
export default class Users extends Component{
    InstaService = new InstaService();
    state={
        friends:[],
        error:false
    }
    componentDidMount(){
        this.updateFriends()
    }
    updateFriends(){
        this.InstaService.getAllPosts()
        .then(this.onFriendsLoaded)
        .catch( Error('wdsad ') )
    }
    onFriendsLoaded =(posts)=>{
        this.setState({
            friends:posts,
            error:false
        })
    }
    renderFriends(arr){
        return arr.map((item)=>{
            const {name,photo,alt} =item;
            return (
                <User
                src={photo}
                name={name}
                alt={alt}
                min/>
            )
        })
    }
    render(){
        const {error, friends}=this.state;
        if(error){
            return <ErrorMasage/> 
        }
        const items = this.renderFriends(friends);
    return(
        <div className="right">
            {items}
        </div>
    )}
}
