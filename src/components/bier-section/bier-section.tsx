import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'bier-section',
  styleUrl: 'bier-section.css',
  shadow: true
})
export class BierSection {

  @Prop() heading: string;
  @Prop() image: string;
  @Prop() left: boolean;

  render() {
    if (this.image) {
      if(this.left) {
        return (
          <section id="withImage" class="left">
            <div id="content">
              <h2>{this.heading}</h2>
              <p>
                <slot/>
              </p>
            </div>
            <img src={this.image}/>
          </section>
        )
      }
      return (
        <section id="withImage">
          <div id="content">
            <h2>{this.heading}</h2>
            <p>
              <slot/>
            </p>
          </div>
          <img src={this.image}/>
        </section>
      )
    }
    return (
      <section>
        <h2>{this.heading}</h2>
        <p>
          <slot/>
        </p>
      </section>
    );
  }
}
