def multiples_of(multiple1, multiple2, max):
    runningTotal = 0
    for num in range(max):
        if num % multiple1 == 0 or num % multiple2 == 0: runningTotal += num
    return runningTotal

print(multiples_of(3, 5, 8456))
