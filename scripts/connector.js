const url = 'https://my-json-server.typicode.com/bunterg/my-website/results';

const fetchData = async () => {
  const resp = await fetch('https://my-json-server.typicode.com/bunterg/my-website/results', {});
  const data = await resp.json();
  return data;
}