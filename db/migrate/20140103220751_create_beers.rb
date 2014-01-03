class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string "name", null: false
      t.string "api_id", null: false
      t.timestamps
    end
  end
end
