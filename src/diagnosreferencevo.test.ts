import Diagnosreferencevo, {toSql} from "./diagnosreferencevo"
import DateTime from "./datetime"
import DateTimeFormatter from "./datetimeformatter"

describe("SQL作成に関するテスト", () => {
  const formatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS")
  const vo: Diagnosreferencevo = {
    taskId: "d2f539f3-4a5a-4668-8ae6-4263e7740438",
    startTime: formatter.format(new DateTime({year: 2020, month: 5, day: 1, hour: 5, minute: 55, second: 0, mills: 0})),
    endTime: formatter.format(new DateTime({year: 2020, month: 5, day: 1, hour: 5, minute: 55, second: 0, mills: 999})),
    agentId: "b9fe9da1-8737-44cf-81ad-686e307cf9f2",
    agentType: "JavaApplication",
    nodeIp: "127.0.0.1",
    clientIp: "127.0.0.1",
    systemId: "SampleWebApp",
    functionId: "jp.co.webtechnology.dpsample.web",
    screenId: "CommonBtnLogout",
    actionId: "execute",
    totalTime: 46,
    sessionId: null,
    userId: null,
    exceptionType: null,
    usedMemory: 667064,
    deltaMemory: 2237838,
    totalCount: 37,
    dpUsedMemory: 1243854,
    dpTotalTime: 2464,
    monitoringMode: "DF",
    monitoringCondition: "DF",
    diffintTime: 0
  }

  test("toSql", () => {
    expect(toSql(vo)).toBe("INSERT INTO DIAGNOSREFERENCEVO (TASKID, STARTTIME, ENDTIME, AGENTID, AGENTTYPE, NODEIP, CLIENTIP, TOTALTIME, SYSTEMID, FUNCTIONID, SCREENID, ACTIONID, SESSIONID, USERID, EXCEPTIONTYPE, USEDMEMORY, DELTAMEMORY, TOTALCOUNT, DPTOTALTIME, DPUSEDMEMORY, MONITORINGMODE, MONITORINGCONDITION, DIFFINTIME) VALUES('d2f539f3-4a5a-4668-8ae6-4263e7740438', '20200501055500000', '20200501055500999', 'b9fe9da1-8737-44cf-81ad-686e307cf9f2', 'JavaApplication', '127.0.0.1', '127.0.0.1', 46, 'SampleWebApp', 'jp.co.webtechnology.dpsample.web', 'CommonBtnLogout', 'execute', 'null', 'null', 'null', 667064, 2237838, 37, 2464, 1243854, 'DF', 'DF', 0);\n")
  })
})