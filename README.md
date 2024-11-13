## 2024-11-13 수업 내용

# 07-1 UI 라이브러리

1. UI 라이브러리, 프레임워크, 유틸리티 기능이 필수는 아니다.
2. 다만 생산성 향상 및 UI의 일관성을 유지하는데 많은 도움을 받을 수 있다.
3. 3가지의 프레임워크(Chakra UI, TailwindCSS, Headless)

# 07-2 Chakra UI

1. 오픈소스 컴포넌트 라이브러리로, 모듈화 되어 있고 접근성이 뛰어나며 보기 좋은 UI를 만들 수 있다.
2. 버튼, 모달, 입력 등 다양한 내장 컴포넌트를 제공한다.
3. dark mode 및 light mode를 모두 지원
4. Chakra UI의 useColorMode 훅을 사용해서 현재 사용하는 컬러 모드를 확인할 수 있다.
5. 기본 컴포넌트를 조합해서 새로운 컴포넌트를 쉽게 만들 수 있다.
6. 타입스크립트로 작성되었으며 개발자에게 최고의 개발 경험을 제공한다.

# 07-3 Tailwind CSS

1. 오직 CSS만 지원(X JavaScript)
2. 자바스크립트 모듈이나 리액트 컴포넌트를 제공하지 않기 때문에 필요한 경우 직접 만들어서 사용해야 한다.
3. 디자인의 자유도가 높다. 변수 값을 조정하여 개성있는 디자인을 만들 수 있다.
4. dark mode 및 light mode를 쉽게 적용할 수 있다.
5. 빌드 시점에 사용하지 않는 클래스는 제거 되기 때문에 높은 수준의 최적화를 지원한다.

## 2024-11-13 Next.js의 UI Framework 수업 내용

# 1. Project 생성

1. 기말고사 때도 무조건 npx create-next-app@14로 하기 latest ㄴㄴ, 모드 All yes

# 2. Tailwind CSS

1. React를 기준으로 하고 있어서 바로 코드를 사용하면 오류가 발생할 수 있다.
2. Test코드는 tailwindcss.com에 나와 있는 것이 오류가 적다.
3. Test과정에서 img 태그 등 몇가지는 추가로 설정하지 않으면 오류 발생
4. class도 className으로 수정해야 한다.

# 3. Headless UI

# 4. Chakra UI

1. App/chakra/page.js 파일 생성
2. Snippets를 설치하면 src/components/ui 아래 추가 component가 설치된다.

# 5. React-icon

## 2024-11-06 수업 내용

# CSS와 내장 스타일링 메서드

1. Styled JSX

1) CSS-in-JS라이브러리 이다. 내장 모듈이기 때문에 설치가 필요 없다.
2) CSS 속성 지정을 위해 자바스크립트를 사용할 수 있는 라이브러리

3) CSS-in-JS의 단점
   -1 IDE나 코드 편집기 등 개발 도구에 대한 지원이 부족하다.
   -2 문법 하이라이팅, 자동 완성, 린트(lint)기능을 제공하지 않는다.
   -3 코드 내에서 CSS에 대한 의존성이 점점 커지기 때문에 앱 번들도 커지고 느려 진다.
   -4 서버에 미리 CSS를 생성해도 클라이언트에서 리액트 하이드레이션이 끝나면 CSS를 다시 생성해야 한다.
   -5 이 때문에 실행 시점에 부하가 커지며, 웹 앱이 계속 느려지게 된다. 기능을 추가 할 수록 이런 현상은 심해 진다.

2. CSS Module

1) CSS-in-JS의 단점을 회피하기 위한 좋은 방법이 바로 CSS Module
2) 클래스들은 컴포넌트 스코프를 가진다.
3) 생성된 HTML 페이지 소스를 보면 class이름이 바뀌어 있는 것을 확인할 수 있다.
4) Styled JSX때와 마찬가지로 이런 고유한 이름 때문에 다른 파일이라면 같은 class명을 사용해도 충돌이 일어나지 않는다.
5) 만일 전역 CSS를 선언하고 싶다면 styles/globals.css를 만들고 사용한다.
6) 파일명은 반드시 globals가 아니어도 되지만 암묵적 합의이니 지키는 것이 좋다.
7) "app.js"에 import 해주면 모든 컴포넌트에 적용
8) 또 한 가지 방법은 class로 선언된 요소에 :global{} 키워드를 추가
9) 셀렉터 컴포지션은 통상적으로 사용할 수 있는 css를 만들고 compose 속성을 지정해서 일부 속성을 덮어쓰는 기능

3. SASS

1) Next에서 기본으로 지원하는 전 처리기
2) 단 패키지 설치 필요 $ npm install sass
3) SASS 및 SCSS(Sassy CSS) 문법으로 CSS Module을 만들고 사용할 수 있다.
4) styles/Home.module.css 파일이름을 styles/Home.module.scss로 바꿔주면 된다.
5) SASS 기본 설정을 변경해야 하는 경우 next.config.js 설정파일을 변경한다.

## 2024-10-30 수업 내용

1. 서버에서 REST API 사용하기

1) REST API를 호출할 때는 public API를 호출할 것인지, private API를 호출할 것인지를 먼저 확인해야 한다.
2) Public API는 어떤 인증이나 권환도 필요 없으며 누구나 호출할 수 있다.

# Next.js REST API 사용

# 1. REST API - 개요

1. REST란 자원을 이름으로 구분하여 그 자원의 상태를 통신을 통해 주고 받는 것을 의미한다.
2. HTTP URI 를 이용해서 자원을 명시한다.
3. HTTP Method(POST, GET, PUT, DELETE, PATCH 등)를 통해 자원에 CRUD를 적용한다.
4. RESPT API란 REST의 규칙을 적용한 API를 의미한다.

# 2. Json Server

$ npm i -g json-server
$ json-server ./data.json --port 3001 (포트 다르게 쓰고 있으므로)

1. Backend가 개발되기 전이나, 아직 외부 API가 결정되지 않았다면 local에 Json server를 구축하고 Forntend 개발을 하기에 적합한 node 패키지 입니다.

2. Axio란? npm i axios

1) [Fetch API]
   -1 내장 API: 브라우저에 내장되어 있어 별도의 설치가 필요 없다.
   -2 Promise 기반: 비동기 작업을 처리하는 데 익숙한 구조다.
   -3 스트림 처리: 데이터를 스트리밍으로 처리할수 있는 기능이 있다.

2) [결론]
   -1 복장한 요청이나 에러 처리가 필요한 경우에는 axios가 더 간단할수 있다.

3. Axios 사용하기

1) 비동기 데이터 로딩과 상태 관리가 제대로 고려되지 않았기 때문에 몇가지 문제가 있을 수 있다.
2) 특히, Next.js와 같은 리액트 기반 앱에서 비동기 데이터를 처리할 때 렌더링 주기에 맞게 상태를 관리해야 한다.

3) [개선할 부분]
   -1 useState와 useEffect 사용

## 2024-10-11/10-23 수업 내용

# Page Project Layout - app

<<<<<<< HEAD

1. Static Resource

1) 정적 자원 중 이미지 파일은 SEO에 많은 영향을 미친다,
2) 다운로드 시간이 많이 걸리고, 렌더링 후에 레이아웃이 변경되는 등 UX에 영향을 미친다,
3) 이것을 누적 레이아웃 이동(CLS: Cumulative Layout Shift)이라고 한다.
4) Image 컴포넌트를 사용하면 CLS문제를 해결한다.
5) lazy loading: 이미지 로드 시점을 필요할 때까지 지연시키는 기술이다.
6) 이미지 사이즈 최적화로 사이즈를 1/10이하로 줄여 준다.
7) placeholder를 제공한다.

2. Images component Remote

1) Pixabay와 같은 외부 이미지를 사용하려면 next.config.mjs에 URL을 추가해 줘야 한다.
2) 만일 파일이 없다면 Project root에 추가해 주면 된다. 3)간단하게 도메인만 등록해줘도 되지만, 공식 사이트에서는 remotePatterns [ {*protocol, *hostname, post, pathname}] 추천
3) Pixabay의 경우 원하는 이미지를 우클릭 후 주소 복사를 하면된다.

3. 코드 구성과 데이터 불러오기
   3-1. 디렉토리 구조 구성
   3-2. 데이터 불러오기

3-1.

1. Next.js에서는 특정 파일과 디렉토리가 지정된 위치에 있어야 한다. \_app.js나 \_document.js 파일, pages/와 public/
2. Node_modules/: Next.js 프로젝트의 의존성 패키지를 설치하는 디렉토리
3. pages/: 애플리케이션의 페이지 파일을 저장하고 라우팅 시스템 관리
4. public/: 컴파일된 CSS 및 자바스크립트 파일, 이미지, 아이콘 등의 정적 자원 관리
5. styles/: 스타일링 포맷(CSS,SASS,LESS 등)과 관계없이 스타일링 모듈 관리
6. pages/ 디렉토리를 src/ 디렉토리 안으로 옮길 수 있습니다.
7. public/과 node_modules/ 를 제외한 다른 디렉토리는 모두 src/로 옮길 수 있습니다.
8. 컴포넌트는 세 가지로 분류하고 각 컴포넌트와 관련된 스타일 및 테스트 파일을 같은 곳에 두어야 한다.
9. 코드를 더 효율적으로 구성하기 위해 아토믹 디자인 원칙에 따라 디렉토리를 구성한다.
10. atoms: 가장 기본적인 컴포넌트 관리 예)button, input, p와 같은 표준 HTML요소를 감싸는 용도로 사용되는 컴포넌트
11. molecules: atom에 속한 컴포넌트 여러 개를 조합하여 복잡한 구조로 만든 컴포넌트 관리 예) input과 label을 합쳐서 만든 새로운 컴포넌트
12. organisms: molecules와 atoms를 섞어서 더 복잡하게 만든 컴포넌트 관리 예) footer나 carousel 컴포넌트
13. templates: 위의 모든 컴포넌트를 어떻게 배치할지 결정해서 사용자가 접근할 수 있는 페이지

Ex) Button 컴포넌트를 예를 들면 최소 3개의 파일을 만들어야 한다. 컴포넌트, 스타일, 테스트 파일

3-1-2. 유틸리티 구성

1. 컴포넌트를 만들지 않는 코드 파일을 유틸리티 스크립트라고 한다.
2. 렌더링에 필요한 컴포넌트가 아닌 기타 필요한 스크립트가 있다면 utilities/ 디렉토리에 별도로 관리 하는 것이 좋다. + 각 유틸리티에 맞는 테스트 파일도 만듬

3-1-3. 정적 자원의 구성

1. 정적 자원은 public/디렉토리에서 관리
2. Public/assets/디렉토리를 만들고 파일 유형별로 다시 디렉토리를 추가

3-1-4. lib 파일 구성

1. lib 파일은 서드파티 라이브러리를 감싸는 스크립트를 말한다.
2. 특정 라이브러리에 특화된것
3. root에 lib/graphql/ 디렉토리를 만든다. GraphQL을 사용한다면

3-2. 데이터 불러오기

1. Next는 클라이언트와 서버 모두에서 데이터를 불러올 수 있다.
2. 서버는 다음 두가지 상황에서 데이터를 불러올 수 있다.

- 1. 정적 페이지를 만들 때 getStaticProps함수를 사용해서, 빌드 시점에 데이터를 불러올수 있다.
- 2. 서버가 페이지를 렌더링할 때 getServerSideProps를 통해, 실행 도중 데이터를 불러올 수도 있다.

3. 데이터 베이스에서 데이터를 가져 올 수도 있지만 안전하기 않기 때문에 권장하지 않는다. 데이터베이스의 접근은 백엔드에서 처리하는 것이 좋다.
4. Next는 프론트엔드만 담당하는 것이 좋다.

=================================================

1. 기본 개념
   레이아웃: 레이아웃은 페이지의 전체 구조를 정의합니다. 예를 들어, 헤더, 사이드바, 푸터 등 페이지 전반에 걸쳐 동일하게 유지되어야 하는 UI 요소를 포함할 수 있습니다.
   중첩 레이아웃: Next.js에서는 레이아웃을 중첩하여 사용할 수 있습니다. 즉, 각 페이지에 대해 고유한 레이아웃을 설정하고, 특정 레이아웃 안에 다른 레이아웃을 포함할 수 있습니다.
2. 기본 파일 구조
   app/layout.jsx: 앱의 기본 레이아웃을 정의하는 파일입니다. 여기서 공통적인 UI 요소를 설정하고, 페이지의 모든 부분에 적용됩니다.
   app/page.jsx: 각 페이지에 대한 구성 요소를 정의하는 파일입니다. 기본 레이아웃 안에서 해당 페이지의 내용을 렌더링합니다.
3. 예제
   다음은 간단한 레이아웃 구조의 예입니다.

app/layout.jsx
jsx
코드 복사
export default function Layout({ children }) {
return (

<div>
<header>
<h1>My App Header</h1>
</header>
<main>{children}</main>
<footer>
<p>My App Footer</p>
</footer>
</div>
);
}
이 예제에서는 레이아웃 컴포넌트가 header, main, footer를 포함하고 있습니다. children은 해당 레이아웃 안에서 각 페이지의 내용을 나타냅니다.

app/page.jsx
jsx
코드 복사
import Layout from './layout';

export default function Page() {
return (
<Layout>

<p>Welcome to My App!</p>
<p>This is the home page content.</p>
</Layout>
);
}
이 예제에서는 Page 컴포넌트가 Layout을 포함하고 있으며, Layout의 main 영역에 해당 페이지의 내용을 전달하고 있습니다.

1. foo
   정적 경로: foo라는 이름의 폴더를 생성하면, /foo라는 정적 경로를 생성합니다. 이 경우, foo라는 폴더 안에 있는 page.jsx 또는 index.jsx 파일이 /foo 경로에 해당하는 페이지가 됩니다.
2. [foo]
   단일 동적 세그먼트: foo가 대괄호([])로 감싸인 경우, 해당 부분은 동적 세그먼트를 나타냅니다. 예를 들어, blog/[foo]라는 폴더를 만들면 /blog/abc, /blog/123과 같은 URL에서 abc나 123이 foo로 전달됩니다.
   이 경우 foo는 동적 경로 변수로 사용되어, 사용자가 입력한 URL에 따라 다른 값을 가질 수 있습니다.
3. [...foo]
   다중 동적 세그먼트: foo가 세 개의 점(...)과 함께 대괄호로 감싸인 경우, 해당 부분은 여러 개의 동적 세그먼트를 허용합니다. 예를 들어, blog/[...foo]라는 폴더를 만들면 /blog, /blog/abc, /blog/abc/def와 같이 다양한 경로에서 foo 배열이 생성됩니다.
   이 경우, foo는 입력된 URL 경로의 모든 세그먼트를 배열로 받을 수 있습니다. 예를 들어, /blog/abc/def의 경우 foo는 ['abc', 'def']로 전달됩니다.
4. [[...foo]]
   선택적 다중 동적 세그먼트: foo가 두 쌍의 대괄호로 감싸인 경우, 이는 선택적 다중 동적 세그먼트를 나타냅니다. 예를 들어, blog/[[...foo]]라는 폴더를 만들면 /blog, /blog/abc, /blog/abc/def 등에서 모두 이 경로를 처리할 수 있습니다.
   이 경우 foo는 URL에 값이 없을 수도 있고, 하나 이상의 세그먼트를 가질 수도 있습니다. 즉, foo는 URL의 존재 여부에 따라 undefined, [], 또는 ['abc', 'def']와 같은 값을 가질 수 있습니다.
   > > > > > > > e4d837926502f846deef0f869ac6bed08cfe6e9f

## 2024-10-02 수업 내용

# Page Router

1. App router [Y / N] : N
2. src/ [Y / N] : 상관없음 N: 학습할 때 용이함 허나 현재 src는 100%로 사용함
3. "/pages" 우선권 높음

<(pages) / src-pages> - 첫번째를 주로 사용함

{
(pages)
ㄴ index.jsx (root: 기본 root 실행시)
ㄴ foo.jsx (Ex: localhost:3000/foo)
ㄴㄴ bar.jsx (Ex: localhost:3000/foo/bar)
}

/foo/bar.jsx = ~/foo/bar
/foo/index.jsx = ~/foo

---

\*.dir,file 모두 사용 가능
Dynamic Page Router

[slug] : 일반
[...slug] : catch-all segments : 세그먼트 없을시 404
[[...slug]] : optional catch-all segments : 세그먼트 없을시 undefined

/pages
ㄴ[foo].jsx []가 아니었을시 ~/foo 였지만 [] 사용시 console.log 찍어보면 ex) ~/bar => {foo : bar}

~/blog/[foo] => /blog/1040?id=4999&name=kim

~/[blog]/foo => /Key값 ex) My/foo/~~~

~/[blog]/[...foo] => 404에러 안나고 없더라도 undefined로 지정해버림

주어진 코드에 따라 올바른 URL을 입력하는 방법은 다음과 같습니다.

URL 경로: /blog/foo

쿼리 파라미터: id와 name을 포함합니다.
완전한 URL:
bash
코드 복사
http://localhost:3000/blog/foo?id=123&name=John
출력:
makefile
코드 복사
foo[0]: foo
foo[1]: 값이 없습니다
foo[2]: 값이 없습니다
id: 123
name: John
pid: 값이 없습니다
URL 경로: /blog/foo/bar

쿼리 파라미터: id와 name을 포함합니다.
완전한 URL:
bash
코드 복사
http://localhost:3000/blog/foo/bar?id=456&name=Jane
출력:
makefile
코드 복사
foo[0]: foo
foo[1]: bar
foo[2]: 값이 없습니다
id: 456
name: Jane
pid: 값이 없습니다
URL 경로: /blog/foo/bar/baz

쿼리 파라미터: id와 name을 포함합니다.
완전한 URL:
bash
코드 복사
http://localhost:3000/blog/foo/bar/baz?id=789&name=Mike
출력:
makefile
코드 복사
foo[0]: foo
foo[1]: bar
foo[2]: baz
id: 789
name: Mike
pid: 값이 없습니다
URL 경로: /blog/foo/bar/baz/extra

쿼리 파라미터: id와 name을 포함합니다.
완전한 URL:
bash
코드 복사
http://localhost:3000/blog/foo/bar/baz/extra?id=101&name=Alice
출력:
makefile
코드 복사
foo[0]: foo
foo[1]: bar
foo[2]: baz
id: 101
name: Alice
pid: 값이 없습니다
요약
경로: /blog/[[...foo]]는 여러 개의 경로 매개변수를 허용하며, foo 배열의 인덱스에 따라 값이 출력됩니다.
쿼리 파라미터: ?id=value&name=value 형태로 추가하여 검색 파라미터를 전달할 수 있습니다.
이렇게 URL을 설정하면 주어진 코드에서 foo, id, name, pid 값을 적절하게 출력할 수 있습니다. pid는 쿼리 파라미터에 포함되어 있지 않기 때문에 항상 "값이 없습니다"로 출력됩니다.

# App Router

1. App router [Y / N] : Y
2. src/ [Y / N] : 상관없음 N: 학습할 때 용이함 허나 현재 src는 100%로 사용함
3. appR, pageR 둘중 하나만 appR하다가 pageR안됨염
4. dir name -> segment (dir만 segment가 됨, 파일은 안됨)

/src/app/

src/app
ㄴblog
ㄴㄴ[slug]
ㄴㄴㄴpage.js

URL 예시
URL 경로: blog/fooo

쿼리 파라미터: id와 name을 포함합니다.
완전한 URL:
bash
코드 복사
http://localhost:3000/blog/fooo?id=123&name=John
출력:
makefile
코드 복사
fooo: fo
id: 123
name: John
URL 경로: blog/foo/bar

쿼리 파라미터: id와 name을 포함합니다.
완전한 URL:
bash
코드 복사
http://localhost:3000/blog/foo/bar?id=456&name=Jane
출력:
makefile
코드 복사
fooo: foo/bar
id: 456
name: Jane
URL 경로: blog/foo/bar/baz

쿼리 파라미터: id와 name을 포함합니다.
완전한 URL:
bash
코드 복사
http://localhost:3000/blog/foo/bar/baz?id=789&name=Mike
출력:
makefile
코드 복사
fooo: foo/bar/baz
id: 789
name: Mike
요약
경로: /blog/[[...fooo]] 부분은 여러 레벨의 경로를 포함할 수 있습니다. 예를 들어, /blog/foo, /blog/foo/bar, /blog/foo/bar/baz 등.
쿼리 파라미터: ?id=value&name=value 형태로 추가하여 검색 파라미터를 전달할 수 있습니다.
이렇게 URL을 설정하면 주어진 코드에서 fooo, id, name 값을 적절하게 출력할 수 있습니다.

## 2024-09-18, 09-25 수업 내용

3. Next.js 기초와 내장 컴포넌트

1) 클라이언트와 서버에서의 라우팅 시스템 작동 방식
2) 페이지 간 이동 최적화
3) Next.js가 정적 자원을 제공하는 방법
4) 자동 이미지 최적화와 새로운 Image 컴포넌트를 사용한 이미지 제공 최적화 기법
5) 컴포넌트에서 HTML메타데이터를 처리하는 방법
6) "\_app.js"와 "\_documents.js"파일 내용 및 커스터 마이징 방법
7) [slug].js는 매개 변수로 사용되며 주소창에서 입력하는 값을 모두 받을 수 있다.
8) 동적 라우팅 규칙을 중첩할 수도 있다.
9) 접근 경로를 ~/posts/[date]/[slug]와 같이 만들수 있다.
10) [date] 디렉토리를 만들고 그 안에 [slug].js와 같이 만들 수 있다.
11) [date] [slug]등 어떤 값이든 가질 수 있다.
12) 실제 앱에서는 경로 매개변수에 따라 서로 다른 동적 페이지를 렌더링하게 된다.

3-1. 라우팅 시스템

1. React의 React Router, Reach Router 등은 클라이언트 라우팅만 구현할 수 있다.
2. Next는 파일시스템 기반 페이지와 라우팅을 한다.
3. 페이지는 /pages 디렉토리 안의 *js, *jsx, *ts, *tsx 파일에서 export한 React 컴포넌트입니다.
4. /pages/posts/ 디렉토리 내에 index.js만 간단하게 만들면 localhost:3000/posts로 접속이 가능함
5. 다만 동적인 라우팅 규칙을 만들려면 [slug].js 파일을 줘야함

# 2024-09-11 수업 내용

npm i -g create-react-app ## 처음 생성시

npx create-next-app@latest

## 왜 SWC(Speedy)를 사용해야 하는가?

1. Babel의 단점

1) Babel로 변환된 코드를 이해하기 어렵다
2) 원 코드에 비해 변환 코드의 길이가 늘어난다.
3) 변환에 시간이 많이 걸린다.

2. SWC의 장점

1) 별도의 설정 없이 SWC 사용 가능, Next.js에 내장
2) Rust의 WASM(webAssembly)지원으로 어떤 종류의 플랫폼에서도 Next js 개발 가능

## SWC를 프로젝트에 적용하려면

1. 12버전 이후로는 상관없이 설치시 자동으로 설치되어 사용가능
2. 12이전 버전의 프로젝트에 적용하려면 npm install next@12
3. 그리고 Babel을 설정했다면 설정 파일(.bablrc 또는 babel.config.js)를 삭제

2)  렌더링 전략

1. 서버 사이드 렌더링(SSR)
2. 클라이언트 사이드 렌더링(CSR)
3. 정적 사이트 생성(SSG)

## 렌더링 전략

1. 렌더링 전략이란 웹 페이지 또는 웹 애플리케이션을 웹 브라우저에 제공하는 방법을 의미한다.
2. 정적인 페이지 제작에는 Gatsby를 추천
3. 서버 사이드 렌더링 전략을 원한다면 다른 프레임워크를 검토
4. 그런데 Next.js에서 이 모든 방법을 완전히 새로운 수준으로 제공
5. 어떤 페이지는 빌드 시점에 정적으로 생성하고, 어떤 페이지는 실행 시점에 동적으로 생성할지 쉽게 정할 수 있다.
6. 또한 특정 페이지에 대한 요청이 있을 때마다 페이지를 다시 생성할 수도 있다.
7. 그리고 반드시 클라이언트에서 렌더링해야 할 컴포넌트도 지정할 수 있어 개발이 쉽다.

## 02-1 서버 사이드 렌더링(SSR)

1. 웹 페이지를 제공하는 가장 흔한 방법
2. APM을 이용하는 일반적인 웹 페이지 생성
3. 여기에 자바 스큽립트 코드가 적재되면 동적으로 페이지 내용을 렌더링 함
4. Next.js 도 이와 같이 동적으로 페이지를 렌더링할 수 있다.
5. 스크립트 코드를 집어 넣어서 나중에 웹 페이지를 동적으로 처리할 수도 있는데 이를 하이드레이션이라고 한다.
6. EX) 어떤 사람이 작성한 블로그 글을 한 페이지에 모아서 작성해야 한다면 SSR을 이용하는 것이 적당하다.
7. 서버 사이드 렌더링 -> 자바스크립트가 하이드레이션된 페이지를 전송 -> 클라이언트에서 DOM위에 각 스크립트 코드를 하이드레이션 : 페이지 새로 고침 없이 사용자와 웹페이지 간 상호 작용을 가능하게 한다.
8. 리액트 하이드레이션 덕분에 싱글 페이지 애플리케이션(SPA) 처럼 작동할 수 있다.
9. CSR과 SSR의 장점을 모두 가지는 것이다,

## SSR의 장점

1. 더 안전한 애플리케이션
2. 더 뛰어난 웹 사이트 호환성
3. 더 뛰어난 SEO

## 02-2 클라이언트 사이드 렌더링(CSR)

1. React 앱을 실행하면 렌더링 시작전에 빈 화면이 한동안 유지 되는 것을 볼 수 있다.
2. 이는 서버에서 스크립트와 스타일만 포함된 HTML을 전송하기 때문이다.
3. 실제 렌더링은 클라이언트에서 이루어 진다.
4. CSR로 생성한 앱의 HTML을 보면 div태그 하나 밖에 없다. 그래서 빈 화면만 보였던 것
5. 빌드 과정에서 js와 css파일을 HTML페이지에 불러오도록 만들고 root div에 렌더링 한다.

## CSR의 장단점

1. 네이티브 앱처럼 느껴지는 웹 앱
2. 전체 자바스크립트 번들을 다운로드 한다는 것은 렌더링할 모든 페이지가 이미 브라우저에 다운로드 되어 있단 뜻
3. 다른 페이지로 이동해도 서버에 요청할 필요 없이, 바로 페이지를 이동할 수 있다.
4. 페이지를 바꾸기 위해 새로 고칠 필요가 없다.
5. 쉬운 페이지 전환
6. 지연된 로딩과 성능(최소로 필요한 HTML만 렌더링)
7. 서버 부하 감소-서버리스 환경에서 웹 앱을 제공할 수 있다.

8. 네트워크 속도가 느린 환경에서는 번들이 모두 다운로드 될 때까지 계속 빈 페이지를 보아야 한다.
9. 검색 로봇에게도 그 내용은 빈 것으로 보인다.
10. 번들을 모두 받을 때까지 검색 로봇이 기다리기는 하지만 성능 점수는 낮을 것이다.
11. React useEffect Hook 최근 리액트는 함수형 컴포넌트 사용을 강조하며 life cycle Hook사용
12. 함수형 컴포넌트 내에서 DOM조작이나 데이터 불렁괴 같은 사이드 이펙트를 구현할 때, useEffect함수를 사용해서 컴포넌트가 마운트된 후 해당 기능을 실행하도록 만들 수 있다.

## process.browser 변수

1. 서버에서 렌더링할 때 브라우조 전용 API로 인한 문제를 다른 방법으로 해결할 수도 있다.
2. process.brower 값에 따라 스크립트와 컴포넌트를 조건별로 싱행
3. 이 변수는 Boolean 값으로, 코드를 실행하면 true, 서버 false //typeof window를 서버에서 실행하면 undefined, 그렇지 않으면 클라이언트에서 실행하게됨
4. 곧 서비스 중단 예정

## 동적 컴포넌트 로딩 - dynamic

1. React useEffect 훅을 사용하여 브라우저에서 코드를 실행하는 경우에만 컴포넌트를 렌더링을 해보았는데 dynamic 함수로도 똑같이 동작하게 할 수 있다.
2. ssr:false 옵션으로 클라이언트에서만 코드를 실행한다고 명시

## 02-3 정적 사이트 생성(SSG : Static Site Generation)

1. SSG는 일부 또는 전체 페이지를 빌드 시점에 미리 렌더링 한다.
2. SSG는 SSR 및 CSR과 비교했을 때 다음과 같은 장점이 있다.
3. 쉬운 확장(단순 HTML 파일이므로) CDN을 통해 파일을 제공하거나, 캐시에 저장하기 쉽다.
4. 뛰어난 성능 빌드 시점에 HTML 페이지를 미리 렌더링하기 때문에 페이지를 요청해도 클라이언트나 서버가 무언가를 처리할 필요가 없다
5. 더 안전한 API 요청(외부 API를 호출하거나, 데이터베이스, 보호해야 할 테이터에 접근 할 필요 없다.)
6. SSG는 높은 확장성과 뛰어난 성능을 보이는 프론트엔드 애플리케이션을 만들고 싶을 때 가장 좋은 방법
7. 한 가지 문제점은 다음 배포 전까지 내용이 변하지 않는다는 것
8. 조금이라도 수정하려면 필요한 데이터를 가져와서 수정하고 다시 생성하는 과정을 반복해야 한다.
9. 이런 문제를 해결하기 위해 나온 방법이 "증분 정적 재생성(ISR : Incremental Static Regeneration)"
10. Ex) 동적 컨텐츠를 제공하지만 해당 콘텐츠 데이터를 로딩 하는데 시간이 오래 걸린다면, SSG와 ISR을 함께 사용하여 문제 해결 가능
11. 만일 데이터가 자주 변하지 않는다면 SSR와 ISR을 사용하여 데이터를 10분동안 캐싱할 수 있다.

12. getStaticProps 함수
13. 빌드 과정에서 페이지를 렌더링 할 때 이 함수를 호출해서 필요한 데이터 등을 가져오며, 다음 번 빌드 시점까지 더 이상 호출하지 않는다.
14. 빌드 과정에서 페이지의 내용을 getStaticProps 함수가 반환한 객체의 값으로 채운다. 빌드를 거쳐 정적 페이지로 만들어진다.
15. 처음 10분간 해당 페이지를 요청하는 모든 사용자는 동일한 정적 페이지를 제공받는다.
16. 10분만다 렌더링을 하는것이 아닌 해당 페이지에 대한 새로운 요청이 들어오면 Next.js는 이 페이지를 서버에서 다시 렌더링 하고 getSTaticProps함수를 다시 호출
17. 다시 랜더링한 페이지는 이전 페이지를 덮어쓴다.
