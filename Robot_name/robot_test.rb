require 'minitest/autorun'
require './robot.rb'


class RobotTest < MiniTest::Unit::TestCase
  def test_robot_has_name
    assert_match /[a-z]{2}[0-9]{3}/, Robot.new.name, 'Robot did not have a matching name.'
  end






end