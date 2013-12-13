class BeerController < ApplicationController
  def search
    encoded = URI.encode(params[:name])
    url = "http://api.brewerydb.com/v2/search?key=4145e4b2fa348277850d53216d0bd863&q=#{encoded}&type=beer"
    response = HTTParty.get(url)
    parsed = JSON(response)
    render text: parsed
  end
end