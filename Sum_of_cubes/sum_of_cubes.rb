#sum of cubes
#
# add up the cubes to the input given
# RECURSION!

def sum_of_cubes(number)
	#Base Case - the simplest form our problem can take.
	if number == 1
		return 1
  else
  #Reconstruction - here we rebuild!!!
  	sum = number**3 + sum_of_cubes(number - 1)
  	return sum
	end
end

puts sum_of_cubes(3)
puts sum_of_cubes(8)
puts sum_of_cubes(18)
puts sum_of_cubes(80)