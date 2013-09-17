get '/' do
  @grandma = params[:grandma]
  erb :index
end
 
 
post '/grandma' do
 
  @input = params[:user_input]
 
  if @input == @input.upcase
    @grandma = "Not since 1834."   
  else
    @grandma = "Speak up kiddo."
  end
  if request.xhr?
    erb :_grandma_says, layout: false
  else 
    redirect to("/?grandma=#{@grandma}")
  end
end
