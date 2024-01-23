const express = require('express');

const app = express();
const port = 5000;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('./config/key')
const { User } = require("./models/User");
const bodyParser = require("body-parser");
mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB is connected...'))
.catch(err => console.log(err)) 

app.get('/', (req, res) => res.send('백엔드 서버 잘 작동함'))

// 승찬's 추가설명
// post란 서버에 데이터(JSON)를 추가하는 것
// 따라서 서버에 있는 데이터에 .save 메소드를 이용하여 json 파일을 res.으로 리턴해줌
// 이때, json 파일 안에는 success 인자의 정보가 들어있고, err와 status(200)의 정보도 함께 전달함
app.post('/register', (req, res) => {
    //회원가입에서 필요한 정보들을 User의 body에서 받아서 db에 보내줌. 
    const user = new User(req.body)
    user.save((err, doc) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({ success: true })
    })
})
app.listen(port, () => console.log(`Server started at http://localhost: ${port}`));

// 아래 두 줄(bodyparser의 메소드)은 아직도 이해가 잘 안감
// 대충 json 이랑 url을 encode시키는데 필요한 요소들이라고 이해하면 될 거같긴함
// 3회독때는 어느정도 이해가 되지 않을까싶음
// 2회독인 현재로서는 이 두 줄 빼고는 거의 다 완벽히 이해하면서 코드 작성함ㅎㅎ 매우 뿌듯함
// 확실히 회독이 답이다. 이해 안가도 넘기고 다시 볼때쯤에는 이해 감 ㅋ
app.use(bodyParser.urlencoded({extended: true}));
app.user(bodyParser.json());