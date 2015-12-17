class AppController < ApplicationController
  def index
    @seo = {}
  end

  def character
    @seo = {title: 'Character'}
    render 'index'
  end



  def sink
    @seo = { title: '404 Not Found' }
    render 'index'
  end
end
