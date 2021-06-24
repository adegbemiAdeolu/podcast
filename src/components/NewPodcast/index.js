import React, { Component } from 'react'
import axios from 'axios'
import './NewPodcast.css'
import Button from '../Button';
import { Mic } from '@material-ui/icons';

export default class NewPodcast extends Component {
    state = {
        selectedFile: null
    };

    fileSelectHandler = e => {
        this.setState({
            selectedFile: e.target.files[0]
        });       
    };

    fileUploadHandler = () => {
        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);

        // axios.post('', formData);
    };

    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <p>Choose audio file</p>
                </div>
            );
        } else {
            return (
                <div>
                    <p>Choose before pressing the upload button</p>
                </div>
            )
        };
    };


    render() {
        return (
            <div className='newPodcastContainer'>
                <div className='newPodcastTitle'>
                    <h2>Create a new Podcast</h2>
                    <Mic />
                </div>
                
                <div className='newPodcastAudio'>
                    <input  type='file' required onChange={this.fileSelectHandler} style={{ border: 'none'}} />
                    {this.fileData()}
                </div> 

                <input type='text' required placeholder='New Podcast title'/>
                <input required type='text-area' placeholder='About your podcast in 100 words' />
                
                <div className='buttonNewPodcast'>
                    <Button onClick={this.fileUploadHandler} text='Create New Podcast' textColor='white' backgroundColor='teal' />
                </div>
                
                
            </div>
        )
    }
}

