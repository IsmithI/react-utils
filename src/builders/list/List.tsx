import { IList } from "./IList"
import * as React from "react"

export class List<R> extends React.Component<IList<R>> {

  render() {
    const { items, ListItem, onItemChange, onItemDelete } = this.props

    return (
      <ul>
        {ListItem && items.map(
          (item: R) =>
            <ListItem
              item={item}
              onItemChange={onItemChange}
              onItemDelete={onItemDelete}/>
        )}
      </ul>
    )
  }
}