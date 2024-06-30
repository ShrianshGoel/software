cost=0
days=0
bookname,iscode=0,0
bookname=input("Enter bookname\n")
iscode=input("Enter iscode\n")
days=input("Enter no of days borrowed \n")
days=int(days)
if days>5 and days<11:
    cost=days-5*100
elif days>10 and days<16:
    cost=500+((days-10)*200)
elif days>15:
    cost=500+2000+(days-15)*500
print("Cost is %s"%cost)








