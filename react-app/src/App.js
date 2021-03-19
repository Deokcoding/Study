import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content'
import Subject from './components/Subject';
import './App.css';

// App이라는 class를 만들고 react의 Component를 상속해서 새로운 class를 만드는것
// 그리고 그 class는 render() 메소드를 가지고 있음, 반드시 있어야 함
// javascript가 아니라 유사 javascript임
// 코드 그대로 개발자 모드 Console에서 쳐보면 문법 오류가 남
// 페이스북에서 만든 jsx 라는 언어이고, 리액트 앱이 jsx를 자동으로 javascript로 컨버팅 해주는거임
class App extends Component {
  // state 초기화
  // 초기값으로 WEB, world wide web! 세팅
  // 어떤 component가 실행될때 render 함수보다 먼저 실행되서 그 conponent를 초기화시켜주고 싶은 코드는 constructor 안에 코드 작성
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      subject:{title:"WEB", sub:"world wide web!"},
      welcome:{title:'welcome', desc:'Hello, React!'},
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* Component에 props를 줌으로써 서로 다른 결과를 만들어낼 수 있음 */}
        {/* <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          {/* html에서 속성은 react에서는 props임 */}
          <h1><a href="/" onClick={function(e){
            alert('hi');
          }}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC
          data={this.state.contents}>
        </TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;