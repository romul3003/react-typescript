import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Click')}>
      asdfg
    </ChildAsFC>
  );
};

export default Parent;
