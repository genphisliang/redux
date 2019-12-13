# redux
27行代码实现的精简版redux

## 与我们熟知的rudex用法一样
  ```
  const action = {
	  type:'ADD_TODO',
	  payload: '手写redux'
	};

	const reducer =(state=0, action)=>{
	  switch(action.type){
	    case 'ADD_TODO':
	        return state + 1;
	    default:
	    	return state;
	  }
	}

	const store = createStore(reducer);

	store.dispath(action);

	const state = store.getState();
  ```
