import React, { useEffect, useState } from 'react';
import './style.css'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios'
import HeaderUser from '../View/HeaderUser'
import Cookies from 'js-cookie'

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const Users = (props) => {
    const classes = useStyles();
    const [userData, setuserData] = useState([])
    const [totalUser, settotalUser] = useState(null)
    var token = Cookies.get('token')

    useEffect(() => {
        Axios.get('https://devapi.kmdcargo.com/users', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data.data);
                setuserData(res.data.data)
                settotalUser(res.data.data.length)
            }).catch((err) => console.log(err))
    }, [])


    useEffect(() => {

    })

    const renderTable = () => {
        return userData.map((user, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {user.name}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {user.email}
                        </div>
                    </TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {user.address}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {user.ktp ? user.ktp : "belum ada"}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {user.mark ? user.mark : "belum ada"}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            data: {user.data_id}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto', boxSizing: 'border-box', backgroundColor: 'gainsboro' }}>
                            {user.active ? "Sudah di Acc" : "Belum di Acc"}
                        </div>
                    </TableCell>
                </TableRow>
            )
        })
    }

    return (
        <>
            <HeaderUser />
            <div className="mainsection">
                <div style={{ fontWeight: 'bolder', marginBottom: '10px' }}>
                    Menampilkan 1 - 10 dari {totalUser}
                </div>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table" style={{ width: "auto", tableLayout: "auto" }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nama</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Nomor HP</TableCell>
                                    <TableCell>Alamat</TableCell>
                                    <TableCell>KTP</TableCell>
                                    <TableCell>Kode Marking</TableCell>
                                    <TableCell>Password</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {renderTable()}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        </>
    )
}

export default Users;