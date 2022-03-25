import { Component } from "react";
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
export class Api extends Component {
state = {
    BASE_URL: 'https://pixabay.com/api/',
    KEY: '24814635-98ab646e956d73723bbfbc5eb',
    query: '',
    page:'',
  }
  
  fetchApi(page, query){
    const baseurl = this.state.BASE_URL;
    const key = this.state.KEY;
    fetch(this.state.BASE_URL)
  }
}