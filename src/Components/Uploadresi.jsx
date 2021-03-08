import React, { useState } from 'react'
import './style.css'
import { Button, Input } from 'reactstrap';
import HeaderUpload from '../View/HeaderUpload'
import Axios from 'axios'
import Cookies from 'js-cookie'

const UploadResi = () => {
    const [file, setfile] = useState(null)
    var token = Cookies.get('token')

    const onFileChange = (e) => {
        if (e.target.files[0]) {
            setfile(e.target.files[0])
        } else {
            setfile(null)
        }
    }

    const uploadRes = () => {
        Axios.post('https://devapi.kmdcargo.com/orders/excel', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(() => {
                console.log('berhasil upload');
            }).catch((err) => console.log(err))
    }

    return (
        <>
            <HeaderUpload />
            <div className="mainsection">
                <div style={{ fontWeight: 'bolder', marginBottom: '10px', fontSize: '20px' }}>
                    Upload Resi
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <Input type="file" onChange={onFileChange} style={{ border: '1px solid black' }} />
                </div>
                <Button onClick={uploadRes} style={{ background: 'gray', border: 'none', width: '100px', height: '30px', marginBottom: '10px' }}>
                    Upload Resi
            </Button>
            </div>
        </>
    )
}

export default UploadResi