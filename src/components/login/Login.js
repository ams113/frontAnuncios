import React from 'react';
import './Login.css';

export const Login = ({ history }) => {

    const handleLogin = () => {
        history.push('/');
    };
    return (
        <div className="container mt-100">
            <div className="row">
                <div className='col-md-3'></div>
                <div className="col-md-6">
                    <div className="login-box">
                        
                            <div className="form-group">
                                <label>User</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label">Remember user</label>
                            </div>
                            <button onClick={ handleLogin } className="btn btn-primary">Login</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
