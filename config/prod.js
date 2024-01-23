module.exports = {
    // 헤로크에서 설정한 MONGO_URI를 불러오겠다는 건데
    // 어짜피 우리는 배포 안할 거잖아
    // index.js에서 mongodb 연결할때 ./config/key에서
    // 현재 app 상태가 개발중(dev)인지 배포 후(prod)인지를 변수로 받아와서
    // 그에 맞는 상태로 연결해 줌 == 지금은 개발중(dev)이니까 굳이 헤로크 안써도 됨 ㅋ
    mongoURI : process.env.MONGO_URI
}