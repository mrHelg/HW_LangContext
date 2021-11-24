import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUsers } from '../../api';
import Spinner from '../Spinner';


class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      isFetching: false,
      isError: false,
      currentPage: 1,
    }

  }

  load = () => {
    const {currentPage} = this.state;
    getUsers({page:currentPage, res:3})
      .then((data)=>{
        return (data.error)? 
          this.setState({isError: true}):
            this.setState({users:data.results});
      })
      .catch(()=>this.setState({
        isError: true
      }))
      .finally(()=>this.setState({
        isFetching: false,
      }))
  }

  componentDidMount(){
    this.setState({
      isFetching: true,
    })
    this.load();
  }
  componentDidUpdate(prevProps, prevState){
    const {currentPage} = this.state;
    if(currentPage!==prevState.currentPage){
      this.load();
    }
  }

  prevPage = () => {
    if(this.state.currentPage>1){
      this.setState((state,props)=>
      ({currentPage:state.currentPage-1})
      );
    }
  }
  nextPage = () => this.setState((state,props)=>
  ({currentPage:state.currentPage+1}));

  createUser = (user)=>(
    <li key={user.login.uuid}>{JSON.stringify(user,null, 7)}</li>
  )

  render() {
    const {users, isFetching, isError, currentPage} = this.state;
    return <div>
      
      {isFetching && <div><Spinner /></div>}
      {isError && <div>Error</div>}
      
      <h2>Users list</h2>
      <button onClick={this.prevPage}>&lt;</button>
      <button onClick={this.nextPage}>&gt;</button>
      <p>current page: {currentPage}</p>
      <ul>
        {users.map(this.createUser)}
      </ul>
    </div>;
  }
}


UsersLoader.propTypes = {};


export default UsersLoader;
