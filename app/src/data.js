const newsObject = {
    "v1": {
        "news": {
            "success": true,
            "data": [
                {
                    "id": 1,
                    "title": "Релиз 1.0",
                    "images": {
                        "icon": "https://vuejs.org/images/logo.png",
                        "preview": null
                    },
                    "description": "<b>Доброго времени суток!</b><br/>Представляем релиз: <b>#1.0</b>",
                    "createdAt": "2020-04-01 12:00:00",
                    "author": {
                        "title": "Александр Репин",
                        "link": "/users/arepin"
                    }
                },
                {
                    "id": 2,
                    "title": "Релиз 1.1",
                    "images": {
                        "icon": "https://vuejs.org/images/logo.png",
                        "preview": "https://vuejs.org/images/logo.png"
                    },
                    "description": "VueJS: <img src=\"https://vuejs.org/images/logo.png\">",
                    "createdAt": "2020-04-01 13:00:00",
                    "author": {
                        "title": "Александр Репин",
                        "link": "/users/arepin"
                    }
                },
                {
                    "id": 3,
                    "title": "Релиз 2.0",
                    "images": {
                        "icon": null,
                        "preview": null
                    },
                    "description": "Доброго времени суток!</b><br/>Представляем релиз: <b>#2.0</b>",
                    "createdAt": "1009-04-01 01:00:00",
                    "author": {
                        "title": "",
                        "link": "/users/arepin"
                    }
                }
            ]
        }
            
    }
}

module.exports = {
    newsObject
}
