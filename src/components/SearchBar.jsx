import { Paper ,TextField} from "@material-ui/core";
import React from "react";

class SearchBar extends React.Component{
    state= {
        searchTerm: '',
    }

handleChange = (event) => this.setState  ({searchTerm: event.target.value});
handleSubmit = () => {
    const { searchTerm } = this.state;
  
}
    render(){
        return(
            <Paper elevation={6} style={{ padding:'25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="search" onChange={this.handleChange}/>

                   
                </form>
            </Paper>
           
        )
    }
}

export default SearchBar;