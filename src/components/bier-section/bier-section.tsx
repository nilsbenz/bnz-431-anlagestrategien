import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'bier-section',
  styleUrl: 'bier-section.css',
  shadow: true
})
export class BierHeader {

  @Prop() title: string;

  render() {
    return (
      <section>
        <h2>{this.title}</h2>
        <p>
          <slot/>
        </p>
      </section>
    );
  }
}
