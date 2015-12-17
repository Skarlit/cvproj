class CreateCharInfos < ActiveRecord::Migration
  def change
    create_table :char_infos do |t|
      t.string :name
      t.text :thumb_url
      t.boolean :gender

      t.timestamps null: false
    end
  end
end
