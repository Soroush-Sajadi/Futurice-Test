import React, {Component} from "react";



export default class Followers extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          
        };
      }      

      
       handleClick = async() => {
            await fetch(`http://localhost:3000/followers/${this.props.name}`, {headers: {
              'Access-Control-Allow-Origin': '*'
            }})
              .then(response => response.json())
              .then(data => { this.setState( { data } )
              })
              
      }
      
      render() {
          if (this.props.name !==null) {
        return (  
            <div className="wrap">
            <input className="button" type="button" value="follower" onClick={this.handleClick} />
            {this.state.data.map(item => <p>{item.login}</p>)}
            </div>
        )
          } else {
            return(
                <div>

                </div>
            )
          }
    }
}
