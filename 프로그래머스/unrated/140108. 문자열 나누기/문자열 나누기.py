def solution(s):
    x = ""
    count1=0
    count2=0
    answer = 0
    for i in s:
        
        if x == "":
            x = i
            count1 = 1
            continue
        if x == i:
            count1 +=1
        else:
            count2 +=1
        if count1 == count2:
            x = ""
            count1=0
            count2=0
            answer += 1
            
    if x != "":
        answer +=1
        
    return answer