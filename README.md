![](http://img2.wikia.nocookie.net/__cb20140410195908/pokemon/images/4/48/025Pikachu_OS_anime.png)

React PikaTime
---

React based Timepicker

Usage
---
Install it

```bash
npm install --save react-pikatime

```

Just require the component and pass a parentCallback function over

```javascript
import React, { Component } from 'react'
import PikaTime from 'react-pikatime'

export default class Main extends Component {

  onTimeChange(data) {
    console.log(`the time is: ${data}`)
  }

  render() {
    return (
    <main>
      <h1>REACT PIKATIME</h1>
      <PikaTime parentCallback={::this.onTimeChange} />
    </main>
    )
  }
}


```

License
---

MIT
