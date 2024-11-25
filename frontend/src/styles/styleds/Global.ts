import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html {
  box-sizing: border-box;
}

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  background: #f4f4f4;
  font-size: 14px;
  color: #333;
  font-family: sans-serif, Helvetica, -apple-system;
  overflow-x: hidden;
}

code {
  font-family: Courier, monospace;
}

ul {
  display: flex;
  list-style: none;
  gap: 30px;
}

label,
input,
select {
  display: flex;
  margin: 0 10px;
  padding: 0 10px;
  font-size: large;
  line-height: normal;
}

input {
  color: black;
}

select {
  width: 100%;
}

option:hover,
option:focus,
option.selected.focus {
  font-weight: bold;
  color: #fb0000;
}
`;