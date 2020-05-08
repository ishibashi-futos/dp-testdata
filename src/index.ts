import {v4} from "uuid";

type AgentType = "JavaApplication" | ".NETApplication"
type MonitoringMode = "DF"
type MonitoringCondition = "DF"

interface Diagnosreferencevo extends MonitoringTarget {
  taskId: string
  startTime: string
  endTime: string
  agentId: string
  agentType: AgentType
  nodeIp: string
  clientIp: string
  systemId: string
  totalTime: number
  sessionId: string | null
  userId: string | null
  exceptionType: string | null
  usedMemory: number
  deltaMemory: number
  totalCount: number
  dpUsedMemory: number
  monitoringMode: MonitoringMode
  monitoringCondition: MonitoringCondition
  diffintTime: number
}

const getRandomValue = (min: number, max: number) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min
}

const datetimeFormat = (date: Date): string => {
  return date.getFullYear() + (date.getMonth() + 1).toString().padStart(2, "00") + date.getDate().toString().padStart(2, "00")
    + date.getHours().toString().padStart(2, "00")
    + date.getMinutes().toString().padStart(2, "00")
    + date.getSeconds().toString().padStart(2, "00")
    + date.getMilliseconds().toString().padStart(3, "000")
}

interface MonitoringTarget {
  functionId: string
  screenId: string
  actionId: string
}

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
