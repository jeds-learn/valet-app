class UsersController < ApplicationController
skip_before_action :verify_authenticity_token
before_action :authenticate_user!, except: [:create, :get_valet]


  def create
    @user = User.new(user_params)


    respond_to do |format|
      if @user.save
        sign_in(@user)
        format.json { render json: @user, status: :created}
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def get_valet
    @users = User.where(is_valet: true)
    render :json => @users
  end

  def get_a_valet
    @valet = User.find(params[:id])
    render :json => @valet
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:company_name, :address, :city, :state, :zip, :opening_time, :closing_time, :cost_per_hour, :first_name, :last_name, :phone, :email, :is_valet, :password, :password_confirmation, :long, :lat)
    end


end
