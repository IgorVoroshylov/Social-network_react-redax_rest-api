let initialState = {
   dialogsData: [
      {id: 1, name: 'Alex', img: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517"},
      {id: 2, name: 'Max', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVt3kMP45sfjil7cOrj5vrIcOEB3XTBBCJA&usqp=CAU"},
      {id: 3, name: 'Sveta', img: "https://m.spletnik.ru/img/2020/12/20201202-gomez-post.jpg"},
      {id: 4, name: 'Sasha', img: "https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/202004/826869587.jpg"}
   ],
   messagesData: [
      {id: 1, message: 'hello my friend!'},
      {id: 2, message: 'how are you?'}
   ]
}

const dialogReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'dialogs/SEND_MESSAGE':
         let newMessage = {
            id: state.messagesData.length + 1,
            message: action.newMessageText,
            like: 0
         };
         return {...state,
         messagesData: [...state.messagesData, newMessage],
         newMessageText: '' };
      default:
         return state;
   }
}

export const sendMessageAction = (newMessageText) => ({type: 'dialogs/SEND_MESSAGE', newMessageText});

export default dialogReducer;