n = int(input())
maps = [[0 for _ in range(101)] for _ in range(101)]

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]

for _ in range(n):
    x, y, d, g = map(int, input().split())
    directions = [d]
    for _ in range(g):
        directions += [(i+1) % 4 for i in directions[::-1]]

    maps[y][x] = 1
    for dir in directions:
        x, y = x + dx[dir], y + dy[dir]
        maps[y][x] = 1

result = 0
for i in range(100):
    for j in range(100):
        if maps[i][j] and maps[i+1][j] and maps[i][j+1] and maps[i+1][j+1]:
            result += 1

print(result)
