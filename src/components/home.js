import React from 'react';
import axios from 'axios';
// import  Darktheme  from  "react-dark";
import Wallpaper from './wallpaper';
import QuickSearch from './quicksearch';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            locations:[],
            mealtypes:[]
        }
    }
    componentDidMount(){
        sessionStorage.clear();
        axios({
            url: 'http://localhost:2021/locations',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(respone => {
                this.setState({ locations: respone.data.locations })
            })
            .catch()

            axios({
                url:'http://localhost:2021/mealtypes',
                method:'GET',
                headers:{'Content-Type':'application/json'}
            })
            .then(response =>{
                this.setState({mealtypes: response.data.mealtypes})
            })
            .catch()
    }
   
    render(){
        const {locations,mealtypes} = this.state;
        return(
            <div>
                 {/* <Darktheme/> */}
                <Wallpaper locationsData={locations}/>
                <QuickSearch mealtypesData={mealtypes}/>

            </div>
        )
    }
}
export default Home;