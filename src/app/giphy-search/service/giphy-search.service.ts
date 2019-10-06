import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiphyResponse } from '../model/giphy-response.model';

@Injectable()
export class GiphySearchService {

  private readonly BASE_URL = 'https://api.giphy.com/v1/gifs/search';
  private readonly API_KEY_SEARCH = '[YOUR-GIPHY-API-KEY]';

  constructor(
    private http: HttpClient
  ) {

  }

  /**
   * @description Efetua a pesquisa no site do Giphy por imagens que correspondam aos critérios informados
   *
   * @param limit - Quantidade de registros por página
   * @param term - O termo que será pesquisado
   */
  search(limit: number, term: string): Observable<GiphyResponse> {
    return this.http.get(`${this.BASE_URL}?q=${term}&limit=${limit}&api_key=${this.API_KEY_SEARCH}`);
  }
}
