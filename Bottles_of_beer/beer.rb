class Beer
	 def song(bottles=99, drink= Beer)
	 	bottles.downto(2) do |num_of_drinks|
	  puts verse(num_of_drinks, drink)
	  puts " "
	 end

	def verse(num_of_drinks, drink)
	  puts "#{num_of_drinks} bottles of #{drink} on the wall, #{num_of_drinks} bottles of #{drink}."
	  puts "Take one down, pass it around, #{num_of_drinks -= 1} on the wall."
	  puts " "
	end

	def last_verse(drink)
	  puts "No more bottles of #{drink} on the wall, no more bottles of #{drink}."
	  puts "Go to the store, pick up some more, 99 bottles of #{drink} on the wall."
	end
end