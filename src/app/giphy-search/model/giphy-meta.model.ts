// tslint:disable: variable-name

export class GiphyMeta {

  /**
   * @description HTTP Response Message (required)
   * @example OK
   */
  msg: string;

  /**
   * @description HTTP Response Code (required)
   * @example 200
   */
  status: number;

  /**
   * @description A unique ID paired with this response from the API
   * @example 57eea03c72381f86e05c35d2
   */
  response_id?: string;

}
