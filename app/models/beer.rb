class Beer < ActiveRecord::Base
  validates :name, :api_id, presence: true
end
