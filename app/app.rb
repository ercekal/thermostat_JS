ENV["RACK_ENV"] ||= "development"
require 'sinatra/base'
require_relative 'data_mapper_setup'

class MyApp < Sinatra::Base

  set :public_folder, File.dirname(__FILE__) + '/public'
  
  get '/' do
    erb :index
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
