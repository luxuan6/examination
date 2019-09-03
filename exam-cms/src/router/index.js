import React, { Component, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouteView from "./RouteView"
import RouteConfig from "./RouteConfig"

class RouterIndex extends Component {
  render() {
    return <BrowserRouter>
      {/* 页面没有加载出来显示loading... */}
      <Suspense fallback={<div>loading...</div>}>
        <RouteView children={RouteConfig}></RouteView>
      </Suspense>
    </BrowserRouter>
  }
}

export default RouterIndex