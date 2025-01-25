import renderer from 'react-test-renderer';
import { Info } from '../features/info/Info';

describe('Info',() => {
  it('render properly', () => {
    const component = renderer.create(<Info upvotes="10" downvotes="2" className="votes"></Info>);
    expect(component.toJSON()).toMatchSnapshot();
  })
})