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

//유저 정보(유저 번호)
export async function getUser(userId) {
  const res = await axios.get(`${origin}/api/auth/user/${userId}`);

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

  //   {
  //     "sentence": "개와 고양이는 멋져",
  //     "combineWord1" : "개",
  //     "combineWord2" : "고양이",
  //     "show" : 1,
  //     "patentSentence" :  ["문장1","문장2", "문장3"],
  //     "mindMapEntityId" : 3
  // }
}

//트리즈 문장 불러오기
export async function getSentence(makeSentenceId) {
  const res = await axios.get(
    `${origin}/api/auth/makeSentence/${makeSentenceId}`
  );

  return res;
}

//트리즈 문장 검색(트리즈 문장에 str 포함여부)
export async function searchSentence(str) {
  const res = await axios.get(
    `${origin}/api/auth/makeSentence/searchSentence/${str}`
  );

  return res;
}

//트리즈 문장 검색(선택단어 포함여부)
export async function searchWord(str) {
  const res = await axios.get(
    `${origin}/api/auth/makeSentence/searchWord/${str}`
  );

  return res;
}

// 마인드맵 아이디로 트리즈 문장 검색 /api/auth/makeSentence/searchMindMap/{id}
export async function searchMindMapSentence(id) {
  const res = await axios.get(
    `${origin}/api/auth/makeSentence/searchMindMap/${id}`
  );

  return res;
}

// (1) 김치 검색 -> searchSentence & searchWord
// (2) mindmapid 중복 제거
// (3) 마인드맵 개별 조회

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

//마인드맵 전체조회[필요 x]
// export async function getMindMapAll() {
//   const res = await axios.get(`${origin}/api/auth/mindMap`);

//   return res;
// }

//자신의 마인드맵 전체조회
export async function getMyMindMap() {
  const res = await axios.get(`${origin}/mindMap`, {
    headers: {
      Authorization: sessionStorage.getItem("token"),
    },
  });

  return res;
}

//마인드맵 단일 조회
export async function getMindMap(mindMapId) {
  const res = await axios.get(`${origin}/api/auth/mindMap/${mindMapId}`);

  return res;
}

//patentRelation
//트리즈 문장 아이디로 관련 특허 문장 조회
export async function getPatentSentence(makeSentenceId) {
  const res = await axios.get(
    `${origin}/api/auth/patentSentence/1/${makeSentenceId}`
  );

  return res;
}

//wordRelation
//wordRelation생성
export async function createWordRelation(data) {
  const res = await axios.post(
    `${origin}/api/auth/saveWord`,
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
  //   "rootWord": "개",
  //   "word": "시츄",
  //   "weight": 10
  // }
}

//wordRelation 중복 검사
export async function CheckWordRelation(rootword, word) {
  const res = await axios.get(
    `${origin}/api/auth/wordRelation/${rootword}/${word}`
  );

  return res;
}

//word 의 연관단어 get
export async function getWordRelation(word) {
  const res = await axios.get(`${origin}/api/auth/wordRelation/${word}`);

  return res;
}

//wordRelation 가중치 업데이트

export async function updateWeight(id) {
  const res = await axios.patch(
    `${origin}/api/auth/wordRelation/${id}`,
    {},
    {
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    }
  );

  return res;

  // {
  //   "id": 1,
  //   "rootWord": "개",
  //   "word": "시츄",
  //   "weight": 10
  // }
}

//memberStar

//별점 등록
export async function createMemberStar(makeSentenceId, data) {
  const res = await axios.post(
    `${origin}/api/auth/saveMemberStar/${makeSentenceId}`,
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
  //   "starRating":5
  // }
}

//별점 업데이트
export async function updateMemberStar(makeSentenceId, data) {
  const res = await axios.patch(
    `${origin}/api/auth/patchMemberStar/${makeSentenceId}`,
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
  //   "starRating":5
  // }
}

//makeSentence의 별점 조회
export async function getStarRating(makeSentenceId) {
  const res = await axios.get(
    `${origin}/api/auth/memberStar/total/${makeSentenceId}`
  );

  return res;
}

//마인드맵 데이터 변환 함수

export function convertApiData(data) {
  let buf = [];
  let MindMapId = [];
  for (let i = 0; i < data.length; i += 2) {
    let tmp = [];
    MindMapId.push(data[i][0].mindMapEntity.id);
    data[i].forEach((e) => {
      tmp.push({
        data: {
          id: e.id,
          label: e.label,
          type: e.type,
        },
      });
    });

    data[i + 1].forEach((e) => {
      tmp.push({
        data: {
          id: e.id,
          source: e.source,
          target: e.target,
        },
      });
    });

    buf.push(tmp);
  }

  return { id: MindMapId, data: buf };
}
