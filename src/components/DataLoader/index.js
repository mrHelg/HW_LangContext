import React, { Component } from 'react';

/**
 * загружать данные
 * принимать рендер
 * 
 *  */

class DataLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      error:null,
      isFetching:false
    }
  }

  load = ()=>{
    const {loadData} =this.props;
    this.setState({isFetching:true});
    loadData()
      .then((data)=>this.setState({data: data}))
      .catch((err)=>this.setState({error:err.message}))
      .finally(()=>this.setState({isFetching:false}))
  }

  componentDidMount(){ this.load()}

  render() {
    const {render} = this.props;
    return render(this.state);
  }
}

export default DataLoader;
