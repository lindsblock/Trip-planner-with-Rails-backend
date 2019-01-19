class CreateFlights < ActiveRecord::Migration[5.1]
  def change
    create_table :flights do |t|
      t.belongs_to :trip, foreign_key: true
      t.string :airline
      t.string :destination
      t.string :origin
      t.string :departs
      t.string :arrives
      t.boolean :layover
      t.integer :confirmation
      t.string :notes
      t.float :price

      t.timestamps
    end
  end
end
