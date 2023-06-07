def wow(x):
    if x < 2:
        return x
    else:
        return wow(x-2) + 3*wow(x-1)
print(wow(8))
