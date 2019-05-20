import Markdown from '../../../libs/markdown';

export default class ImgLoader extends Markdown {
  document() {
    return require(`../../docs/functions/ImgLoader.md`);
  }
}
