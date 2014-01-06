class Beer < ActiveRecord::Base
  validates :name, :api_id, presence: true

  has_many :favorites
  has_many :users, through: :favorites
end
