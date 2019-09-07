//action creator: 액션을 생성하는 함수
export const updateUser = (name) => ({
	type:'updateUser',
	payload:{
		user: name
	}
})