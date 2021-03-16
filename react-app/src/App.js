import React, { Component } from 'react';
import './App.css';

class Content extends Component {
  render() {
    return (
      <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
      </article>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li><a href="1.html">HTML</a></li>
              <li><a href="2.html">CSS</a></li>
              <li><a href="3.html">JavaScript</a></li>
          </ul>
      </nav>
    );
  }
}

// Subject Component 생성
// 보통 javascript는 함수 앞에 function을 붙이는데, class 안에 들어가는 함수는 function 생략
class Subject extends Component {
  render() {
    return (
      // 하나의 최상위 태그만 사용해야 함
      <header>
          {/* html에서 속성은 react에서는 props임 */}
          <h1>{this.props.title}</h1>
          {this.props.sub}
      </header>
    );
  }
}

// App이라는 class를 만들고 react의 Component를 상속해서 새로운 class를 만드는것
// 그리고 그 class는 render() 메소드를 가지고 있음, 반드시 있어야 함
// javascript가 아니라 유사 javascript임
// 코드 그대로 개발자 모드 Console에서 쳐보면 문법 오류가 남
// 페이스북에서 만든 jsx 라는 언어이고, 리액트 앱이 jsx를 자동으로 javascript로 컨버팅 해주는거임
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Component에 props를 줌으로써 서로 다른 결과를 만들어낼 수 있음 */}
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
