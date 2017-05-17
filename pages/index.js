import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import { numberToBase } from '../utils/numberConversion'
import { times } from '../utils/loop'
export default () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div>
    Binary: { numberToBase(546, 2) }
    </div>
    <div>
    Hex: { numberToBase(546, 16) }
    </div>


    <h2> Binary (base 2)</h2>
    <ul>
      { times(200, function (n) {
          return <li>{n}={numberToBase(n, 2)}</li>
        })}
    </ul>

    <h2> Hexadecimal (base 16)</h2>
    <ul>
      { times(200, function (n) {
          return <li>{n}={numberToBase(n, 16)}</li>
        })}
    </ul>


    </div>
)
