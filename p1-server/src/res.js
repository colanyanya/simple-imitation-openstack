const responseMsg = (state, stateCode, stateText, data={}) => {
  return {state, stateCode, stateText, data}
}

const responseSuccessMsg = (data) => responseMsg('ok', 200, '访问成功', data)

const responseUnAuthMsg = (err) => responseMsg('unAuth', 401, '认证失败',err)

const responseFailMsg = (err) => responseMsg('fail', 400, '出现错误',err)

module.exports = {
  responseMsg,
  responseSuccessMsg,
  responseFailMsg,
  responseUnAuthMsg
}
