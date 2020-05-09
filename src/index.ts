import {v4} from "uuid";
import MonitoringTarget from "./monitoringtarget"
import {getRandomValue, datetimeFormat} from "./util"

const monitoringTargets: MonitoringTarget[] = [
  {functionId: "jp.co.webtechnology.dpsample.web", screenId: "CommonBtnLogout", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.login.login", screenId: "LoginCreate", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.login.login", screenId: "LoginBtnLogin", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemList", screenId: "ItemListBtnDelete", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemList", screenId: "ItemListBtnNew", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemList", screenId: "ItemListBtnSearch", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemList", screenId: "ItemListBtnUpdate", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemList", screenId: "ItemListCreate", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemList", screenId: "ItemListBtnDownload", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemNew", screenId: "ItemNewBtnBack", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemNew", screenId: "ItemNewBtnConfirm", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemNew", screenId: "ItemNewCreate", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemRegistComplete", screenId: "ItemRegistCompleteBtnBack", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemRegistComplete", screenId: "ItemRegistCompleteCreate", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemRegistConfirm", screenId: "ItemRegistConfirmBtnBack", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemRegistConfirm", screenId: "ItemRegistConfirmBtnDelete", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemRegistConfirm", screenId: "ItemRegistConfirmBtnNew", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemRegistConfirm", screenId: "ItemRegistConfirmBtnUpdate", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemRegistConfirm", screenId: "ItemRegistConfirmCreate", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemUpdate", screenId: "ItemUpdateBtnBack", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemUpdate", screenId: "ItemUpdateBtnConfirm", actionId: "execute"},
  {functionId: "jp.co.webtechnology.dpsample.web.item.itemUpdate", screenId: "ItemUpdateCreate", actionId: "execute"},
]

monitoringTargets.forEach((target, i) => {
  console.log(getRandomValue(0, 100), v4(), datetimeFormat(new Date()), target, i, monitoringTargets[getRandomValue(0, monitoringTargets.length)])
})
