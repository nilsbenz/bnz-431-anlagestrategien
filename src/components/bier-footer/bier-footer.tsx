import {Component} from '@stencil/core';

@Component({
  tag: 'bier-footer',
  styleUrl: 'bier-footer.css',
  shadow: true
})
export class BierFooter {

  render() {
    return (
      <footer>
        <p>&copy; 2018 Bier Elite</p>
      </footer>
    );
  }
}
