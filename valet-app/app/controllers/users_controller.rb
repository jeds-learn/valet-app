class UsersController < ApplicationController
skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)
    p @user
    p @user.valid?
    p @user.errors

    respond_to do |format|
      if @user.save
        format.html { redirect_to "http://www.rubyonrails.org", notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :phone, :email, :is_valet)
    end
end
