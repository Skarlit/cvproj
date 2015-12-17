class Api::CharactersController < ApplicationController
  def character_profile
    @template_data = InitDatum.new({}, nil, nil)
    render 'app/index'
  end
end
