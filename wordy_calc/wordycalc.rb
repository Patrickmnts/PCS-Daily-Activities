require 'minitest/autorun'

class Calculator
  def self.input(question)
    question.match(/What is (-?\d+) (plus|minus|times|divided by) (-?\d+)?/) do |i|
      if i[2] == 'plus'
        i[1].to_i + i[3].to_i
      elsif i[2] == 'minus'
        i[1] - i[3]
      elsif i[2] == 'times'
        i[1] * i[3]
      elsif i[2] == 'divided by'
        i[1] / i[3]
      else "Cannot Compute..."
      end
  end
end

puts Calculator.input("What is 4 plus 8?")

describe Calculator do
  it "should add two numbers together" do
    expect(Calculator.input("What is 1 plus 1?")).must_equal(2)
  end end end