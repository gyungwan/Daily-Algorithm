def solution(n):
    answer = 0
    for i in range(n+1):
        if  i % 2 == 0 and n % 2 == 0:
            answer += i*i
            print("i answer",i, answer)
        elif i % 2 == 1 and n % 2 ==1:
            answer += i    
    return answer