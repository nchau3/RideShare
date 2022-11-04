class Api::UsersController < ApplicationController
  skip_before_action :authenticate, :only => [:create, :is_user, :destroy, :index, :show, :update]

  def show
    @users = User.where(id: params[:id]).map {|user|
    {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password_digest: user.password_digest,
      avatar: user.avatar,
      token: user.token
    }
  }
    render json: @users
  end

  def is_user
    user = User.find_by(email: session_params[:email])
    if user && user.authenticate(session_params[:password])
      user.generate_token
      render :json => {
        token: user.token,
        user_id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        status: 200
      }
    else
      render :json => { 
        status: 401,
        errors: ['no such user', 'verify credentials and try again or signup']
      }
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      user.generate_token
      render :json => {
        token: user.token,
        user_id: user.id,
        status: 201
      }
    else
      render :json => {
        status: 401,
        errors: ['Validation failed, check if exists, or password length']
      }
    end
  end

  def update
    puts "id from params: #{params[:id]}"
    user = User.find(params[:id])
    if user.id 
      user.update(password_param)
      puts "password changed!!!!!"
      render :json => {
        status: 201
      }
    end
  end

  private
  def session_params
    params.require(:user).permit(:email, :password)
  end
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
   end
  def password_param
    params.permit(:password)
  end

 
end
