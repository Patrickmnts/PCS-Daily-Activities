# # leap year
# #  occures when year%4 == 0
# #  	EXCEPT when year%100 == 0
# #    EXCEPT when year%400 == 0

#  class Year
#  	def self.new(date)
#  		if  (date%4 == 0) && (date%100 != 0) || (date%400 === 0)(date%4 == 0) && (date%100 != 0) || (date%400 == 0)
#  			puts "Thata looka likea leap year."
#  		else
#  			puts "Sorry no leap year here!"
#  		end
#  	end
#  end

#  Year.new(1997)
#  Year.new(1996)
#  Year.new(1200)
#  Year.new(1900)


# # class Year
# # 	def initialize(year)
# # 		@year = year
# # 	end

# # 	def leap?
# # 	 (@year%4 == 0 && @year%100 != 0) || @year%400 == 0
# # 	end
# # end

# # puts Year.new(1988).leap? #true
# # puts Year.new(2811).leap? #false
# # puts Year.new(1973).leap? #true
# # puts Year.new(1764).leap? #false


