import * as axios from "axios"

const instans = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {'API-KEY': '73434e3f-2d20-4434-acc7-f61ec7986d61'}
})

export const usersApi = {
   getUsers(currentPage, pageSize) {
      return instans.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(respons => {
         return respons.data;
      });
   },
   follow(id) {
      return instans.post(`follow/${id}`)
      .then(respons => respons.data);
   },
   unFollow(id) {
      return instans.delete(`follow/${id}`)
      .then(respons => respons.data);
   },
   userProfile(userId) {
      return profileApi.userProfile(userId);
   }
}

export const profileApi = {
   userProfile(userId) {
      return instans.get('profile/' + userId)
      .then(respons => {
         return respons.data;
      });
   },
   getStatus(userId) {
      return instans.get('profile/status/' + userId);
   },
   updateStatus(status) {
      return instans.put('profile/status', {status: status});
   },
   savePhoto(file) {
      const fornData = new FormData();
      fornData.append('image', file)
      return instans.put('profile/photo', fornData, { headers: {'Content-Type': 'multipart/form-data'} })
      .then(respons => respons.data.data);
   },
   chengeProfileInfo(profileInfo) {
      return instans.put('profile', profileInfo)
   }
}

export const authApi = {
   setAuth() {
      return instans.get('auth/me')
      .then(respons => {
         if(respons.data.resultCode === 0) {
            return respons.data.data
         }
      })
   },
   login(email, password, rememberMe, captcha) {
      return instans.post('/auth/login', {email, password, rememberMe, captcha})
   },
   logOut() {
      return instans.delete('/auth/login')
   }
}

export const securityAPI = {
   getCapchaUrl() {
      return instans.get('security/get-captcha-url')
   }
}

