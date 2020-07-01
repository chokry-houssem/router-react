import React from 'react'
import { Link, Route} from "react-router-dom";


const Category=(props)=>{
    console.log(props.match.url)
    return(
        <React.Fragment>
            <ul>
                <li><Link to={`${props.match.url}/shoes`}>Shoes</Link></li>
                <li><Link to={`${props.match.url}/boots`}>Boots</Link></li>
                <li><Link to={`${props.match.url}/footwear`}>Footwear</Link></li>
            </ul>
            <Route path={`${props.match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>

        </React.Fragment>
    )
}

export default Category