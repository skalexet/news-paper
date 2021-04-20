const commentsObject = {
  "success": true,
  "data": [
    {
      "id": 1,
      "comments": [
        {
          "id": 1,
          "description": "<b>Круто!</b> Требуем новую версию!",
          "createdAt": "2020-04-02 13:22:00",
          "likes": 22,
          "dislikes": 0,
          "author": {
            "title": "Анонимный пользователь",
            "link": null
          }
        },
        {
          "id": 2,
          "description": "Дизлайк!",
          "createdAt": "2020-04-02 13:32:00",
          "likes": 0,
          "dislikes": 10,
          "author": {
            "title": "Николай Серченко",
            "link": "/users/nserchenko"
          }
        }
      ]
    },
    {
      "id": 2,
      "comments": []
    }
  ]
}

module.exports = {
    commentsObject
}

