import React from 'react';
import axios from 'axios';

class AxiosPost extends React.Component {
    
    constructor() {
        super()
        this.state = {
            smp: 'nama',
            alamat: 'alamat',
            message: ''
        }
    }

    saveTo(db) {
        db.preventDefault()
        const urlPost = 'http://localhost:8090/api/masterSmp/create'
        const data = {
            namaSmp: this.state.namaSmp,
            alamatSmp: this.state.alamatSmp
        }
        axios.post(urlPost, data)
    }

    render() {
        return (
            <div>
                <form onSubmit={(db) => this.saveTo(db)}>
                    <label>Nama SMP</label>
                    <input type="text" name="namaSmp" onChange={(db) => this.setState({
                        namaSmp: db.target.value})}/>
                    <label>Alamat</label>
                    <input type="text" name="alamat" onChange={(db) => this.setState({
                        alamatSmp: db.target.value})}/>
                        <button type ="submit" onClick = {() => this.msg()}>Save to DB</button>
                        
                </form>
                <h3>{this.state.message}</h3>
            </div>
        )
    }

    msg() {
        this.setState({
            message: 'Data Created Successfully'
        })
    }

}

export default AxiosPost