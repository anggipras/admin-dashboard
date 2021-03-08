import React, { useEffect, useState } from 'react';
import './style.css'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios'
import { Link, useHistory } from 'react-router-dom';
import HeaderResi from '../View/HeaderResi'
import Cookies from 'js-cookie'

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const Resi = (props) => {
    const classes = useStyles();
    const [resiData, setresidata] = useState([])
    const [totalResi, setTotalResi] = useState(null)
    const History = useHistory()
    var tokenCook = Cookies.get('token')
    if (!tokenCook) {
        History.push('/login')
    }

    useEffect(() => {
        Axios.get('https://devapi.kmdcargo.com/orders', {
            headers: {
                "Authorization": `Bearer ${tokenCook}`
            }
        })
            .then((res) => {
                console.log(res.data.data);
                setresidata(res.data.data)
                setTotalResi(res.data.data.length)
            }).catch((err) => console.log(err))
    }, [])


    useEffect(() => {

    })

    const renderTable = () => {
        return resiData.map((resi, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {resi.mark}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {resi.resi}
                        </div>
                    </TableCell>
                    <TableCell>{resi.barcode}</TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {resi.good}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {resi.rmb}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {resi.supp}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {resi.ctns}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {resi.qty}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {resi.weight}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {resi.volume}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {resi.giw}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {resi.loading}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ width: 'auto' }}>
                            {resi.otw}
                        </div>
                    </TableCell>
                </TableRow>
            )
        })
    }

    return (
        <>
            <HeaderResi />
            <div className="mainsection">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse' }}>
                    <Link to='/upload'>
                        <Button style={{ background: 'gray', border: 'none', width: '100px', height: '30px', marginBottom: '10px' }} className='my-2'>
                            Upload Resi
                    </Button>
                    </Link>
                    <div style={{ fontWeight: 'bolder' }}>
                        Menampilkan 1 - 10 dari {totalResi}
                    </div>
                </div>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table" style={{ width: "auto", tableLayout: "auto" }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Kode Marking</TableCell>
                                    <TableCell>Resi</TableCell>
                                    <TableCell>Barcode</TableCell>
                                    <TableCell>Barang</TableCell>
                                    <TableCell>RMB</TableCell>
                                    <TableCell>Supp</TableCell>
                                    <TableCell>CTNS</TableCell>
                                    <TableCell>Qty</TableCell>
                                    <TableCell>Berat</TableCell>
                                    <TableCell>Volume</TableCell>
                                    <TableCell>Tgl GIW</TableCell>
                                    <TableCell>Tgl Loading</TableCell>
                                    <TableCell>OTW</TableCell>
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

export default Resi;