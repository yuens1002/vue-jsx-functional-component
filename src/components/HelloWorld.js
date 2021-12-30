import Wrapper from './Wrapper';

export default ({ props }) => {
  function createWord(msg) {
    const re = /<a\b[^>]*>(.*?)<\/a>/gi;
    const links = [];
    let matchIdx = 0;
    const newStr = msg.replace(re, (_, p1) => {
      links.push(p1);
      return '<replace>';
    });
    const arrStr = newStr.split(' ');
    console.log('arrStr', arrStr);
    const arrStrComp = arrStr.map((str) => {
      if (str === '<replace>') {
        console.log('links[matchIdx]', links[matchIdx]);
        return <Wrapper msg={links[matchIdx++]} />;
      }
      return str;
    });
    console.log(links);
    console.log(arrStrComp);
    // add spaces
    return arrStrComp.reduce((all, item) => {
      all.push(item);
      all.push(' ');
      return all;
    }, []);
  }
  return <div>{createWord(props.msg)}</div>;
};
