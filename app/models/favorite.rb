class Favorite < ActiveRecord::Base
  validates_uniqueness_of :user_id, :scope => :beer_id

  belongs_to :user
  belongs_to :beer
end