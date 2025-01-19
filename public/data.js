 export default  {
         "games": [
            {
             "id": "gumiho-school",
             "title": "구미호 학교에 간 날",
             "thumbnail": "/public/images/thumbnails/gumiho-school_thumbnail.png",
             "scenes" : [
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
          {
             "id": "dokkebi-delivery",
             "title": "도깨비와 배달 아르바이트",
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
