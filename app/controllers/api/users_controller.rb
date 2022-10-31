class Api::UsersController < ApplicationController
  skip_before_action :authenticate, :only => [:create, :is_user, :destroy, :index]


  def index
    @users = User.all
    render json: @users
  end

  private
  def session_params
    params.require(:user).permit(:email, :password)
  end
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
.  end

  def is_user

  end
end
