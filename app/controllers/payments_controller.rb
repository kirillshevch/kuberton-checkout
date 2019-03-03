class PaymentsController < ApplicationController
  def show
  end

  def create
    create_params = card_params
    request = HTTP.post('http://localhost:3002/validation', json: { credit_card: create_params })
    if request.status.ok?
      Transaction.create(
        order_id: session[:order][:id],
        completed: true
      )
      session[:order][:completed] = true
      render partial: 'order_complete'
    else
      redirect_to card_path, flash: { error: 'Card Invalid' }
    end
  end

  private

  def card_params
    params.permit(:number, :month, :year, :cvv)
  end
end
