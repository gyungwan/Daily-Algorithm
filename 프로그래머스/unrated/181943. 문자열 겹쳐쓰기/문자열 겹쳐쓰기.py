def solution(my_string, overwrite_string, s):
    result = ''
    start_index = s
    end_index = s + len(overwrite_string)
    print( my_string[:start_index] )
#     슬라이싱 하여서 문자열의 인덱스 값으로 원하는 길이만큼 추출 가능 
    result = my_string[:start_index] + overwrite_string + my_string[end_index:]
    return result

  