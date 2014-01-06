class User < ActiveRecord::Base
  validates :email, :password_digest, presence: true

  has_many :favorites
  has_many :beers, through: :favorites

  has_secure_password
end
