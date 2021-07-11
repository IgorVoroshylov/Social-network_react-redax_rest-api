//!         СВОЙ АНАЛОГ STORE!!!!

const store = {
   _state: {
      dialogs: {
         dialogsData: [
            {id: 1, name: 'Alex', img: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517"},
            {id: 2, name: 'Max', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVt3kMP45sfjil7cOrj5vrIcOEB3XTBBCJA&usqp=CAU"},
            {id: 3, name: 'Sveta', img: "https://m.spletnik.ru/img/2020/12/20201202-gomez-post.jpg"},
            {id: 4, name: 'Sasha', img: "https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/202004/826869587.jpg"}
         ],
         messagesData: [
            {id: 1, message: 'hello my friend!'},
            {id: 2, message: 'how are you?'}
         ],
         newMessageText: ''
      },
      profile: {
         postsData: [
            {id: 1, message: "Hi, how are you?", like: "15"},
            {id: 2, message: "It`s my first post", like: "20"}
         ],
         newPostText: ''
      },
      friends: [
         {name: 'Alex', id: 1, img: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517"},
         {name: 'Sveta', id: 2, img: "https://m.spletnik.ru/img/2020/12/20201202-gomez-post.jpg"},
         {name: 'Sasha', id: 3, img: "https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/202004/826869587.jpg"}
      ]
   },
   _callSubscriber() {},
   subscribe (observer) {
      this._callSubscriber = observer;
   },
   getState() {
      return this._state;
   },
   dispatch(action) {
      this._state.profile = profileReducer(this._state.profile, action);
      this._state.dialogs = dialogReducer(this._state.dialogs, action);
      this._callSubscriber(this);
   }
}

