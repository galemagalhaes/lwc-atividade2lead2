import { LightningElement, api } from "lwc";

export default class Lead extends LightningElement {
  @api firstname;
  @api lastname;
  @api company;
  @api status;
  @api phone;  
}
