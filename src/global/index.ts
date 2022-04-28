import { ElButton, ElIcon, ElTabPane, ElTabs, ElTag } from 'element-plus'
import { App } from 'vue'
import { UserFilled, Cellphone } from '@element-plus/icons-vue'
const ElComponents = [
  ElButton,
  ElTag,
  ElTabs,
  ElTabPane,
  ElIcon,
  UserFilled,
  Cellphone
]
export default function (app: App): void {
  ElComponents.forEach((elCpn) => {
    app.component(elCpn.name, elCpn)
  })
}
