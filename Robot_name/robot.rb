# When robots come off the factory floor, they have no name.

# The first time you boot them up, a random name is generated, such as RX837 or BC811.

# In other words, if I say:
# puts "Robot 1: "
# robot1 = Robot.new
# puts robot1.name
# puts robot1.name
# puts robot1.name

# puts "Robot 2: "
# robot2 = Robot.new
# puts robot2.name
# puts robot2.name
# puts robot2.name
# then robot1 will print the same name 3 times, and robot2 will not have the same name as robot1.

# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped.
# The next time you ask, it gets a new name.

# if I say:

# puts "Robot 3: "
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.name
# puts robot3.name
# then robot3 will have the same name twice, then we'll get the reset message, then it will get a new name,
# and print it twice.

# All robots have a mac address. The mac address never changes, even if you reset it to factory settings.

class Robot
  def name()
    names = ['AB123','CD456','GH769']
    name = names[rand(0..2)]
  end

  def prefix
    ('A'..'z').to_a.shuffle
  end

  def suffix

  end

  def reset


  end



end










