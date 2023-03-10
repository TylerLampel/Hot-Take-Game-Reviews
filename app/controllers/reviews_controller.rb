class ReviewsController < ApplicationController

    def create
        if params[:game_id]
            game = Game.find(params[:game_id])
            review = @current_user.reviews.create!(review_params)
            render json: review, include: :user, status: :created

        else
            reviews = Review.all
            render json: reviews, status: :created
        end
        
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
