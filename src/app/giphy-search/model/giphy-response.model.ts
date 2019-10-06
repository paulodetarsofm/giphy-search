import { GiphyGif } from './giphy-gif.model';
import { GiphyMeta } from './giphy-meta.model';
import { GiphyPagination } from './giphy-pagination.model';

export class GiphyResponse {

  data?: GiphyGif[];

  pagination?: GiphyPagination;

  meta?: GiphyMeta;

}
