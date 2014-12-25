require 'sinatra'
require 'haml'

class App < Sinatra::Base
  
  disable :run

  get '/' do
    haml :index
  end

end