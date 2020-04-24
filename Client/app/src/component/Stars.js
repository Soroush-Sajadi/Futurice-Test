import React, {Component} from "react";


export default class Followers extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          
        };
      }
     

    componentDidMount = async() => {
        await fetch(`http://localhost:3000/api/stars`, {headers: {
            'Access-Control-Allow-Origin': '*'
        }})
            .then(response => response.json())
            .then(data => { this.setState( { data } )
            })
            
           
    }


    render() {
        if (this.state.data.items !== undefined) {
    return (  
        <div>
             <div className="stars-wraper">
                 {this.state.data.items.map(item => <div className="stars"> 
                    <img className="stars-pic" src={item.owner.avatar_url}/>
                    <div className="stars-info">
                    <h4>Name: {item.name}</h4>
                    <h4>Forks: {item.forks}</h4>
                    <h4>Watchers: {item.watchers}</h4>
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