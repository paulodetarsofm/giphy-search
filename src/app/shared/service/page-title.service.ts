import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class PageTitleService {

  private readonly DEFAULT = 'GiphySearch';

  constructor(
    private titleService: Title
  ) {

  }

  /**
   * @description Define um novo `<title>` para a página utilizando o termo que foi enviado, concatenando com o texto
   * padrão utilizado em todas as páginas
   *
   * @param title - Opcional. Texto que será adicionado ao `<title>` da página
   */
  setNewTitle(title?: string): void {

    const pieces = [];

    pieces.push(title);
    pieces.push(this.DEFAULT);

    const newTitle = pieces.filter((item: string) => !!item).join(' - ');

    this.titleService.setTitle(newTitle);
  }
}
