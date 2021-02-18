# Conway's Game of Life

### How to start?

1. Copy `.env.example` and rename it to `.env`. Fill environment variables.

2. Install packages and run application.
```
npm install
npm run dev
```

### Request

1. generate first state array (method: get)

```api/game-states?rowCount=:rowCount&colCount=:colCount```

2. generate new state array from prior state array (method: post)

```api/game-states?rowCount=:rowCount&colCount=:colCount```

- Request type
    ```
    {
        "data": [
            [ 0, 1, 1, 1 ],
            [ 0, 0, 0, 0 ],
            [ 1, 0, 0, 0 ],
            [ 0, 1, 1, 1 ]
        ]
    }
    ```

- Response type
    ```
    {
        "data": [
            [ 0, 0, 1, 0 ],
            [ 0, 1, 1, 0 ],
            [ 0, 1, 1, 0 ],
            [ 0, 1, 1, 0 ]
        ]
    }
    ```

- 0: Dead cell
- 1: Live cell
