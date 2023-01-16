export interface IEvent{
  id : number
  name :string
  description :string
  startDate : Date
  endDate : Date
  maxGuest : number
  isCancel : boolean
  creatorId : number
}
