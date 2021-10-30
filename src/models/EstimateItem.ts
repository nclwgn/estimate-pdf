import EstimateSubItem from "./EstimateSubItem";

export default class EstimateItem {
  public title: string = '';
  public subItems: EstimateSubItem[] = [ new EstimateSubItem() ];

  constructor() {}
}