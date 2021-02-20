import React,{ useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Header2 from '../components/Header2';
import ImageUploader from 'react-images-upload';
import './CreateAdScreen.css';
import { uploadFile,createListing } from '../actions/listingActions';

//dispatch(uploadFile(Files[0]))
export default function CreateAdScreen(props) {
    const dispatch = useDispatch();
    const [price,setPrice] = useState(0);
    const [nego,setNego] = useState(false);
    const [image,setImage] =useState();

    const handleSubmit = () =>{
        dispatch(uploadFile(image));
        //TODO
        createListing()
    }

    return (
        <div className="createad-container">
            <Header2 />
            <div className="createad-headertitle">
                <h1  className="createad-text">
                    <span>Post An Ad</span>
                </h1>
            </div>
            <div className="createad-main">

                <div className="createad-attri-contain">
                    <div className = "createad-title">Title</div>
                    <input className = "createad-title-input"></input>
                    <div className = "createad-tip">
                        <div className = "createad-tip-content">
                            <span><i class="fas fa-pencil-alt fa-2x"></i></span>
                            <div>
                                Give your ad a descriptive title to improve its visibility.
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className = "createad-attri-contain">
                    <div className = "createad-title">Category</div>
                    <div className = "creatad-dropdown">
                        <select>
                            <option value="0">Miscellaneous</option>
                            <option value="1">Electronics</option>
                            <option value="2">Vehicles</option>
                        </select>
                    
                    </div>
                
                </div>
                <hr className = "createad-hr"></hr>
                <div className = "createad-attri-contain">
                    <div className = "createad-title">Price</div>

                        <div className="createad-title-price">
                            <span 
                                class="createad-title-pricespan">
                                    $
                                <input
                                    type="text"
                                    value={price}
                                    onChange={(e)=>setPrice(e.target.value)}>                               
                                </input>                    
                            </span>
                    </div>

                    <label class="createad-check-container">
                        <input check = {nego} onChange={()=>setNego(!nego)}type="checkbox"></input>
                        <span class="checkmark"></span>
                        Negotiable
                    </label>
                </div>

                <div className = "createad-attri-contain">
                    <div className = "createad-title">Condition</div>
                    <div className = "creatad-dropdown createad-condition">
                        <select>
                            <option value="0">Used</option>
                            <option value="1">New</option>
                            <option value="2">Faulty</option>
                        </select>
                    
                    </div>
            
                </div>
                    <div className = "createad-tip2">
                        <div className = "createad-tip-content">
                            <span><i class="fas fa-pencil-alt fa-2x"></i></span>
                            <div>
                            Did you know it's FREE to edit your listing for the full duration of your ad?
                            </div>
                        </div>
                        
                    </div>

                <div className = "createad-attri-contain">
                <div className = "createad-title">Description</div>
                    <textarea className="createad-textarea"/>
                </div>
                <hr className = "createad-hr"></hr>

                <div className = "createad-attri-contain">
                    <div className = "createad-title">Cover Picture</div>
                    <ImageUploader
                        imgExtension={['.jpg', '.png']}
                        label="Maximum file size: 5MB , accepted format: jpg|png"
                        maxFileSize={5242880}
                        withPreview={true}
                        singleImage={true}
                        onChange={(Files) => setImage(Files[0])}

                    />
            
                </div>

                <button 
                    onClick = {handleSubmit}
                    className="createad-postbutton">Post Ad
                </button>

            </div>
        
        
        </div>


    )
}