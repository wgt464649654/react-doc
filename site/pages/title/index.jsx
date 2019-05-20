import Markdown from '../../../libs/markdown';

import './style.less';

export default class Button extends Markdown {
  document() {
    return require(`../../docs/button.md`);
  }
}
