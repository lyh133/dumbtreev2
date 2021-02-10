import React,{ useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './SigninScreen.css';
import Header2 from '../components/Header2';
import { Link, useHistory } from 'react-router-dom';
import { SignIn } from '../actions/userActions';
export default function SigninScreen(props) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(SignIn(email,password))
    }
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
      }, [props.history, redirect, userInfo]);

    return (
        <div className="signin-container">
            <Header2 />
            <div className="signin-main">
                <div className="signin-headertitle">
                    <h1  className="signin-text">
                        <span>Sign in</span>
                    </h1>
                </div>

                <div className="signin-info-container">
                        
                    <div className="signin-form-container">
                        <form className="signin-form" onSubmit = {submitHandler}>
                            <input 
                                onChange={(event) => {setEmail(event.target.value)}}
                                id='input1' type="text" 
                                onFocus={() => {document.getElementById("input1").className += " input-active";}} 
                                name="email" placeholder="Email address" required/>                            
                            <input 
                                onChange={(event) => {setPassword(event.target.value)}} 
                                id='input3' type="text" onFocus={() => {document.getElementById("input3").className += " input-active";}} 
                                name="password" placeholder="Password" required/>


                            <button 
                                type="submit" 
                            > Sign in</button>
                        </form>
                    </div>

                    <div className="signin-signin">Don't have an account?
                        <Link to="/signin" >Register now</Link>
                    </div>

                </div>
            </div>
        </div>

    )

}