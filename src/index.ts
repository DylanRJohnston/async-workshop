import { promises as fs } from 'fs'
import path from 'path'

void fs.readFile(path.join(__dirname, './index.ts')).then(console.log)
