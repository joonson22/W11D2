class Api::PokemonController < ApplicationController
  def show 
    @poke = Pokemon.find(params[:id])
    render :show
  end

  def index
    @pokemon = Pokemon.all
    render :index
  end

  def create
    @poke = Pokemon.find(params[:id])
    # if @poke.save

  end

  private

  # def pokemon_params
  #   params.require(:pokemon).permit
  # end
end
