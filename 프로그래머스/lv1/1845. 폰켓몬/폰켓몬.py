def solution(nums):
    setArr = len(set(nums))
    print(setArr,  len(nums) // 2)
    return min(setArr, len(nums) // 2)

