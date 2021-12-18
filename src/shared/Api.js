import axios from "axios"



export const instance = axios.create({
  baseURL : 'http://3.37.61.109/',
  timeout: 3000,
  headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
	}
})

export const Api = {

  comment: {
    write: (password,content,productId) =>  instance.post(`/api/products/${productId}/reviews`, {password:password,content:"댓글이에요"}),
    getList: (productId) => instance.post(`/api/products/${productId}/reviews`,productId),
    delete: (password) => instance.delete('/api/products/reviews/{reviewId}', password),
    update: (password,content) =>  instance.put('/api/products/reviews/{reviewId}', password,content),
  }
}