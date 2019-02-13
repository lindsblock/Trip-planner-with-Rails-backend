class Api::FlightsController < ApplicationController
  before_action :set_flight, only: [:update, :destroy, :show]

  def index
    render json: Flight.all.order(created_at: :asc)
  end

  def show
    render json: @flight
  end

  def create
    flight = Flight.create(flight_params)
    if flight.save
      render json: flight
    else
      render json: {errors: flight.errors.full_messages.join(','), status: 422 }
    end
  end

  def update
    if @flight.update(flight_params)
      render json: @flight
    else
      render json: {errors: flight.errors.full_messages.join(','), status: 422 }
    end
  end

  def destroy
    @flight.destroy
  end

  private

  def flight_params
    params.permit(:airline, :trip_id, :id)
  end

    def set_flight
      @flight = Flight.find(params[:id])
    end

end
