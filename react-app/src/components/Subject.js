import React, { Component } from 'react';

// Subject Component 생성
// 보통 javascript는 함수 앞에 function을 붙이는데, class 안에 들어가는 함수는 function 생략
class Subject extends Component {
    render() {
        return (
        // 하나의 최상위 태그만 사용해야 함
        <header>
            {/* html에서 속성은 react에서는 props임 */}
            <h1><a href="">{this.props.title}</a></h1>
            {this.props.sub}
        </header>
        );
    }
}

export default Subject;