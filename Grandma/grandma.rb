#in order to pass test suite comment out
#lines 14-15
# and change 'puts' on 11 & 13 to 'return'

class Grandma
	def self.talk_to(words)
		while words != 'BYE'
			conversation(words)
			words = gets.chomp
		end
	end

  def self.conversation(words)
  	if words == 'BYE'
  		return
		elsif words == words.upcase
			year = rand(1920..1980)
			puts "NO, NOT SINCE #{year}"
		else
			puts "HUH?! SPEAK UP, SONNY!"
		end
  end
end