# Kanban-Server ![GitHub repo size](https://img.shields.io/github/repo-size/dhyanpatel110/Kanban-Server)

## Endpoints

- AUTH API

  |     HTTP Method     | Endpoint |      Usage      |                   Body                    |
  | :-----------------: | :------: | :-------------: | :---------------------------------------: |
  | /api/v1/auth/signup |   POST   | create new user | "username", "password", "confirmPassword" |
  | /api/v1/auth/login  |   POST   |   login user    |          "username", "password"           |

- BOARD API

  |        HTTP Method        | Endpoint |           Usage           |             Body             |
  | :-----------------------: | :------: | :-----------------------: | :--------------------------: |
  |      /api/v1/boards/      |   POST   |     create new board      |      "user", "position"      |
  |      /api/v1/boards/      |   GET    |      get all boards       |                              |
  |  /api/v1/boards/:boardId  |   PUT    | update position of board  |          "position"          |
  | /api/v1/boards/favourites |   GET    |    get all favourites     |                              |
  | /api/v1/boards/favourites |   PUT    | update favourite position |     "favouritePosition"      |
  |  /api/v1/boards/:boardId  |   GET    |      get by id board      |                              |
  |  /api/v1/boards/:boardId  |   PUT    |       update board        | "title","description","icon" |
  |  /api/v1/boards/:boardId  |  DELETE  |       delete board        |           "board"            |

- SECTION API

  |                 HTTP Method                 | Endpoint |       Usage        |       Body       |
  | :-----------------------------------------: | :------: | :----------------: | :--------------: |
  |      /api/v1/boards/:boardId/sections       |   POST   | create new section |     "board"      |
  | /api/v1/boards/:boardId/sections/:sectionId |   PUT    |   update section   | "board", "title" |
  | /api/v1/boards/:boardId/sections/:sectionId |  DELETE  |   delete section   |    "section"     |

- TASK API

  |              HTTP Method              | Endpoint |      Usage      |              Body               |
  | :-----------------------------------: | :------: | :-------------: | :-----------------------------: |
  |     /api/v1/boards/:boardId/tasks     |   POST   | create new task | "sectionId","title", "position" |
  |     /api/v1/boards/:boardId/tasks     |   PUT    | update position | "sectionId","title","position"  |
  | /api/v1/boards/:boardId/tasks/:taskId |  DELETE  |   delete task   |                                 |
  | /api/v1/boards/:boardId/tasks/:taskId |   PUT    |   update task   | "sectionId","title", "content"  |
