import React, {Component} from "react";


export default class Followers extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          name : [],
          watchers: null,
          pic: null,
          forks: null
        };
      }

    componentDidMount = async() => {
        await fetch(`http://localhost:3000/api/stars`, {headers: {
            'Access-Control-Allow-Origin': '*'
        }})
            .then(response => response.json())
            .then(data => { this.setState( { data } )
            })
            this.setState({name: this.state.data})
           
    }


    render() {
        if (this.state.name.items !== undefined) {
    return (  
        <div>
             <div className="stars-wraper">
                 {this.state.data.items.map(item => <div className="stars"> 
                    <img className="stars-pic" src={item.owner.avatar_url}/>
                    <div>
                    <h3>{item.name}</h3>
                    <h3>{item.forks}</h3>
                    <h3>{item.watchers}</h3>
                    </div>
                 </div>
                    )}
             </div>
                
        </div>
        )
    }else {
        return (
            <div>

            </div>
        )
    }
        }
}