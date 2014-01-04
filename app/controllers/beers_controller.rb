class BeersController < ApplicationController

  def index

  end

  def show
    url = "http://api.brewerydb.com/v2/beer/#{params[:id]}/?key=4145e4b2fa348277850d53216d0bd863"
    response = HTTParty.get(url)
    parsed = JSON(response)
    render json: parsed
  end

   def create
    @beer = Beer.new(beer_params)

    if @beer.save
      render json: @beer
    else
      render json: @beer.errors, status: :unprocessable_entity
    end
  end
  
  def search
    encoded = URI.encode(params[:name])
    url = "http://api.brewerydb.com/v2/search?key=4145e4b2fa348277850d53216d0bd863&q=#{encoded}&type=beer"
    response = HTTParty.get(url)
    parsed = JSON(response)
    render text: parsed
  end

  def style
    encoded = URI.encode(params[:style_id])
    url = "http://api.brewerydb.com/v2/beers?key=4145e4b2fa348277850d53216d0bd863&styleId=#{encoded}"
    response = HTTParty.get(url)
    parsed = JSON(response)
    render json: parsed
  end

  private 

  def beer_params
    params.permit(:name, :api_id)
  end

end

