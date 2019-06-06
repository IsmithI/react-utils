import * as React from "react"
import { IList } from "./IList"
import { List } from "./List"
import { ChangeHandler } from "./ChangeHandler"
import { IListItem } from "./IListItem"

type Item<R> = React.ComponentType<IListItem<R>>

export class ListBuilder<R> {
  private listItem: Item<R>
  private changeHandler: ChangeHandler<R>
  private deleteHandler: ChangeHandler<R>

  render = (item: Item<R>) => {
    this.listItem = item
    return this
  }

  onItemChange = (changeHandler: ChangeHandler<R>) => {
    this.changeHandler = changeHandler
    return this
  }

  onItemDelete = (deleteHandler: ChangeHandler<R>) => {
    this.deleteHandler = deleteHandler
    return this
  }

  make = () => {
    const ListItem = this.listItem;
    return (props: IList<R>) => (
      <List
        {...props}
        ListItem={(props: IListItem<R>) => <ListItem {...props} />}
        onItemChange={this.changeHandler}
        onItemDelete={this.deleteHandler}
      />
    )
  }
}