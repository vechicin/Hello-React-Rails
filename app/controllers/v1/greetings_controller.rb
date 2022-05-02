class V1::GreetingsController < ApplicationController
  def index
    random = rand(Greeting.count) + 1
    @greeting = Greeting.find(random)
  end
end