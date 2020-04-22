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
      click = (event) =>{
        console.log(event.target.getAttribute('attr'))
     }
     
      render() {
          if (this.props.name !==null) {
        return (  
            <div className="wrap">
            <input className="button" type="button" value="follower" onClick={this.handleClick} />
            {this.state.data.map(item => <div>
            <p>{item.login}</p>
            <img className="img" attr ={item.login} onClick={this.click} src={item.avatar_url}/>
            </div>
            )}
            
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
