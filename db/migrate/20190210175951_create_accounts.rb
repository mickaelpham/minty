class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :number
      t.references :bank, foreign_key: true
      t.integer :kind, index: true

      t.timestamps
    end
  end
end
