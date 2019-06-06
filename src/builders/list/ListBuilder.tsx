import * as React from "react"
import { ReactElement } from "react"
import { IList } from "./IList"
import { List } from "./List"
import { ChangeHandler } from "./ChangeHandler"
import { IListItem } from "./IListItem"

type Item<R> = (props: IListItem<R>) => ReactElement<IListItem<R>>;

export class ListBuilder<R> {
  private listItem: Item<R>
  private changeHandler: ChangeHandler<R>

  render = (item: Item<R>) => {
    this.listItem = item
    return this
  }

  onItemChange = (changeHandler: ChangeHandler<R>) => {
    this.changeHandler = changeHandler
    return this
  }

  make = () => {
    return (props: IList<R>) => (
      <List
        {...props}
        ListItem={this.listItem}
        onItemChange={this.changeHandler}
      />
    )
  }
}