import React, {Component} from 'react';
import User from './User';
import InstaService from '../service/instaservice.js'
import ErrorMasage from './ErrorMesage';
import Spinner from './Spinner'
export default class Posts extends Component{
    InstaService = new InstaService();
    
    state={
        posts:[],
        error:false,
        loadind:true
    };

    componentDidMount(){
        this.updatePosts()
    }

    updatePosts(){
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }
    onPostsLoaded=(posts)=>{
        this.setState({
            posts:posts,
            error: false,
            loadind:false
        })
        
    }

    onError=(err)=>{
        console.log(err)
        this.setState({error:true,loadind:false})
    }
    renderItems(arr){
        return arr.map((item)=>{
            const {name,altname,photo,src,alt,descr,id} =item;
            return(
              <div key={id} className ="post">
                    <User
                    src={photo}
                    atl={altname}
                    name={name}
                    min/>
                <img src= {src} alt ={alt}></img>
                <div className="post__name">
                        {name}
                </div>
                <div className="post__descr">
                    {descr}
                </div>
             </div>
            )
        })
    }
    render() {
        const {error, posts, loading }=this.state;
        if(error){
            return <ErrorMasage/> 
        }
        if(loading && !error ){
            return <Spinner/>
        }
        const itms = this.renderItems(posts);
        
        return( 
            <div className ="left">
                {itms}
            </div>
        )
    }
}