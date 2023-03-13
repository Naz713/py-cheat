##################
# Lists
##################
# empty and false
e_list = []
# initialized declaration
list_one = [1, 2, 3, 4, 5, 6]
# lenhgt of a list
len(list_one)
# update
list_one[3] = 67
# delete
# by index
del list_one[1]
# and returns it
list_one.pop(4)
# by value
list_one.remove(5)
# slicing-> start:stop:step
# negative are taken as module of the list length
sublist = list_one[2:-2:2]
# sorting
##########
# in place
list_one.sort(reverse=False)
# return it
sorted_list = sorted(list_one)

##################
# Tuples
##################
# empty and false
e_tuple = ()
# initialized declaration
tuple_one = (1, 2, 3, 4, 5, 6)
# lenhgt of a tuple
len(tuple_one)
# TUPLES can not be updated after creation
# ie tuples are immutables

# list to tuple
tuple_two = tuple(list_one)
# tuple to list
list_two = list(tuple_one)

# ZIP
# make multidimensional tuple from other iterators
zip(tuple_one, list_one, tuple_two, list_two)

##################
# String
##################
# empty string and false
e_string = ''
# initialized
str_one = 'this is an initialized string'
# string to list of strings
str_list = str_one.split(sep=' ')
# list of string to one sinlge string
'_'.join(str_list)

# Formatting Strings
str_pl1 = "First placeholder: %s Second placeholder %s" % ("example1", "example2")
str_pl2 = "First placeholder: {} Second placeholder {}".format("example1", "example2")
str_pl3 = "First placeholder: {first} Second placeholder {second}".format(first="example1", second="example2")
# fStrings
f_string = f'A list of previous examples:\n{str_pl1}\n{str_pl2}\n{str_pl3}'

# Check if substring is in string
str_pl1.startswith("First")
str_pl1.startswith("example2")
if "list" in f_string:
    print("OK")

##################
# Dictionary
##################
# empty and false
e_dict = {}
# initialized declaration
dict_one = {"one": 1, "two": 2, "three": 3, "four": 4}
# lenhgt of a dictionary
len(dict_one)

# get value of a key
# raise an error if the key is wrong
dict_one["three"]
# returns a None or specified default value
dict_one.get("five", 5)
# update
# raise an error if the key is wrong
dict_one["three"] = 67
# gets the value but if it does not exist sets it to a value
dict_one.setdefault("five", 5)

# delete
del dict_one["one"]

##################
# Loops and conditionals
##################
# regular for is actually a for-each
for i in range(3):
    print(i)
i=0
while i < 2:
    print(i)
    i += 1


