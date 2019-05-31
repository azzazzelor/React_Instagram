import React,{Component} from 'react';
import ErrorMesage from './ErrorMesage'
import InstaService from '../service/instaservice';
export default class Palette extends Component{
    InstaService = new InstaService();
    
    state={
        photos:[],
        error:false
    };

    componentDidMount(){
        this.updatePhotos()
    }

    updatePhotos(){
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError);
    }
    onPhotosLoaded=(photos)=>{
        console.log(photos)
        this.setState({
            photos,
            error: false
        })
        
    }

    onError=(err)=>{
        console.log(err)
        this.setState({error:true})
    }
    renderItems(arr){
        return arr.map((item)=>{
            const{src,alt,id}=item;
            return(
                <img src={src} key={id} alt={alt}/>
            )
        })
    }
    render(){
        const {error, photos}=this.state;
        if(error){
            return <ErrorMesage/> 
        }
        const itms = this.renderItems(photos);
        
        return( 
            <div className ="palette">
                {itms}
            </div>)
    }
}