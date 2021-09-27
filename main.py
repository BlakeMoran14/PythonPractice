def greaterThan10(x):
    if (x > 10):
        return True
    if (x < 10):
        return False
    else:
        return "The input was: 10"

print(greaterThan10(10))

def potato(x, y):
    if (x + y) > 10:
        return "potato"
    if (x + y) == 10:
        return "tomato"
    if (x + y) < 10:
        return "topato"