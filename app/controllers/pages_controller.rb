class PagesController < ApplicationController

  def home
  end

  def about
  end

  def gallery
    @images = Image.all.limit(20)
  end
end
