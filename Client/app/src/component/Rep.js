import React, {Component} from "react";
import Followers from './Followers';
import Following from './Following';
import ProjectInfo from './ProjectInfo';


export default class Rep extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          input: null,
          pic:null,
          owner: null,
          projectName : null
        };
      }      
      
      handleChange = (e) => {
        this.setState({ input: e.target.value });
      }
    
       handleClick = async() => {
         
            await fetch(`http://localhost:3000/${this.state.input}`, {headers: {
              'Access-Control-Allow-Origin': '*'
            }})
              .then(response => response.json())
              .then(data => { this.setState( { data } )
              });
              this.setState({pic: this.state.data[0].owner.avatar_url});
              this.setState({owner: this.state.data[0].owner.login})
      }

      click = (event) => {
        console.log(event.target.getAttribute("attr"))
        this.setState({ projectName : event.target.getAttribute("attr")})
      }
      
      render() {
          
        return (  
            <div className="wrap">
                <div className="input-wraper">
                <input className="input" type="text" placeholder="Who are you looking for?" onChange={ this.handleChange } />
                <input className="button" type="button" value="Search" onClick={this.handleClick} />
                </div>
                <div className="user-pro">
                {this.state.pic !== null ? (<img className="img" src={this.state.pic}/>): null}
                <h3>{this.state.owner}</h3>
                </div>
                
                
                <div className="wraper-user-info">
                {this.state.data.map(item => <div attr={item.name} onClick= {this.click}  className="user-info"> 
                <h4 attr={item.name} onClick= {this.click} >Project Name:</h4>
                <p attr={item.name} onClick= {this.click} >{item.name}</p>
                </div> )}
                </div>
                <Followers name={this.state.owner } />
                <Following name={this.state.owner} />
            </div>
        )
    }
}
