// tslint:disable: variable-name
import { GiphyImageRendition } from './giphy-image-rendition.model';
import { GiphyUser } from './giphy-user.model';

export class GiphyGif {

  /**
   * @description By default, this is almost always GIF.
   * @example gif
   */
  type: string;

  /**
   * @description This GIF's unique ID
   * @example YsTs5ltWtEhnq
   */
  id: string;

  /**
   * @description The unique slug used in this GIF's URL
   * @example confused-flying-YsTs5ltWtEhnq
   */
  slug: string;

  /**
   * @description The unique URL for this GIF
   * @example http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq
   */
  url: string;

  /**
   * @description The unique bit.ly URL for this GIF
   * @example http://gph.is/1gsWDcL
   */
  bitly_url: string;

  /**
   * @description A URL used for embedding this GIF
   * @example http://giphy.com/embed/YsTs5ltWtEhnq
   */
  embed_url: string;

  /**
   * @description The username this GIF is attached to, if applicable
   * @example JoeCool4000
   */
  username: string;

  /**
   * @description The page on which this GIF was found
   * @example http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/
   */
  source: string;

  /**
   * @description The MPAA-style rating for this content. Examples include `Y`, `G`, `PG`, `PG-13` and `R`
   * @example g
   */
  rating: string;

  /**
   * @description Currently unused
   */
  content_url: string;

  /**
   * @description An object containing data about the user associated with this GIF, if applicable.
   */
  user: GiphyUser;

  /**
   * @description The top level domain of the source URL.
   * @example cheezburger.com
   */
  source_tld: string;

  /**
   * @description The URL of the webpage on which this GIF was found.
   * @example http://cheezburger.com/5282328320
   */
  source_post_url: string;

  /**
   * @description The date on which this GIF was last updated.
   * @example 2013-08-01 12:41:48
   */
  update_datetime: string;

  /**
   * @description The date this GIF was added to the GIPHY database.
   * @example 2013-08-01 12:41:48
   */
  create_datetime: string;

  /**
   * @description The creation or upload date from this GIF's source.
   * @example 2013-08-01 12:41:48
   */
  import_datetime: string;

  /**
   * @description The date on which this gif was marked trending, if applicable.
   * @example 2013-08-01 12:41:48
   */
  trending_datetime: string;

  /**
   * @description An object containing data for various available formats and sizes of this GIF.
   */
  images: GiphyImageRendition;

  /**
   * @description The title that appears on giphy.com for this GIF.
   * @example Happy Dancing GIF
   */
  title: string;

}
