import MonitoringTarget from "./monitoringtarget"

export default interface Diagnosreferencevo extends MonitoringTarget {
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
  dpTotalTime: number
  monitoringMode: MonitoringMode
  monitoringCondition: MonitoringCondition
  diffintTime: number
}

export type AgentType = "JavaApplication" | ".NETApplication"
export type MonitoringMode = "DF"
export type MonitoringCondition = "DF"

export function toSql(vo: Diagnosreferencevo): string {
  return "INSERT INTO DIAGNOSREFERENCEVO "
     + "(TASKID, STARTTIME, ENDTIME, AGENTID, AGENTTYPE, NODEIP, CLIENTIP, TOTALTIME, SYSTEMID, FUNCTIONID, SCREENID, ACTIONID, SESSIONID, USERID,"
     + "EXCEPTIONTYPE, USEDMEMORY, DELTAMEMORY, TOTALCOUNT, DPTOTALTIME, DPUSEDMEMORY, MONITORINGMODE, MONITORINGCONDITION, DIFFINTIME) VALUES("
     + `'${vo.taskId}', `
     + `'${vo.startTime}', `
     + `'${vo.endTime}', `
     + `'${vo.agentId}', `
     + `'${vo.agentType}', `
     + `'${vo.nodeIp}', `
     + `'${vo.clientIp}', `
     + `${vo.totalTime}, `
     + `'${vo.systemId}', `
     + `'${vo.functionId}', `
     + `'${vo.screenId}', `
     + `'${vo.actionId}', `
     + `'${vo.sessionId}', `
     + `'${vo.userId}', `
     + `'${vo.exceptionType}', `
     + `${vo.usedMemory}, `
     + `${vo.deltaMemory}, `
     + `${vo.totalCount}, `
     + `${vo.dpTotalTime}, `
     + `${vo.dpUsedMemory}, `
     + `'${vo.monitoringMode}', `
     + `'${vo.monitoringCondition}', `
     + `${vo.diffintTime}`
     + ")"
}
