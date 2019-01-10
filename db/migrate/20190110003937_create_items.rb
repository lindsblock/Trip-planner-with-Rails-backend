class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.belongs_to :trip, foreign_key: true
      t.string :name
      t.string :date
      t.string :category
      t.float :price
      t.string :location
      t.boolean :paid
      t.string :booked_through
      t.string :confirmation
      t.text :notes

      t.timestamps
    end
  end
end
