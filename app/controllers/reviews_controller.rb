class ReviewsController < ApplicationController
    skip_before_action :authorize
    
    def index
        reviews = Review.all
        render json: reviews, status: :ok
    end

    def show
        review = @current_user.reviews.find(params[:id])
        render json: review
    end

    def create
        review = @current_user.reviews.create!(review_params)
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
        params.permit(:title, :body, :rating)
    end
end
