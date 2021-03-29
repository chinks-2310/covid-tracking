import React from 'react';

import {Cards,CountryPicker} from './components';

import { fetchData } from './api/api';


import image from './images/image.png';

import styles from './App.module.css';

class App extends React.Component{
  state = {
    data:{}
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({data});
  }

  render() {
    const {data,country} = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19"></img>
        <Cards data={data} />
        
      </div>
    );
  }
}

export default App;
