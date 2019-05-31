웹페이지 작동순서

1. Viewport로 column 수 결정
2. feed내부 사진의 크기로 feed의 크기 결정
3. 피드확장 및 삭제기능 설정
4. 웹페이지로딩

feed의 종횡비 (내용부분만) 16:9

css 단위 rem과 %로 작성

feed 마진 헤드 풋터 총 4.1rem
feedhead 1.7rem
feedfootter 1.8rem
feedmargin 0.3rem 

src
- 피드내용
- 게시자 아이콘
- 프로필

icon
- 플랫폼에 들어가는 기본적인 아이콘 소스

css
- Viewport별 column의 수가 분할된 css파일들
- layout.css 레이아웃 속성 설정파일

js
- Viewport에 따라 css를 불러오는 함수
- 피드 삭제기능
- 피드 확장기능
- 피드내부 사진변경기능
- 기타