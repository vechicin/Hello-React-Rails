class GreetingsController < ApplicationController
  def greeting
    random = rand(Greeting.count) + 1
    @greeting = Greeting.find(random)
  end
end