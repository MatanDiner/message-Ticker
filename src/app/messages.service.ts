import { Injectable } from '@angular/core';
import {Imessage} from './Models/message';
declare function require(path: string);
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages : Imessage[];
  constructor() { 

    this.messages = [

    {
      imgLink:require('./assets/images/img1.jpg'),
      userName:"yosi wol",
      date:"05/01/19 18:30",
      content:"איזה כחף היה לראות את התוכנית הזאת ...ממש חוויה,צפיתי בזה כל הלילה ולא יכלתי להוריד את העיניים מהמסך,התוכנית הזאת באמת ברמה גבוב..אני כבר מלא יכול לחכות לפרק הבא."
    },
    {
      imgLink:require('./assets/images/img2.jpg'),
      userName:"ran aro",
      date:"05/05/19 17:30",
      content:"איזה כחף היה לראות את התוכנית הזאת ...ממש חוויה,צפיתי בזה כל הלילה ולא יכלתי להוריד את העיניים מהמסך,התוכנית הזאת באמת ברמה גבוב..אני כבר מלא יכול לחכות לפרק הבא."
    },
    {
      imgLink:require('./assets/images/img3.jpg'),
      userName:"tom tim",
      date:"07/05/19 18:30",
      content:"איזה כחף היה לראות את התוכנית הזאת ...ממש חוויה,צפיתי בזה כל הלילה ולא יכלתי להוריד את העיניים מהמסך,התוכנית הזאת באמת ברמה גבוב..אני כבר מלא יכול לחכות לפרק הבא."
    },
    {
      imgLink:require('./assets/images/img4.jpg'),
      userName:"meni man",
      date:"08/05/19 18:30",
      content:"איזה כחף היה לראות את התוכנית הזאת ...ממש חוויה,צפיתי בזה כל הלילה ולא יכלתי להוריד את העיניים מהמסך,התוכנית הזאת באמת ברמה גבוב..אני כבר מלא יכול לחכות לפרק הבא."
    },
    {
      imgLink:require('./assets/images/img5.jpg'),
      userName:"eli pery",
      date:"15/06/19 18:30",
      content:"איזה כחף היה לראות את התוכנית הזאת ...ממש חוויה,צפיתי בזה כל הלילה ולא יכלתי להוריד את העיניים מהמסך,התוכנית הזאת באמת ברמה גבוב..אני כבר מלא יכול לחכות לפרק הבא."
    },
    {
      imgLink:require('./assets/images/img6.jpg'),
      userName:"lora li",
      date:"18/06/19 18:30",
      content:"איזה כחף היה לראות את התוכנית הזאת ...ממש חוויה,צפיתי בזה כל הלילה ולא יכלתי להוריד את העיניים מהמסך,התוכנית הזאת באמת ברמה גבוב..אני כבר מלא יכול לחכות לפרק הבא."
    },
    {
      imgLink:require('./assets/images/img7.jpg'),
      userName:"yaron sam",
      date:"02/07/19 18:30",
      content:"איזה כחף היה לראות את התוכנית הזאת ...ממש חוויה,צפיתי בזה כל הלילה ולא יכלתי להוריד את העיניים מהמסך,התוכנית הזאת באמת ברמה גבוב..אני כבר מלא יכול לחכות לפרק הבא."
    },
    {
      imgLink:require('./assets/images/img8.jpg'),
      userName:"roi dali",
      date:"06/07/19 18:30",
      content:"איזה כחף היה לראות את התוכנית הזאת ...ממש חוויה,צפיתי בזה כל הלילה ולא יכלתי להוריד את העיניים מהמסך,התוכנית הזאת באמת ברמה גבוב..אני כבר מלא יכול לחכות לפרק הבא."
    },
    {
      imgLink:require('./assets/images/img9.jpg'),
      userName:"tal golan",
      date:"14/07/19 18:30",
      content:"איזה כחף היה לראות את התוכנית הזאת ...ממש חוויה,צפיתי בזה כל הלילה ולא יכלתי להוריד את העיניים מהמסך,התוכנית הזאת באמת ברמה גבוב..אני כבר מלא יכול לחכות לפרק הבא."
    },
    {
      imgLink:require('./assets/images/img10.jpg'),
      userName:"eliad zan",
      date:"16/07/19 18:30",
      content:"איזה כחף היה לראות את התוכנית הזאת ...ממש חוויה,צפיתי בזה כל הלילה ולא יכלתי להוריד את העיניים מהמסך,התוכנית הזאת באמת ברמה גבוב..אני כבר מלא יכול לחכות לפרק הבא."
    },


    ]
  }



   getMessages(){
    return this.messages;
    //return this.messages.slice(startIndex,endIndex);
   }



}
