class AuthController < ApplicationController
  def show
    cookies[:kubershop] = params[:session]

    redirect_to payment_path
  end
end
