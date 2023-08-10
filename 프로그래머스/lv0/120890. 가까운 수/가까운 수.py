def solution(array, n):
    minNum = float('inf')  # 초기에는 무한대로 설정
    answer = 0
    for i in array:
        target =abs(n - i)
        # if minNum > target:
        #     minNum = target
        #     answer =i
 # 차이가 같은 경우 더 작은 수를 선택해야 하므로
        # 이전에 저장된 answer보다 현재 값 i가 작아야 합니다.
        if target < minNum or (target == minNum and i < answer):
            minNum = target
            answer = i
            
    return answer