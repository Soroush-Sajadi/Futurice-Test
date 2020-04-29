import React, {Component} from "react";
import Followers from './Followers';
import Following from './Following';

export default class Rep extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          input: null,
          newInput:null,
          pic:null,
          owner: null,
          projectName : null
        };
      }      
      
      updateInput = (childData) => {
        if (childData !== null) {
        this.setState({newInput: childData})
        }
      }

      handleChange = (e) => {
        this.setState({ input: e.target.value });
      }
    
       handleClick = async() => {
         if (this.state.input !== null) {
            await fetch(`http://localhost:3000/${this.state.input}`, {headers: {
              'Access-Control-Allow-Origin': '*'
            }})
              .then(response => response.json())
              .then(data => { this.setState( { data } )
            });
            if (this.state.data !== 'Not Found') {
              this.setState({pic: this.state.data[0].owner.avatar_url});
              this.setState({owner: this.state.data[0].owner.login})
            }
            
          } if (this.state.newInput !== null) {
              await fetch(`http://localhost:3000/${this.state.newInput}`, {headers: {
                'Access-Control-Allow-Origin': '*'
              }})
                .then(response => response.json())
                .then(data => { this.setState( { data } )
              });
              if (this.state.data !== 'Not Found') {
                this.setState({pic: this.state.data[0].owner.avatar_url});
                this.setState({owner: this.state.data[0].owner.login})
              }
          } 
          this.setState({newInput: null})
          
      }

      click = (event) => {
        this.setState({projectName: event.target.getAttribute('attr')})
      }

      
      render() {
        return (  
            <div className="wrap">
                <div className="wraper-input-rep">
                  <input className="input" type="text" placeholder="Who are you looking for?" onChange={ this.handleChange } />
                  <input className="button" type="button" value="Search" onClick={this.handleClick} />
                </div>
                <div className="user-profile-rep">
                  {this.state.pic !== null ? (<img className="img" src={this.state.pic}/>): null}
                  <h3>{this.state.owner}</h3>
                </div>
                <div className="wraper-user-info-rep">
                  {this.state.data === 'Not Found' ? <h3>{this.state.data}</h3>:
                  this.state.data.map(item => 
                  <a attr={item.name} style={{display: "table-cell"}} onClick={this.click}  target={'_blank'} 
                    href={`https://github.com/${this.state.owner}/${this.state.projectName }` } className="user-info-rep"> 
                    <h4 >Project Name:</h4>
                    <p >{item.name}</p>
                  </a >)}
                </div>
                <Followers name={this.state.owner} trigerUpdate={this.updateInput} trigerFetch ={this.handleClick} />
                <Following name={this.state.owner} trigerUpdate={this.updateInput} trigerFetch ={this.handleClick} />
            </div>
        )
    }
}
