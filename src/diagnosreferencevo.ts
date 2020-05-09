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
  monitoringMode: MonitoringMode
  monitoringCondition: MonitoringCondition
  diffintTime: number
}


export type AgentType = "JavaApplication" | ".NETApplication"
export type MonitoringMode = "DF"
export type MonitoringCondition = "DF"
