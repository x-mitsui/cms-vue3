import {
  ElButton,
  ElIcon,
  ElTabPane,
  ElTabs,
  ElTag,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup
} from 'element-plus'
import { App } from 'vue'
import { UserFilled, Cellphone } from '@element-plus/icons-vue'
const ElComponents = [
  ElButton,
  ElTag,
  ElTabs,
  ElTabPane,
  ElIcon,
  UserFilled,
  Cellphone,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup //只可以读不可选的文本
]
export default function (app: App): void {
  ElComponents.forEach((elCpn) => {
    app.component(elCpn.name, elCpn)
  })
}
