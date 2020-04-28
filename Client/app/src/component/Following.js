import React, {Component} from "react";


export default class Following extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
        console.log(props)
      }

      getData = async(name) => {
        await fetch(`http://localhost:3000/following/${name}`, {headers: {
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

    click = async (event) =>{
      this.props.trigerUpdate(event.target.getAttribute('attr'))
    }

    render() {
        if (this.props.name !==null) {
    return (  
        <div className="wrap-follow">
            {this.state.data.length !== 0 ? (<p className="following-number">Following: {this.state.data.length}</p>):null}
            <div className="info-follow">
                {this.state.data.map(item => <div className="follower">
                <img className="img-follow" attr ={item.login} onClick={(arg)=>{ this.click(arg); this.props.trigerFetch(this, arg) }} src={item.avatar_url}/>
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
