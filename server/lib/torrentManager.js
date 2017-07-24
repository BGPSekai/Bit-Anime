import('buffer').then(({Buffer}) => {global.Buffer = Buffer;})
import WebTorrent from 'webtorrent-hybrid'

const client = new WebTorrent()
const schedule = {}

export default class TorrentManager {
  static getList() {
    return schedule
  }

  static add(uri) {
    return new Promise((resolve, reject) => {
      client.add(uri, (torrent) => {
        resolve({
          file: torrent.file
        })
      })
    })
  }
}
