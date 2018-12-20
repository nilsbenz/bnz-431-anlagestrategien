import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'bier-header',
  styleUrl: 'bier-header.css',
  shadow: true
})
export class BierHeader {

  @Prop() container: string;

  render() {
    return (
      <header>
        <h1>Anlagestrategien</h1>
        <div class="dropdown">
          <i class="fa fa-bars"/>
          {this.toggleActiveDropdown()}
        </div>
        {this.toggleActiveNav()}
      </header>
    );
  }

  toggleActiveDropdown() {
    switch (this.container) {
      case "home":
        return (
          <div class="dropdown-content">
            <p class="active dropborder">Home</p>
            <stencil-route-link url='/basics'>
              <p>Basics</p>
            </stencil-route-link>
            <stencil-route-link url='/active'>
              <p>Aktive Strategien</p>
            </stencil-route-link>
            <stencil-route-link url='/passive'>
              <p>Passive Strategien</p>
            </stencil-route-link>
            <stencil-route-link url='/alternative'>
              <p>Alternative Anlagen</p>
            </stencil-route-link>
          </div>
        )
      case "basics":
        return (
          <div class="dropdown-content">
            <stencil-route-link url='/'>
              <p>Home</p>
            </stencil-route-link>
            <p class="active dropborder">Basics</p>
            <stencil-route-link url='/active'>
              <p>Aktive Strategien</p>
            </stencil-route-link>
            <stencil-route-link url='/passive'>
              <p>Passive Strategien</p>
            </stencil-route-link>
            <stencil-route-link url='/alternative'>
              <p>Alternative Anlagen</p>
            </stencil-route-link>
          </div>
        )
      case "aktiv":
        return (
          <div class="dropdown-content">
            <stencil-route-link url='/'>
              <p>Home</p>
            </stencil-route-link>
            <stencil-route-link url='/basics'>
              <p>Basics</p>
            </stencil-route-link>
            <p class="active dropborder">Aktive Strategien</p>
            <stencil-route-link url='/passive'>
              <p>Passive Strategien</p>
            </stencil-route-link>
            <stencil-route-link url='/alternative'>
              <p>Alternative Anlagen</p>
            </stencil-route-link>
          </div>
        )
      case "passiv":
        return (
          <div class="dropdown-content">
            <stencil-route-link url='/'>
              <p>Home</p>
            </stencil-route-link>
            <stencil-route-link url='/basics'>
              <p>Basics</p>
            </stencil-route-link>
            <stencil-route-link url='/active'>
              <p>Aktive Strategien</p>
            </stencil-route-link>
            <p class="active dropborder">Passive Strategien</p>
            <stencil-route-link url='/alternative'>
              <p>Alternative Anlagen</p>
            </stencil-route-link>
          </div>
        )
      case "alternativ":
        return (
          <div class="dropdown-content">
            <stencil-route-link url='/'>
              <p>Home</p>
            </stencil-route-link>
            <stencil-route-link url='/basics'>
              <p>Basics</p>
            </stencil-route-link>
            <stencil-route-link url='/active'>
              <p>Aktive Strategien</p>
            </stencil-route-link>
            <stencil-route-link url='/passive'>
              <p>Passive Strategien</p>
            </stencil-route-link>
            <p class="active dropborder">Alternative Anlagen</p>
          </div>
        )
    }
  }

  toggleActiveNav() {
    switch (this.container) {
      case "home":
        return (
          <nav>
            <button class="active">Home</button>
            <stencil-route-link url='/basics'>
              <button>Basics</button>
            </stencil-route-link>
            <stencil-route-link url='/active'>
              <button>Aktive Strategien</button>
            </stencil-route-link>
            <stencil-route-link url='/passive'>
              <button>Passive Strategien</button>
            </stencil-route-link>
            <stencil-route-link url='/alternative'>
              <button>Alternative Anlagen</button>
            </stencil-route-link>
          </nav>
        )
      case "basics":
        return (
          <nav>
            <stencil-route-link url='/'>
              <button>Home</button>
            </stencil-route-link>
            <button class="active">Basics</button>
            <stencil-route-link url='/active'>
              <button>Aktive Strategien</button>
            </stencil-route-link>
            <stencil-route-link url='/passive'>
              <button>Passive Strategien</button>
            </stencil-route-link>
            <stencil-route-link url='/alternative'>
              <button>Alternative Anlagen</button>
            </stencil-route-link>
          </nav>
        )
      case "aktiv":
        return (
          <nav>
            <stencil-route-link url='/'>
              <button>Home</button>
            </stencil-route-link>
            <stencil-route-link url='/basics'>
              <button>Basics</button>
            </stencil-route-link>
            <button class="active">Aktive Strategien</button>
            <stencil-route-link url='/passive'>
              <button>Passive Strategien</button>
            </stencil-route-link>
            <stencil-route-link url='/alternative'>
              <button>Alternative Anlagen</button>
            </stencil-route-link>
          </nav>
        )
      case "passiv":
        return (
          <nav>
            <stencil-route-link url='/'>
              <button>Home</button>
            </stencil-route-link>
            <stencil-route-link url='/basics'>
              <button>Basics</button>
            </stencil-route-link>
            <stencil-route-link url='/active'>
              <button>Aktive Strategien</button>
            </stencil-route-link>
            <button class="active">Passive Strategien</button>
            <stencil-route-link url='/alternative'>
              <button>Alternative Anlagen</button>
            </stencil-route-link>
          </nav>
        )
      case "alternativ":
        return (
          <nav>
            <stencil-route-link url='/'>
              <button>Home</button>
            </stencil-route-link>
            <stencil-route-link url='/basics'>
              <button>Basics</button>
            </stencil-route-link>
            <stencil-route-link url='/active'>
              <button>Aktive Strategien</button>
            </stencil-route-link>
            <stencil-route-link url='/passive'>
              <button>Passive Strategien</button>
            </stencil-route-link>
            <button class="active">Alternative Anlagen</button>
          </nav>
        )
    }
  }
}
