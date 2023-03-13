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
# LOGIC OPERATORS: and, or, not
# regular for is actually a for-each
for i, j in enumerate(range(5)):
    # continue jumps to the next iteration
    # break exist the loop
    print("index", i, "value", j)
# while loop
i = 0
while i < 2:
    # continue jumps to the next iteration
    # break exist the loop
    print(i)
    i += 1
# if, else-if, else structure replace the switch in other languages
if False:
    pass
elif True:
    print("OK")
else:
    pass

# variable assignation by terciary operator
terc_var = "first" if True else "second"

##################
# Functions
##################


# funtion name and input parameters
def funct_example(parameter, *args, example=None, **kwargs):
    # *args accept all parameters as a tuple
    # '=' allows a default value on named input parameters
    # **kwargs accept all named parameters as a dictionary
    """
    Function description and documentation
    :return:
    """
    return "Returned Value"


# lambda functions are anonim functions
print(lambda x: x**2)


# functions are first class citizens
# ie functions can be returned by others, used as parameters and stored on variables
def my_decorator(funct_to_decorate):
    # this internal state is preserved within the internal function
    internal_state = None
    # the functions that do this are called CLOSURES

    def internal_funct(*args, **kwargs):
        return funct_to_decorate(internal_state, *args, **kwargs)
    return internal_funct()
# decorators ara a type of closures that extend the functionality of another function

##################
# Generators
##################
# generators yield a result and pauses its process saving its internal state
# Generators name and input parameters
def infinite_example(parameters):
    counter = 0
    while True:
        yield counter
        counter += 1

##################
# Classes
##################


# Declare a class and it can inherit from several parents
class ClassName(ParentClass1, ParentClass2):
    class_variable = None

    # initializer
    def __init__(self, *args, **kwargs):
        self.instance_variable = None

    def instance_method(self):
        return self.instance_variable

    @classmethod
    def class_method(cls):
        return cls.class_variable

    @staticmethod
    def static_method():
        return None
