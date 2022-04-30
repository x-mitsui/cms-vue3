// 编写表单验证规则
export const rules = {
  name: [
    {
      //规则一
      required: true, // 会在input前添加*
      message: '用户名是必传内容', //name为空时提示信息
      trigger: 'blur' //触发时机，blur“失去焦点”或change
    },
    {
      //规则二
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个数字或字母',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容', //name为空时提示信息
      trigger: 'blur' //触发时机，blur“失去焦点”或change
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上的数字或字母',
      trigger: 'blur'
    }
  ]
}
