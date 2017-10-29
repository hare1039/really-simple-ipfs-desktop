// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Header } from "semantic-ui-react";
import Dropzone from 'react-dropzone';
import { execFile } from 'child_process';
import fs from 'fs';
import os from "os";
import {Style_c} from "./style_c.js";
class Counter extends Component {
	constructor(props) {
		super(props);
	}
	onDrop(acceptedFiles, rejectedFiles) {
		console.log(acceptedFiles);
		let okFiles = "";
		for(let i=0; i<acceptedFiles.length; i++) {
			const child = execFile('ipfs', ["add", "-r", acceptedFiles[i].path], {maxBuffer: 1024 * 2000},(error, stdout, stderr) => {
				if (error) {
					throw error;
				}
				let parsed = stdout.split(' ');
				for(let j=2; j<parsed.length; j+=2)
				    if (! parsed[j].includes('/')) {
				    	let x = os.homedir();
				    	fs.appendFile(x + "/.ipfs_addedlist", parsed[j-1] + " " + parsed[j], (err) => {
				    		if (err)
				    			throw err;
				    		console.log('saved!');
				    		okFiles += (parsed[j-1] + " => " + parsed[j] + "\n");
							
							if(j+2 >= parsed.length && i+1 >= acceptedFiles.length && okFiles != "") {
								alert(okFiles);
							}
				    	});
				    }
			});
		}
	}
	render() {
		return (
	        <div style = {Style_c.outter}>
				<div style = {Style_c.container}>

					<Dropzone onDrop={(acceptedFiles, rejectedFiles) => {this.onDrop(acceptedFiles, rejectedFiles)}} style = {Style_c.drop} activeStyle = {Style_c.drop2}>
						<Header as='h3' icon inverted>
							<Icon name='add circle' />
							Drag and drop files here to share.
						</Header>
					</Dropzone>
					<div data-tid="backButton">
			            <Link as="Button" to="/">
					        <Button content='Back' icon='left arrow' labelPosition='left' color='teal'/>
				        </Link>
					</div>
				</div>
			</div>
		);
  }
}

export default Counter;
