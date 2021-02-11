import React,{ useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './header.css';
import { Link } from 'react-router-dom';
import { SignOut } from '../actions/userActions';
export default function Header(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const covidlink= 'https://blog.gumtree.com.au/important-covid-19-update/';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    // const redirectLink = useSelector((state) => state.redirectLink);
    // const { redirect } = redirectLink;
    const signoutHandle = () => {
        dispatch(SignOut());
    }
    // const [redirect_link,setRedirect] = useState('/');

    // useEffect(() => {
    //     setRedirect(redirect)
    // },[redirect])

    return (


        <header>
        <div className="header-alert">
            <i className="fas fa-exclamation-circle">   keeping our community safe</i>
            <a href={covidlink}>COVID-19 Safety Precautions</a>
        </div>

        <div className="header-nav">
            <div>
                <div onClick={() => {history.push("/")}} className="fas fa-home mouse-pointer"></div>
            </div>
            {userInfo 
                ? (
                    <button onClick={ signoutHandle }>
                        signout
                    </button>
                )
                : (
                    <div className="header-auth">
                        <Link to='/signin' >Sign in</Link>
                        <Link to='/register' >Register</Link>
                        <div id='mydumbtree'>
                            <i class="fas fa-user-circle fa-lg"></i>
                            My Dumbtree
                        </div>
                    </div>

            )}

        </div>


    </header>



    )



}