class ImagesController < ApplicationController
  before_action :authenticate_user!

  def index
    @images = Image.all
  end

  def new
    @image = Image.new
  end

  def create
    @image = Image.new(image_params)

    if params[:file].present?
      req = Cloudinary::Uploader.upload(params[:file])
      publicId = req["public_id"]
      @image.image_url = publicId
    end

    if @image.save
      redirect_to images_path, notice: "Your image was created"
    else
      redirect_to new_image_path, notice: "Something went wrong"
    end
  end

  def destroy
    @image = Image.find(params[:id])
    Cloudinary::Uploader.destroy(@image.image_url, invalidate: true)
    @image.destroy

    redirect_to images_path, notice: "Your image was destroyed"
  end

  private

  def image_params
    params.permit(:image_url)
  end

end
