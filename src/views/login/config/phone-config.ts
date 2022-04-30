// 编写表单验证规则
export const rules = {
  number: [
    {
      //规则一
      required: true, // 会在input前添加*
      message: '手机号是必传内容', //number为空时提示信息
      trigger: 'blur' //触发时机，blur“失去焦点”或change
    },
    {
      //规则二
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '请填写正确的手机号',
      trigger: 'blur'
    }
  ],
  verifyCode: [
    {
      required: true,
      message: '密码是必填内容', //name为空时提示信息
      trigger: 'blur' //触发时机，blur“失去焦点”或change
    },
    {
      pattern: /^[0-9]{4}$/,
      message: '验证码不正确',
      trigger: 'blur'
    }
  ]
}
