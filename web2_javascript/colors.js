var Body = {
    setColor:function(color){
      document.querySelector('body').style.color = color; // querySelector처럼 객체 안에 들어 있는 함수는 메소드(Method)라고 부름
    },
    setBackgroundColor:function(color){
      document.querySelector('body').style.backgroundColor = color;
    }
  }

  var Links = {
    setColor:function(color){
      // html 문서 안의 a 태그의 색깔을 모두 powderblue로 바꿈
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }

  function nightDayHandler(self){
    var target = document.querySelector('body');  // querySelector : 태그 선택
    if(self.value === 'night'){
      // background-color가 script에서는 backgroundColor 인 것처럼 속성 이름이 다를 수 있음
      Body.setBackgroundColor('black'); // 버튼이 클릭되면 배경을 검정색으로 바꿈
      Body.setColor('white'); // 버튼이 클릭되면 글씨를 흰색으로 바꿈
      self.value = 'day'; // button의 value를 day로 바꿈
      Links.setColor('powderblue'); // html 문서 안의 a 태그의 색깔을 모두 powderblue로 바꿈
    } else {
      Body.setBackgroundColor('white'); // 버튼이 클릭되면 배경을 흰색으로 바꿈
      Body.setColor('black'); // 버튼이 클릭되면 글씨를 검정색으로 바꿈
      self.value = 'night'; // button의 value를 night로 바꿈
      Links.setColor('blue'); // html 문서 안의 a 태그의 색깔을 모두 blue로 바꿈
    }
  }