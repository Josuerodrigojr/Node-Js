import {DateTime} from 'luxon'

const now = DateTime.local().setZone("America/New_York")
console.log(now.toString())