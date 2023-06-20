import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import Fileupload from '../../assets/Fileupload';
import {AuthContext,FirebaseContext} from '../../store/Context'
import { useHistory } from 'react-router-dom';

const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const date=new Date()
  const history=useHistory()
const handleUpload=()=>{
  firebase.storage().ref(`/productImage/${image.name}`).put(image).then(({ref})=>{
    ref.getDownloadURL().then((url)=>{
      firebase.firestore().collection('products').add({
        name,
        category,
        price,
        url,
        userId:user.uid,
        createdAt:date.toDateString()
      })
      history.push('/')
    })
  }).catch((error)=>{
    console.log(error.message)
  })
}
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number"onChange={(e)=>setPrice(e.target.value)} id="fname" name="Price" />
            <br />
          <br />
          {image?<img alt="Posts" width="130em" height="110em" src={URL.createObjectURL(image)}/>:<Fileupload/>}
            <br />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
            <br />
            <button className="uploadBtn" onClick={handleUpload}>upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;