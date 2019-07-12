import * as React from "react"
import { ReactElement } from "react"
import { List } from "./List"
import { ChangeHandler } from "./ChangeHandler"
import { IListItem } from "./IListItem"

type Item<R> = (props: IListItem<R>) => ReactElement<IListItem<R>>

interface ListBuilderProps<R> {
  items: R[];
  ListItem: Item<R>;
  onItemChange?: ChangeHandler<R>;
  onItemDelete?: ChangeHandler<R>;
}

export class ListBuilder<R> extends React.Component<ListBuilderProps<R>> {

  render = () => {
    const { ...props } = this.props
    return (
      <List
        {...props}
      />
    )
  }
}