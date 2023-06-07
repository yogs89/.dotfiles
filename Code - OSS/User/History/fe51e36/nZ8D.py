def wow (x):
    if x<2:
        wow x
    else:
        wow:=wow (x-2)+3*wow(x-1)
main(
    wow(8)
)