require './grandma.rb'
require 'rspec'

describe Grandma do

	it "should yell if she cant hear." do
		Grandma.conversation('hi').should eq('HUH?! SPEAK UP, SONNY!')
	end

	it "Should reference a flash back if upcase" do
		Grandma.conversation('HI').should include('NO, NOT SINCE ')
	end
end