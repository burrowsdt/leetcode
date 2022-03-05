# Project Euler Problem 2 - Even Fibonacci Numbers

def even_odd_test(num):
    if num % 2 == 0:
        return "even"
    else:
        return "odd"

def fibonacci_sum(max, type):
    numTracker = [1, 2, 3]
    runningTotal = 0
    maxHit = False

    if type == "even":
        runningTotal += 2
    elif type == "odd":
        runningTotal += 4

    while maxHit == False:
        numTracker.append(numTracker[1]+numTracker[2])
        numTracker.pop(0)
        if numTracker[2] > max:
            maxHit = True
            continue
        if even_odd_test(numTracker[2]) == type:
            runningTotal += numTracker[2]

    return runningTotal

# Tests
# print(fibonacci_sum(4000000, "even"))
print(fibonacci_sum(100, "odd"))