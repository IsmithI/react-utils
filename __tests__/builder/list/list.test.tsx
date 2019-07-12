import * as React from "react"
import { shallow } from "enzyme"
import * as Enzyme from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"
import { IListItem, ListBuilder } from "../../../src/builders/list"

Enzyme.configure({ adapter: new Adapter() })

const items = [
  {
    text: 'Hello there'
  },
  {
    text: 'Another one'
  }
]

test('It renders', () => {
  const ListItem = ({ item: { text }}: IListItem<any>) => <li>{text}</li>
  const el = shallow(
    <ListBuilder items={items} ListItem={ListItem}/>
  )

  expect(el.html()).toBe('<ul><li>Hello there</li><li>Another one</li></ul>');
  expect(el).toBeDefined();
})