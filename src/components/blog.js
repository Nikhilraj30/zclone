import React from 'react';
import '../Styles/home.css';
import axios from 'axios';


class blog extends React.Component {
    constructor() {
        super();
        this.state = {
            blog: []
        }
    }
    componentDidMount() {
        sessionStorage.clear();
        axios({
            url: 'http://localhost:2021/blog',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(respone => {
                this.setState({ blog: respone.data.blog })
            })
            .catch()

    }

    render() {
        const { blog } = this.state;
        return (
            <div>
                <div class="container" style={{color: "var(--heading-color)"}}>
                    <br />
                    {/*{ Data in content should be stored with \n where you want to show data in new line } */}
                    {blog.map((item) => {
                        return <div>
                            <h4 id="h4" class="container">{item.name} </h4>
                            <p id="P" class="container">{item.content}
                            </p>
                        </div>


                    })}




                </div>
            </div>
        )
    }
}
export default blog;