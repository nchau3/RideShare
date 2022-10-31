class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  private
  def session_params
    params.require(:user).permit(:email, :password)
  end
  def user_params
    params.rquire
  end

  def is_user

  end
end
