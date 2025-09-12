/** @jsxImportSource woby */
import { render } from 'woby'
import './index.css'
import { IconGallery } from './IconGallery'

const app = document.getElementById('app')
if (app) {
  render(<IconGallery />, app)
}