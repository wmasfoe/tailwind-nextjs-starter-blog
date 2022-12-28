import { useState } from 'react'
import CMSLayout from '@/layouts/CMSLayout'

const CMSLogin = () => {
  const [info, setInfo] = useState({
    user: '',
    pwd: '',
  })

  const onInput = (e) => {
    setInfo((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const onSubmit = () => {
    console.log('submit ', info)
  }

  return (
    <>
      <div className="flex items-center">
        <label htmlFor="user">用户名</label>
        <input type="text" name="user" id="user" onChange={onInput} />
      </div>
      <div>
        <label htmlFor="pwd">密码</label>
        <input type="password" name="pwd" id="pwd" onChange={onInput} />
      </div>

      <button onClick={onSubmit}>submit</button>
    </>
  )
}

// CMS 页采用新 layout
CMSLogin.getLayout = CMSLayout

export default CMSLogin
