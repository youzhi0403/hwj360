import { createAPI } from 'cube-ui'
import Vue from 'vue'
import MenuSelect from './components/menuSelect/menuSelect'

createAPI(Vue, MenuSelect, ['click'], true)
