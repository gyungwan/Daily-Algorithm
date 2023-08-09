def solution(order):
    stack = []  # 보조 컨테이너 벨트를 표현하는 스택
    order_idx = 0  # 택배 기사님이 원하는 순서의 상자를 가리키는 인덱스
    count = 0  # 트럭에 실은 상자의 수
    
    # 주 컨테이너 벨트 상자 처리
    for box in range(1, len(order) + 1):
        if box == order[order_idx]:  # 현재 상자가 택배 기사님이 원하는 순서의 상자와 같다면
            count += 1
            order_idx += 1
        else:
            stack.append(box)
        
        # 보조 컨테이너 벨트(스택) 상자 처리
        while stack and stack[-1] == order[order_idx]:  # 스택의 마지막 상자가 택배 기사님이 원하는 순서와 같다면
            stack.pop()
            count += 1
            order_idx += 1
    
    return count
