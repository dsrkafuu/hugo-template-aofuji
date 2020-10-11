import { setLS, getLS } from '../plugins/storage';
import { logInfo } from '../plugins/logger';
import { DOCUMENT_THEME, STORAGE_THEME } from '../plugins/constants';

export default class ThemeManager {
  constructor() {
    this.theme = getLS(STORAGE_THEME) || document.body.getAttribute(DOCUMENT_THEME);
    // if inline scripts body failed
    if (this.theme !== document.body.getAttribute(DOCUMENT_THEME)) {
      document.body.setAttribute(DOCUMENT_THEME, this.theme);
    }
  }

  /**
   * @private
   * get current browser theme
   */
  getCSSScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /**
   * @private
   * get current actual theme
   */
  getSpecificTheme() {
    if (this.theme === 'auto') {
      // if auto mode
      // get the actual theme
      return this.getCSSScheme();
    } else {
      return this.theme === 'dark' ? 'dark' : 'light';
    }
  }

  /**
   * @private
   * set the theme
   * @param {string} scheme theme name
   */
  setTheme(scheme) {
    if (['auto', 'dark', 'light'].includes(scheme)) {
      document.body.setAttribute(DOCUMENT_THEME, scheme);
      this.theme = scheme;
      logInfo(`Theme set to ${scheme} mode`);
    }
  }

  /**
   * @public
   * switch theme
   */
  switchTheme() {
    const nowTheme = this.getSpecificTheme();
    const targetTheme = nowTheme === 'light' ? 'dark' : 'light';
    if (targetTheme === this.getCSSScheme()) {
      // if target theme is browser theme
      // return to auto mode
      this.setTheme('auto');
      setLS(STORAGE_THEME, 'auto');
    } else {
      this.setTheme(targetTheme);
      setLS(STORAGE_THEME, targetTheme);
    }
  }
}
