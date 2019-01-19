class Api::TripsController < ApplicationController
  before_action :set_trip, only: [:update, :destroy, :show]

  def index
    render json: Trip.all.order(created_at: :asc)
  end

  def show
    render json: @trip
  end

  def create
    trip = Trip.create(trip_params)
    if trip.save
      render json: trip
    else
      render json: { errors: trip.errors.full_messages.join(','), status: 422 }
    end
  end

  def update
    if @trip.update(trip_params)
      render json: @trip
    else
      render json: { errors: trip.errors.full_messages.join(''), status:422 }
    end
  end

  def destroy
    @trip.destroy
  end

  private

  def trip_params
    params.require(:trip).permit(:name, :date, :id)
  end

  def set_trip
    @trip = Trip.find(params[:id])
  end

end
