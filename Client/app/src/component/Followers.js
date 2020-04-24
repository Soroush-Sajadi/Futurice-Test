import React, {Component} from "react";


export default class Followers extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          propsName :'' 
        };
      }
      componentWillMount(){
        
      }
    getData = async(name) => {
      await fetch(`http://localhost:3000/followers/${name}`, {headers: {
            'Access-Control-Allow-Origin': '*'
        }})
            .then(response => response.json())
            .then(data => { this.setState( { data } )
            })
    }
    componentDidMount = async () =>{
      if (this.props.name !== null) {
        this.getData(this.props.name)
      } else {
        setTimeout(this.componentDidMount, 250)
      }    
    
    }
    async componentDidUpdate(prevProps) {
      if (prevProps.name !== this.props.name) {
        this.getData(this.props.name)
      }
    };
   
  
  
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
          <div className="wrap-follow">
            {this.state.data.length !== 0 ? (<p className="follower-number">Followers: {this.state.data.length}</p>):null}
          <div className="info-follow">
            {this.state.data.map((item) => <div  className="follower">
            <img className="img-follow" attr ={item.login} onClick={this.click} src={item.avatar_url}/>
            <p className="name-follow">{item.login}</p>
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
