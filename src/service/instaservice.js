export default class InstaService{
    constructor(){
        this._apiBase='http://localhost:3000/'
    }

    getResources = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`could not fetch ${url},receive ${res.status}`)
        }

        return res.json();
    }

    getAllPosts = async ()=>{
        const res = await this.getResources('posts/')
        return res;

    }

   getAllPhotos = async ()=>{
    const res = await this.getResources('posts/')
    return res.map(this._transformPosts);
   }

   _transformPosts =(post)=>{
    return{
        src:post.src,
        alt:post.alt,
        id:post.id
    }
   }
 }