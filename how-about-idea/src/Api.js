import axios from "axios";

const origin = "http://localhost:8080";
//member
//회원가입
export async function signUp(data) {
  const res = await axios.post(
    `${origin}/api/auth/signUp`,
    {
      ...data,
    },
    {
      headers: {},
    }
  );

  return res;

  // {
  //     "userId" : "test4",
  //     "userPassword": "test2",
  //     "userPasswordCheck": "test2",
  //     "userEmail" : "test2@test.com"
  // }
}

//로그인
export async function signIn(data) {
  const res = await axios.post(
    `${origin}/api/auth/signIn`,
    {
      ...data,
    },
    {
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    }
  );

  return res;

  // {
  //     "userId" : "test4",
  //     "userPassword": "test2"
  // }
}

//유저 정보
export async function getUser(id) {
  const res = await axios.get(`${origin}/api/auth/user/${id}`);

  return res;
}

//makeSentence
//트리즈 문장 등록
export async function makeSentence(data) {
  const res = await axios.post(
    `${origin}/api/auth/saveSentence`,
    {
      ...data,
    },
    {
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    }
  );

  return res;

  // {
  //     "sentence": "개와 고양이는 멋져",
  //     "combineWord1" : "개",
  //     "combineWord2" : "고양이",
  //     "starRating" : 4,
  //     "show" : 1,
  //     "patentRelation" :  ["문장1","문장2", "문장3"]

  // }
}

//트리즈 문장 불러오기
export async function getSentence(id) {
  const res = await axios.get(`${origin}/api/auth/makeSentence/${id}`);

  return res;
}

//트리즈 문장 검색(트리즈 문장 포함여부)
export async function searchSentence(str) {
  const res = await axios.get(
    `${origin}/api/auth/makeSentence/searchSentence/${str}`
  );

  return res;
}
// 문장 불러오면 이제 거기에 마인드맵 id => 다시 마인드맵 데이터를 get => 이 데이터로 mind

//트리즈 문장 검색(선택단어 포함여부)
export async function searchWord(str) {
  const res = await axios.get(
    `${origin}/api/auth/makeSentence/searchWord/${str}`
  );

  return res;
}

//mindMap
//마인드맵 생성
export async function createMindMap(data) {
  const res = await axios.post(
    `${origin}/api/auth/saveMindMap`,
    {
      ...data,
    },
    {
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    }
  );

  return res;

  // {
  //     "highestWord" : "선풍기",

  //     "mindMapNode":[
  //         {
  //             "id":"2",
  //             "label":"선풍기",
  //             "type":"level1"
  //         },
  //         {
  //             "id":"3",
  //             "label":"선풍기",
  //             "type":"level2"
  //         }],
  //     "mindMapEdge":[
  //         {
  //             "id":"1->2",
  //             "source":"2",
  //             "target":"1"
  //         },
  //         {
  //             "id":"1->3",
  //             "source":"3",
  //             "target":"1"
  //         }
  //         ]
  // }
}

//마인드맵 전체조회
export async function getMindMapAll() {
  const res = await axios.get(`${origin}/api/auth/mindMap`);

  return res;
  //노드 에지 둘다?
}

//자신의 마인드맵 전체조회
export async function getMyMindMap() {
  const res = await axios.get(`${origin}/mindMap`);

  return res;
}

//마인드맵 단일 조회 ,백엔드 아직 구현안됨
export async function getMindMap(id) {
  const res = await axios.get(`${origin}/api/auth/mindMap/${id}`);

  return res;
}

//patentRelation

//memberStar

//wordRelation
export async function createWordRelation(data){

  const res  = await axios.post(`${origin}/api/auth/saveWord`,
  {

    ...data
  },
  {

    headers:{

      Authorization:sessionStorage.getItem("token")            

    }

  })

  return res

}

export async function CheckWordRelation(rootword,word){

  const res  = await axios.get(`${origin}/api/auth/wordRelation/${rootword}/${word}`)

  return res
}

export async function getWordRelation(word){

    const res  = await axios.get(`${origin}/api/auth/wordRelation/${word}`)

    return res
}

