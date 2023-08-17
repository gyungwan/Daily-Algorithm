def solution(X, Y):
    # 각 숫자의 빈도를 계산하는 함수
    def get_freq(s):
        freq = {}
        for char in s:
            if char in freq:
                freq[char] += 1
            else:
                freq[char] = 1
        return freq

    freq_X = get_freq(X)
    freq_Y = get_freq(Y)

    # 공통 숫자의 최소 빈도를 구하는 부분
    common_digits = []
    for digit, count in freq_X.items():
        if digit in freq_Y:
            common_count = min(count, freq_Y[digit])
            common_digits.extend([digit] * common_count)

    # 결과 문자열을 내림차순으로 정렬
    common_digits.sort(reverse=True)
    
    # 결과가 비어 있지 않다면 문자열로 반환, 그렇지 않으면 "-1" 반환
    result = ''.join(common_digits)
    return '0' if set(result) == {'0'} else result if result else "-1"
