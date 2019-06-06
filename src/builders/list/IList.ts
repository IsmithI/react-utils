import { IListItem } from "./IListItem"
import { ReactElement } from "react"
import { ChangeHandler } from "./ChangeHandler"

export interface IList<R> {
  items: R[]
  ListItem?: (props: IListItem<R>) => ReactElement<IListItem<R>>
  onItemChange?: ChangeHandler<R>
}