import React, {Component} from "react";


export default class Followers extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          followerAccount: []
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

   // click = async (event) =>{
    //console.log(event.target.getAttribute('attr'))
    //await fetch(`http://localhost:3000/${event.target.getAttribute('attr')}`, {headers: {
      //      'Access-Control-Allow-Origin': '*'
        //}})
          //  .then(response => response.json())
            //.then(followerAccount => { this.setState( { followerAccount } )
            //})       
    //}

    render() {
        if (this.props.name !==null) {
      return (  
          <div className="wrap-follower">
            <input className="button" type="button" value="follower" onClick={this.handleClick} />
            {this.state.data.length !== 0 ? (<p className="follow-number">Followers: {this.state.data.length}</p>):null}
          <div className="wraper-follower">
            {this.state.data.map(item => <div className="follower">
            <img className="img-follower" attr ={item.login} onClick={this.click} src={item.avatar_url}/>
            <p className="name-follower">{item.login}</p>
          </div>
          )}
          </div>
          </div>
        )
          } else {
          return (
              <div>
              </div>
          )
        }
}
}
