// tslint:disable: variable-name
import { GiphyImage } from './giphy-image.model';

export class GiphyImageRendition {

  /**
   * @description Data on versions of this GIF with a fixed height of 200 pixels. Good for mobile use
   */
  fixed_height?: GiphyImage;

  /**
   * @description Data on a static image of this GIF with a fixed height of 200 pixels
   */
  fixed_height_still?: GiphyImage;

  /**
   * @description Data on versions of this GIF with a fixed height of 200 pixels and the number of frames reduced to 6
   */
  fixed_height_downsampled?: GiphyImage;

  /**
   * @description Data on versions of this GIF with a fixed width of 200 pixels. Good for mobile use
   */
  fixed_width?: GiphyImage;

  /**
   * @description Data on a static image of this GIF with a fixed width of 200 pixels
   */
  fixed_width_still?: GiphyImage;

  /**
   * @description Data on versions of this GIF with a fixed width of 200 pixels and the number of frames reduced to 6
   */
  fixed_width_downsampled?: GiphyImage;

  /**
   * @description Data on versions of this GIF with a fixed height of 100 pixels. Good for mobile keyboards
   */
  fixed_height_small?: GiphyImage;

  /**
   * @description Data on a static image of this GIF with a fixed height of 100 pixels
   */
  fixed_height_small_still?: GiphyImage;

  /**
   * @description Data on versions of this GIF with a fixed width of 100 pixels. Good for mobile keyboards
   */
  fixed_width_small?: GiphyImage;

  /**
   * @description Data on a static image of this GIF with a fixed width of 100 pixels
   */
  fixed_width_small_still?: GiphyImage;

  /**
   * @description Data on a version of this GIF downsized to be under 2mb
   */
  downsized?: GiphyImage;

  /**
   * @description Data on a static preview image of the downsized version of this GIF
   */
  downsized_still?: GiphyImage;

  /**
   * @description Data on a version of this GIF downsized to be under 8mb
   */
  downsized_large?: GiphyImage;

  /**
   * @description Data on a version of this GIF downsized to be under 5mb
   */
  downsized_medium?: GiphyImage;

  /**
   * @description Data on a version of this GIF downsized to be under 200kb
   */
  downsized_small?: GiphyImage;

  /**
   * @description Data on the original version of this GIF. Good for desktop use
   */
  original?: GiphyImage;

  /**
   * @description Data on a static preview image of the original GIF
   */
  original_still?: GiphyImage;

  /**
   * @description Data on the 15 second version of the GIF looping
   */
  looping?: GiphyImage;

  /**
   * @description Data on a version of this GIF in .MP4 format limited to 50kb that displays the first 1-2 seconds of
   * the GIF
   */
  preview?: GiphyImage;

  /**
   * @description Data on a version of this GIF limited to 50kb that displays the first 1-2 seconds of the GIF
   */
  preview_gif?: GiphyImage;

}
