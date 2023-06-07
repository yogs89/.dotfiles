def wow(x):
    if x < 2:
        return wow(x)
    else:
        return wow(x-2) + 3*wow(x-1)
print(wow(8))