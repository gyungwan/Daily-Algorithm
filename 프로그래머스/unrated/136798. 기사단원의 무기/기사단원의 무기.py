def solution(n, limit, power):
    divisors_count = [0] * (n + 1)
    for i in range(1, n + 1):
        for j in range(i, n + 1, i):
            divisors_count[j] += 1

    answer = 0
    for count in divisors_count:
        if count > limit:
            answer += power
        else:
            answer += count

    return answer
