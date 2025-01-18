export default  {
    "games": [
        {
            "id": "gumiho-school",
            "title": "구미호 학교에 간 날",
            "thumbnail": "/public/images/thumbnails/gumiho-school_thumbnail.png",
            "scenes" : [
              {
                "id": "scene1",
                    "text": "학교에 도착하니...",
                    "image": "/images/backgrounds/gumiho-school.png",
                        "options": [
                            {
                                "text": "인사하기",
                                "nextSceneId": "scene2"
                            },
                            {
                                "text": "숨어서 관찰",
                                "nextSceneId": "scene3"
                            }
                        ]
              },
             ]
           },
        {
            "id": "dokkebi-delivery",
            "title": "도깨비와 배달 아르바이트",
            "thumbnail": "/public/images/thumbnails/dokkebi-delivery_thumbnail.png",
            "scenes" : [
              {
                "id": "scene1",
                    "text": "알바를 시작했는데...",
                    "image": "/images/backgrounds/dokkebi.png",
                         "options": [
                            {
                                "text": "배달하기",
                                "nextSceneId": "scene2"
                            },
                            {
                                "text": "농땡이",
                                "nextSceneId": "scene3"
                            }
                        ]
                },
             ]
       }
     ]
}
