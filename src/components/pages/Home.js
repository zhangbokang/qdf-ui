import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>主页</h1>
        </header>
        <main>
          <Link to='/user/add'>添加用户</Link>
        </main>
      </div>
    )
  }
}

export default Home;
