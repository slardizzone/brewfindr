class FavoritesController < ApplicationController

  def create 
    user = session[:user_id]
    beer = Beer.find_by(api_id: favorite_params["beer_id"]).id

    @favorite = Favorite.new(user_id: user, beer_id: beer)

    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  def show
    user = session[:user_id]
    beer = Beer.find_by(api_id: beer_params["id"]).id
    @favorite = Favorite.find_by(user_id: user, beer_id: beer)
    render json: @favorite
  end

private 

  def favorite_params
    params.permit(:beer_id)
  end

  def beer_params
    params.permit(:id)
  end

end



