import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <div class="log-form">
            <h2>Login to your account</h2>
            <form>
                <input type="text" title="username" placeholder="nama" />
                <input type="password" title="password" placeholder="password" />
                <input type="text" title="email" placeholder="email" />
                <input type="text" title="phone" placeholder="no handphone" />
                <input type="text" title="address" placeholder="alamat" />
                <button type="submit" className="btn">Register</button>
                <Link to='/login'>
                    <h4>Sudah ada akun?</h4>
                </Link>
            </form>
        </div>
    )
}

export default Register;