import Wrapper from './Wrapper';

export default ({ props }) => {
  function createWord(word) {
    return wordPlay(word);
  }
  function wordPlay(word) {
    return ['abc ', <Wrapper msg={word} />, ' abc.'];
  }
  return (
    <div>
      {createWord(props.msg)}
    </div>
  );
};
