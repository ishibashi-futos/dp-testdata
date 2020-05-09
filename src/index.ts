import {v4} from "uuid";
import MonitoringTarget from "./monitoringtarget"
import {getRandomValue, datetimeFormat} from "./util"
import DateTime, { Hour } from "./datetime"
import DateTimeFormatter from "./datetimeformatter"
import Diagnosreferencevo, {toSql} from "./diagnosreferencevo"
import fs from "fs"

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

const originDate = new DateTime({year: 2020, month: 5, day: 1, hour: 0, minute: 0, second: 0, mills: 0})
const formatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS")
const dateRange = 30;

const createSql = (fd: number) => {
  Array.from({length: dateRange}, (x,v) => v+1).forEach(i => {
    const dt = DateTime.copy(originDate)
    dt.addDays(i)
    Array.from({length: 23}, (x, v) => v+1).forEach(v => {
      dt.addHours(1)
      const dtHours = DateTime.copy(dt)
      Array.from({length: 6}, (x, v) => v+1).forEach((v) => {
        dtHours.addMinutes(10)
        monitoringTargets.forEach(target => {
          const count = getRandomValue(1, 100)
          for (let i = 0; i < count; i++) {
            const startTime = DateTime.copy(dtHours)
            startTime.addMills(getRandomValue(1, 600))
            const endTime = DateTime.copy(dtHours)
            endTime.addMills(999)
            const vo: Diagnosreferencevo = {
              taskId: v4(),
              startTime: formatter.format(startTime),
              endTime: formatter.format(endTime),
              agentId: v4(),
              agentType: "JavaApplication",
              nodeIp: "127.0.0.1",
              clientIp: "127.0.0.1",
              systemId: "SampleWebApp",
              ...target,
              totalTime: getRandomValue(1, 6000),
              sessionId: null,
              userId: null,
              exceptionType: null,
              usedMemory: getRandomValue(1, 9999999),
              deltaMemory: getRandomValue(1, 9999999),
              totalCount: getRandomValue(5, 100),
              dpUsedMemory: getRandomValue(1, 99999),
              dpTotalTime: getRandomValue(1, 1000),
              monitoringMode: "DF",
              monitoringCondition: "DF",
              diffintTime: 0
            }
            fs.writeFile(fd, toSql(vo), (err) => {
              if (err) {
                console.error(err)
                return
              }
            })
          }
        })
      })
    })
  })
}

fs.open("dist/data.sql", "w", (err, fd) => {
  if (err) {
    console.error(err)
    return
  }
  createSql(fd)
})