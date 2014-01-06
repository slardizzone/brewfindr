module SessionsHelper

  def logged_in?
    session[:user_id].present?
  end

  def authenticated!
    unless logged_in?
      redirect_to new_session_path
    end
  end

  def current_user
    @current_user ||= User.find(session[:user_id])
  end
  
end