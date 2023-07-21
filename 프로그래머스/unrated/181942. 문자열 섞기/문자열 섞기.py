def solution(str1, str2):
    answer = ''
    for i,str3 in  enumerate(str1):
        answer += str3
        answer += str2[i]
    return answer