import { IList } from "./IList"
import * as React from "react"

export class List<R> extends React.Component<IList<R>> {

  render() {
    const { items, ListItem, onItemChange } = this.props

    return (
      <ul>
        {ListItem && items.map(item => <ListItem item={item} onItemChange={onItemChange}/>)}
      </ul>
    )
  }
}