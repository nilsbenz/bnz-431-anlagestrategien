import {Component} from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'bier-root',
  styleUrl: 'bier-root.css',
  shadow: true
})
export class BierRoot {

  render() {
    return (
      <div class="space-between">
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/' component='bier-home' exact={true}/>
            <stencil-route url="/basics" component="bier-basics"/>
            <stencil-route url="/active" component="bier-active-strategies"/>
            <stencil-route url="/passive" component="bier-passive-strategies"/>
            <stencil-route url="/alternative" component="bier-alternative-investments"/>
          </stencil-route-switch>
        </stencil-router>
        <bier-footer/>
      </div>
    );
  }
}
