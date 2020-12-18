import React, {Component} from 'react';
import './Aboutus.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Aboutus extends Component {
    state = {
        showComponent: true
    }

    render() {
        return (
            <div className="all">
                
                <h1>Behind The Web</h1>
                <p>C+Gram merupakan platform berbagi foto dan </p>
                <p>berinteraksi dengan teman dekat serta keluarga</p>
                <p>Aplikasi ini dibuat oleh kelomok C++ sebagai</p>
                <p>proyek UAS mata kuliah IF300-E</p>
                <div className="kartu-mahasiswa">
                    {/* <div className="header">
                        <img src="https://3.bp.blogspot.com/-yNtsEjBm8sw/W_VePo2wipI/AAAAAAAAQKg/JyNSEZ3lfAUDRrNPSJrw3zqAPoqU5aOuQCLcBGAs/w1200-h630-p-k-no-nu/UMN.png"/>
                    </div> */}
                    <div className="foto-muka">
                        <img src="https://www.gravatar.com/avatar/e3bf8ab54c8c991aeba32873063b92d3?s=290&20200704"/>
                    </div>
                    <div className="data-diri">
                        <p className="nim">00000034835</p>
                        <p className="nama">Bryan Kenneth</p>
                        <p className="jurusan">Informatika</p>
                        
                        <div className="sosmed-icon">
                            <a href="https://www.instagram.com/bkenneth39/">
                            <InstagramIcon color="black" fontSize="large"/>
                            </a>
                            
                            <a href="https://www.linkedin.com/in/bryankenneth/">
                            <LinkedInIcon color="black" fontSize="large" />
                            </a>
                            
                        </div>
                </div>
                    </div>
                   
                <div className="kartu-mahasiswa">
                    {/* <div className="header">
                        <img src="https://3.bp.blogspot.com/-yNtsEjBm8sw/W_VePo2wipI/AAAAAAAAQKg/JyNSEZ3lfAUDRrNPSJrw3zqAPoqU5aOuQCLcBGAs/w1200-h630-p-k-no-nu/UMN.png"/>
                    </div> */}
                    <div className="foto-muka">
                        <img src="https://pbs.twimg.com/profile_images/485288423071051776/1i8lE271_400x400.jpeg"/>
                    </div>
                    <div className="data-diri">
                        <p className="nim"> 00000039724</p>
                        <p className="nama">Filbert Khouwira</p>
                        <p className="jurusan">Informatika</p>
                        <div className="sosmed-icon">
                            <a href="https://www.instagram.com/filbertkhouwira/">
                            <InstagramIcon color="black" fontSize="large"/>
                            </a>
                            
                            <a href="https://www.linkedin.com/">
                            <LinkedInIcon color="black" fontSize="large" />
                            </a>
                            
                        </div>
                    </div>
                   
                </div>
                <div className="kartu-mahasiswa">
                    {/* <div className="header">
                        <img src="https://3.bp.blogspot.com/-yNtsEjBm8sw/W_VePo2wipI/AAAAAAAAQKg/JyNSEZ3lfAUDRrNPSJrw3zqAPoqU5aOuQCLcBGAs/w1200-h630-p-k-no-nu/UMN.png"/>
                    </div> */}
                    <div className="foto-muka">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GgqVEIwa-BhK6mxmVq66pNYq05u3EjEBavTr-V8=s96-c"/>
                    </div>
                    <div className="data-diri">
                        <p className="nim"> 00000036356</p>
                        <p className="nama">Gerardo Jason</p>
                        <p className="jurusan">Informatika</p>
                        <div className="sosmed-icon">
                            <a href="https://www.instagram.com/gerardoojason/">
                            <InstagramIcon color="black" fontSize="large"/>
                            </a>
                            
                            <a href="https://www.linkedin.com/">
                            <LinkedInIcon color="black" fontSize="large" />
                            </a>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Aboutus;