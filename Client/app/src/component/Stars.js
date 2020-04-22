import React, {Component} from "react";
import Followers from './Followers'



export default class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          input: null,
          pic:null,
          owner: null
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
              console.log(this.state.owner)
              
              
      }
      
      render() {
          
        return (  
            <div className="wrap">
                <input className="input" type="text" placeholder="How many stars?" onChange={ this.handleChange } />
                <input className="button" type="button" value="Search" onClick={this.handleClick} />
                <img className="img" src={this.state.pic}/>
                <h3>{this.state.owner}</h3>
                {this.state.data.map(item => <p>{item.name}</p>)}
                <Followers name={this.state.owner} />
            </div>
        )
    }
}
