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
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar
} from 'element-plus'
import { App } from 'vue'
import {
  Cellphone,
  Fold,
  Expand,
  Monitor,
  Setting,
  Goods,
  ChatLineRound
} from '@element-plus/icons-vue'
const ElComponents = [
  ElButton,
  ElTag,
  ElTabs,
  ElTabPane,
  ElIcon,

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
  ElMenuItemGroup, //只可以读不可选的文本
  Fold,
  Expand,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar
]
export default function (app: App): void {
  ElComponents.forEach((elCpn) => {
    app.component(elCpn.name, elCpn)
  })
}
