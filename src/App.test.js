import { postText } from './redux/actions/sendText'

test('fetchText: should return same text', () => {
  let data = {text:"Hola mundo"};   
  postText(data).then(res=>{
    expect(res).toBe({text:"Hola mundo"});
  });
});


