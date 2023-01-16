class ReviewsController < ApplicationController
    skip_before_action :authorize
    
    def index
        if params[:game_id]
            game = Game.find(params[:game_id])
            reviews = game.reviews
        else
            reviews = Review.all
        end
        render json: reviews, include: :game, status: :ok
    end

    def show
        review = @current_user.reviews.find(params[:id])
        render json: review
    end

    def create
        game = Game.find(params[:game_id])
        review = game.reviews.create!(review_params)
        render json: review, status: :created
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
    
    private 

    def review_params
        params.permit(:title, :body, :rating, :game_id)
    end
end
