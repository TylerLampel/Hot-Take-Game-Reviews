class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    
    def index
        reviews = Review.all
        render json: reviews, include: :game, status: :ok
    end

    # make this return Game.all

    def create
        if params[:game_id]
            game = Game.find(params[:game_id])
            @current_user.reviews.create!(review_params)
            reviews = game.reviews
        else
            reviews = Review.all
        end
        render json: reviews, status: :created
    end

    def update
        review = @current_user.reviews.find(params[:id])
        review.update(review_params)
        render json: review
    end

    def destroy
        review = @current_user.reviews.find(params[:id])
        review.destroy
        head :no_content
    end

end
