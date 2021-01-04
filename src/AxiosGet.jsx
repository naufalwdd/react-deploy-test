import React from 'react';
import axios from 'axios';

class AxiosGet extends React.Component {
    constructor () {
        super()
        this.state = {
            user: [],
            getClick: 0
        }
    }

    componentDidMount() {
        
        const urlGet = 'http://localhost:8090/api/finance/dataSiswa/view?filter=&orderby=&top=&skip='
        axios.get(urlGet).then(response => {
            console.log(response)
            this.setState({
                user: response.data.items
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick = {() => this.changeClick()}>Lihat Total Pendaftar</button>
                {this.state.user.map(user => {
                    if (this.state.getClick == 0) {
                        return <div></div>
                    }
                    else if (this.state.getClick == 1) {
                        return (
                            <div>
                                <p>Total Pendaftar: {user.totalPendaftar}</p>
                                <p>Total Pendaftar Jalur Prestasi: {user.totalPendaftarJalurPrestasi}</p>
                                <p>Total Pendaftar Jalur Tes: {user.totalPendaftarJalurTes}</p>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }

    changeClick() {
        this.setState({
            getClick: 1
        })
    }
}
export default AxiosGet