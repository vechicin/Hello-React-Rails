class V1::GreetingsController < ApplicationController
  def index
    random = rand(5)
    render json: {
      greeting: a_random_greeting(random)
    }.to_json
  end

  private

  def a_random_greeting(num)
    greetings = ['First greeting', 'Second greeting', 'Third greeting', 'Fourth greeting', 'Fifth greeting']
    greetings[num]
  end
end
