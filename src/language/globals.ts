

export interface IEntry { description?:string, signature?:string }
export interface IEntries { [name: string]: IEntry }

export var globalfunctions: IEntries = {
  sleep:{
    description: "This function causes the script to pause for the specified time, without wasting CPU cycles. There are 1000 milliseconds in one second.",
    signature: "Sleep(milliseconds as Integer) as Void"
  }
}