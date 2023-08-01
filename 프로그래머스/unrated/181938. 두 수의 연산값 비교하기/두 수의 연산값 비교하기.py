def solution(a, b):
    str1 = str(a) + str(b)
    num1 = 2 * a * b
    if int(str1) > num1:
        return int(str1)
    elif int(str1) == num1:
        return int(str1)
    else:
        return num1  
    