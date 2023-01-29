class GamesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        games = Game.all.order("title")
        render json: games, include: :reviews, status: :ok
    end

    def create
        @current_user
        game = Game.create!(game_params)
        render json: game, status: :created
    end

    def destroy
        game = Game.find(params[:id])
        game.destroy
        head :no_content
    end

    private

    def game_params
        params.permit(:title, :image_url, :age_rating, :description)
    end

    def render_not_found_response
        return render json: { error: "Game not found"}, status: :not_found
    end
end
