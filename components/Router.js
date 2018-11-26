import Router from 'next/router';

export function Home() {
  Router.push({
    pathname: '/'
  });
}

export function About() {
  Router.push({
    pathname: '/about'
  });
}

export function Resume() {
  Router.push({
    pathname: '/resume'
  });
}
