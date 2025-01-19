export default {
  "games": [
    {
      "id": "gumiho-school",
      "title": "구미호 학교에 간 날",
      "description": "여우 친구들이 가득한 학교에서 펼쳐지는 신비로운 이야기!",
      "thumbnail": "/public/images/thumbnails/gumiho-school_thumbnail.png",
      "scenes": [
        {
          "id": "scene1",
          "text": "학교에 도착하니 모든 학생들이 여우처럼 생겼어요!",
          "image": "/public/images/backgrounds/gumiho-school.png",
          "options": [
            {
              "text": "용기내서 인사하기",
              "nextSceneId": "scene2"
            },
            {
              "text": "조용히 구석에서 관찰하기",
              "nextSceneId": "scene3"
            }
          ]
        },
        {
          "id": "scene2",
          "text": "친구들이 반갑게 인사를 받아주었어요. 첫 수업은...",
          "image": "/public/images/backgrounds/gumiho-classroom.png",
          "options": [
            {
              "text": "변신 마법 배우기",
              "nextSceneId": "scene4"
            },
            {
              "text": "꼬리 다루기 수업",
              "nextSceneId": "scene5"
            }
          ]
        }
      ]
    },
    // ... 나머지 게임들도 동일한 형식으로 정리 ...
  ]
}
     {
         "id": "dokkebi-delivery",
           "title": "도깨비와 배달 아르바이트",
            "description" : "도깨비가 되어 배달 아르바이트를 해보는 짜릿한 경험!",
           "thumbnail": "/public/images/thumbnails/dokkebi-delivery_thumbnail.png",
           "scenes" : [
             {
                 "id": "scene1",
                   "text": "도깨비 배달 앱으로 첫 주문이 들어왔어요!",
                  "image": "/public/images/backgrounds/dokkebi.png",
                   "options": [
                     {
                           "text": "도깨비방망이로 순간이동 배달하기",
                           "nextSceneId": "scene2"
                      },
                     {
                          "text": "일반 배달로 안전하게 가기",
                           "nextSceneId": "scene3"
                       }
                        ]
                   },
                  {
                    "id": "scene2",
                     "text": "순간이동에 실패해서 엉뚱한 곳에 떨어졌어요!",
                      "image": "/public/images/backgrounds/wrong-delivery.png",
                    "options": [
                         {
                             "text": "도깨비 선배에게 도움 요청하기",
                             "nextSceneId": "scene4"
                          },
                           {
                            "text": "혼자서 해결해보기",
                             "nextSceneId": "scene5"
                             }
                        ]
                      }
                ]
            },
           {
             "id": "dragon-brother",
             "title": "용으로 변신한 우리 오빠",
               "description": "어느 날 갑자기 용으로 변신한 오빠의 비밀을 파헤쳐 보세요!",
                "thumbnail": "/public/images/thumbnails/dragon-brother_thumbnail.png",
                "scenes": [
                   {
                       "id": "scene1",
                         "text": "오빠의 방에서 이상한 빛이 새어나와요!",
                        "image": "/public/images/backgrounds/brother-room.png",
                         "options": [
                             {
                              "text": "문을 두드리기",
                                "nextSceneId": "scene2"
                           },
                           {
                               "text": "몰래 들어가보기",
                               "nextSceneId": "scene3"
                           }
                           ]
                         }
                    ]
                 },
             {
                 "id": "ai-cinderella",
                 "title": "AI로봇과 신데렐라",
                    "description": "AI 로봇이 된 신데렐라와 함께 특별한 모험을 떠나 보세요!",
                   "thumbnail": "/public/images/thumbnails/ai-cinderella_thumbnail.png",
                   "scenes": [
                       {
                          "id": "scene1",
                          "text": "새로 산 AI 청소 로봇이 말을 해요!",
                            "image": "/public/images/backgrounds/modern-house.png",
                          "options": [
                             {
                               "text": "로봇과 대화하기",
                              "nextSceneId": "scene2"
                           },
                           {
                               "text": "전원 끄기",
                                "nextSceneId": "scene3"
                           }
                        ]
                          }
                     ]
                   },
               {
                 "id": "metaverse-snowwhite",
                   "title": "메타버스 속 백설공주",
                   "description" : "메타버스에서 백설공주와 함께 흥미진진한 게임을 즐겨봐요!",
                    "thumbnail": "/public/images/thumbnails/metaverse-snowwhite_thumbnail.png",
                    "scenes": [
                        {
                           "id": "scene1",
                         "text": "VR 게임 속에서 백설공주를 만났어요!",
                          "image": "/public/images/backgrounds/metaverse-forest.png",
                        "options": [
                               {
                               "text": "같이 게임하자고 제안하기",
                              "nextSceneId": "scene2"
                               },
                                {
                                   "text": "도움이 필요한지 물어보기",
                                   "nextSceneId": "scene3"
                               }
                             ]
                        }
                     ]
                },
                 {
                     "id": "youtuber-mermaid",
                     "title": "유튜버가 된 인어공주",
                     "description": "인어공주가 유튜버가 되었어요! 구독하고 좋아요를 눌러주세요!",
                     "thumbnail": "/public/images/thumbnails/youtuber-mermaid_thumbnail.png",
                      "scenes": [
                          {
                             "id": "scene1",
                          "text": "인어공주의 브이로그 채널을 발견했어요!",
                          "image": "/public/images/backgrounds/underwater-studio.png",
                              "options": [
                                {
                                     "text": "구독하고 댓글 달기",
                                     "nextSceneId": "scene2"
                                },
                                {
                                    "text": "영상 끝까지 보기",
                                   "nextSceneId": "scene3"
                                }
                              ]
                          }
                        ]
                 },
                 {
                     "id": "plastic-witch",
                       "title": "플라스틱 섬의 마녀",
                        "description": "플라스틱 쓰레기 섬에서 만난 마녀와 함께 지구를 지켜요!",
                         "thumbnail": "/public/images/thumbnails/plastic-witch_thumbnail.png",
                         "scenes": [
                           {
                             "id": "scene1",
                               "text": "바다에 떠다니는 플라스틱으로 가득한 섬이에요!",
                                "image": "/public/images/backgrounds/plastic-island.png",
                                "options": [
                                 {
                                   "text": "마녀와 함께 청소하기",
                                    "nextSceneId": "scene2"
                               },
                                  {
                                  "text": "재활용 마법 배우기",
                                      "nextSceneId": "scene3"
                                    }
                                 ]
                            }
                          ]
                 },
                {
                     "id": "dust-alice",
                     "title": "미세먼지 나라의 앨리스",
                      "description": "미세먼지 가득한 이상한 나라에서 앨리스를 도와주세요!",
                      "thumbnail": "/public/images/thumbnails/dust-alice_thumbnail.png",
                     "scenes": [
                         {
                           "id": "scene1",
                            "text": "회색 안개 속에서 하얀 토끼를 발견했어요!",
                              "image": "/public/images/backgrounds/dusty-wonderland.png",
                           "options": [
                                 {
                                   "text": "토끼를 따라가기",
                                    "nextSceneId": "scene2"
                                },
                               {
                                 "text": "마스크 쓰고 기다리기",
                                     "nextSceneId": "scene3"
                                  }
                                ]
                          }
                        ]
                },
                  {
                     "id": "global-warming-red",
                      "title": "지구온난화와 빨간모자",
                    "description": "더워진 숲 속에서 빨간모자를 도와 할머니를 찾아주세요!",
                      "thumbnail": "/public/images/thumbnails/global-warming-red_thumbnail.png",
                      "scenes": [
                          {
                              "id": "scene1",
                               "text": "너무 더워진 숲속에서 할머니 댁을 찾아가요.",
                               "image": "/public/images/backgrounds/hot-forest.png",
                                "options": [
                                    {
                                      "text": "에어컨 없는 지름길로 가기",
                                     "nextSceneId": "scene2"
                                 },
                                 {
                                      "text": "시원한 그늘길로 가기",
                                      "nextSceneId": "scene3"
                                  }
                                 ]
                             }
                          ]
                    },
                  {
                        "id": "moonlight-hanbok",
                        "title": "달빛 한복과 금도끼",
                         "description": "달빛 아래 펼쳐지는 아름다운 한복과 금도끼 이야기!",
                        "thumbnail": "/public/images/thumbnails/moonlight-hanbok_thumbnail.png",
                      "scenes": [
                         {
                             "id": "scene1",
                           "text": "달빛에 비친 연못에서 반짝이는 것을 발견했어요!",
                            "image": "/public/images/backgrounds/moonlit-pond.png",
                          "options": [
                               {
                                 "text": "연못 속으로 들어가보기",
                                   "nextSceneId": "scene2"
                                },
                                {
                                     "text": "산신령을 기다리기",
                                    "nextSceneId": "scene3"
                                }
                              ]
                            }
                        ]
                   },
                 {
                    "id": "sunmoon-game",
                      "title": "해님달님 게임대회",
                     "description": "해님과 달님이 펼치는 스릴 넘치는 e스포츠 게임 대회!",
                    "thumbnail": "/public/images/thumbnails/sunmoon-game_thumbnail.png",
                   "scenes": [
                        {
                          "id": "scene1",
                           "text": "해님달님이 개최하는 e스포츠 대회예요!",
                           "image": "/public/images/backgrounds/celestial-stadium.png",
                          "options": [
                                 {
                                   "text": "해님 팀으로 참가하기",
                                    "nextSceneId": "scene2"
                              },
                              {
                                   "text": "달님 팀으로 참가하기",
                                    "nextSceneId": "scene3"
                                }
                             ]
                           }
                       ]
                 },
              {
                 "id": "vr-simcheong",
                   "title": "심청이의 VR 여행",
                   "description": "VR 세계에 간 심청이와 함께 신나는 바닷속 여행을 떠나요!",
                  "thumbnail": "/public/images/thumbnails/vr-simcheong_thumbnail.png",
                  "scenes": [
                    {
                       "id": "scene1",
                          "text": "심청이가 VR 안경을 써보더니 바다 속으로 들어가려해요!",
                          "image": "/public/images/backgrounds/vr-ocean.png",
                        "options": [
                              {
                                 "text": "말리기",
                                   "nextSceneId": "scene2"
                            },
                              {
                                  "text": "함께 가기",
                                  "nextSceneId": "scene3"
                              }
                           ]
                          }
                        ]
                     }
                  ]
               }
