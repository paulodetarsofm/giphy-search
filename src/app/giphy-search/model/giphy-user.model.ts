// tslint:disable: variable-name

export class GiphyUser {

  /**
   * @description The URL for this user's avatar image.
   * @example https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif
   */
  avatar_url: string;

  /**
   * @description The URL for the banner image that appears atop this user's profile page.
   * @example https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg
   */
  banner_url: string;

  /**
   * @description The URL for this user's GIPHY profile.
   * @example https://giphy.com/cheezburger/
   */
  profile_url: string;

  /**
   * @description The username associated with this user.
   * @example joecool4000
   */
  username: string;

  /**
   * @description The display name associated with this user(contains formatting the base username might not).
   * @example JoeCool4000
   */
  display_name: string;

}
