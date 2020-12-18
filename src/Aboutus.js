import React, {Component, Fragment} from 'react';
import './Aboutus.css';

class Aboutus extends Component {
    state = {
        showComponent: true
    }

    render() {
        return (
            <Fragment>
                <p className="Aboutus">About Us</p>
                <div className="kartu-mahasiswa">
                    <div className="header">
                        <img src="https://3.bp.blogspot.com/-yNtsEjBm8sw/W_VePo2wipI/AAAAAAAAQKg/JyNSEZ3lfAUDRrNPSJrw3zqAPoqU5aOuQCLcBGAs/w1200-h630-p-k-no-nu/UMN.png"/>
                    </div>
                    <div className="foto-muka">
                        <img src="https://picsum.photos/200/300?grayscale"/>
                    </div>
                    <div className="data-diri">
                        <p className="nim">NIM</p>
                        <p className="nama">Nama Lengkap</p>
                        <p className="jurusan">Informatika</p>
                        <p className="tanggal">Agustus 2023</p>
                    </div>
                </div>
                <div className="kartu-mahasiswa">
                    <div className="header">
                        <img src="https://3.bp.blogspot.com/-yNtsEjBm8sw/W_VePo2wipI/AAAAAAAAQKg/JyNSEZ3lfAUDRrNPSJrw3zqAPoqU5aOuQCLcBGAs/w1200-h630-p-k-no-nu/UMN.png"/>
                    </div>
                    <div className="foto-muka">
                        <img src="https://picsum.photos/200/300?grayscale"/>
                    </div>
                    <div className="data-diri">
                        <p className="nim">NIM</p>
                        <p className="nama">Nama Lengkap</p>
                        <p className="jurusan">Informatika</p>
                        <p className="tanggal">Agustus 2023</p>
                    </div>
                </div>
                <div className="kartu-mahasiswa">
                    <div className="header">
                        <img src="https://3.bp.blogspot.com/-yNtsEjBm8sw/W_VePo2wipI/AAAAAAAAQKg/JyNSEZ3lfAUDRrNPSJrw3zqAPoqU5aOuQCLcBGAs/w1200-h630-p-k-no-nu/UMN.png"/>
                    </div>
                    <div className="foto-muka">
                        <img src="https://picsum.photos/200/300?grayscale"/>
                    </div>
                    <div className="data-diri">
                        <p className="nim">NIM</p>
                        <p className="nama">Nama Lengkap</p>
                        <p className="jurusan">Informatika</p>
                        <p className="tanggal">Agustus 2023</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Aboutus;