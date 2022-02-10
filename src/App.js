import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';


// state, props의 값이 변경되면 render()가 자동 실행
class App extends Component { // 초기화하고 싶은 코드는 constructor 에 작성
  constructor(props) { // constructor - state 사용을 위해 작성 / 가장 먼저 실행되는 함수
    super(props);
    this.state = {
      mode: 'welcome',
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' }
      ]
    }
  }


  render() {
    console.log('App render');
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        {/*<Subject
          title={this.state.subject.title} // {} 중괄호로 묶으면 자바스크립트 코드로 취급
        sub={this.state.subject.sub}></Subject>*/}
        <header>
          <h1><a href="/" onClick={function(e) {
            console.log(e);
            e.preventDefault();
          }}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}


export default App;

