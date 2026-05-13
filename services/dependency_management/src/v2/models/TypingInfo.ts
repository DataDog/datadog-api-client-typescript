import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { AIWorkflowAttributes } from "./AIWorkflowAttributes";
import { AIWorkflowData } from "./AIWorkflowData";
import { AIWorkflowListMeta } from "./AIWorkflowListMeta";
import { AIWorkflowResponse } from "./AIWorkflowResponse";
import { APIErrorResponse } from "./APIErrorResponse";
import { CancelWorkflowExecutionsData } from "./CancelWorkflowExecutionsData";
import { CancelWorkflowExecutionsResponse } from "./CancelWorkflowExecutionsResponse";
import { CreateAIWorkflowRequest } from "./CreateAIWorkflowRequest";
import { CreateWorkflowExecutionsResponse } from "./CreateWorkflowExecutionsResponse";
import { Entity } from "./Entity";
import { ExecutionStep } from "./ExecutionStep";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ListAIWorkflowsResponse } from "./ListAIWorkflowsResponse";
import { ListExecutionStepsAttributes } from "./ListExecutionStepsAttributes";
import { ListExecutionStepsData } from "./ListExecutionStepsData";
import { ListExecutionStepsResponse } from "./ListExecutionStepsResponse";
import { ListPROutputsAttributes } from "./ListPROutputsAttributes";
import { ListPROutputsData } from "./ListPROutputsData";
import { ListPROutputsResponse } from "./ListPROutputsResponse";
import { ListWorkflowInstancesResponse } from "./ListWorkflowInstancesResponse";
import { PROutput } from "./PROutput";
import { UpdateAIWorkflowRequest } from "./UpdateAIWorkflowRequest";
import { WorkflowExecutionAttributes } from "./WorkflowExecutionAttributes";
import { WorkflowExecutionData } from "./WorkflowExecutionData";
import { WorkflowExecutionResponse } from "./WorkflowExecutionResponse";
import { WorkflowInstanceSummaryAttributes } from "./WorkflowInstanceSummaryAttributes";
import { WorkflowInstanceSummaryData } from "./WorkflowInstanceSummaryData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AIWorkflowDataType: ["ai-workflows"],
    ExecutionStepStatus: [
      "PENDING",
      "RUNNING",
      "COMPLETED",
      "FAILED",
      "CANCELED",
    ],
    ListExecutionStepsDataType: ["workflow-execution-steps"],
    ListPROutputsDataType: ["workflow-execution-pr-outputs"],
    PROutputCiStatus: ["PENDING", "FAILED", "SUCCESSFUL"],
    PROutputStatus: ["PENDING", "DRAFT", "READY", "MERGED", "CLOSED"],
    WorkflowExecutionDataType: ["workflow-executions"],
    WorkflowInstanceSummaryDataType: ["workflow-instances"],
  },
  oneOfMap: {},
  typeMap: {
    AIWorkflowAttributes: AIWorkflowAttributes,
    AIWorkflowData: AIWorkflowData,
    AIWorkflowListMeta: AIWorkflowListMeta,
    AIWorkflowResponse: AIWorkflowResponse,
    APIErrorResponse: APIErrorResponse,
    CancelWorkflowExecutionsData: CancelWorkflowExecutionsData,
    CancelWorkflowExecutionsResponse: CancelWorkflowExecutionsResponse,
    CreateAIWorkflowRequest: CreateAIWorkflowRequest,
    CreateWorkflowExecutionsResponse: CreateWorkflowExecutionsResponse,
    Entity: Entity,
    ExecutionStep: ExecutionStep,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ListAIWorkflowsResponse: ListAIWorkflowsResponse,
    ListExecutionStepsAttributes: ListExecutionStepsAttributes,
    ListExecutionStepsData: ListExecutionStepsData,
    ListExecutionStepsResponse: ListExecutionStepsResponse,
    ListPROutputsAttributes: ListPROutputsAttributes,
    ListPROutputsData: ListPROutputsData,
    ListPROutputsResponse: ListPROutputsResponse,
    ListWorkflowInstancesResponse: ListWorkflowInstancesResponse,
    PROutput: PROutput,
    UpdateAIWorkflowRequest: UpdateAIWorkflowRequest,
    WorkflowExecutionAttributes: WorkflowExecutionAttributes,
    WorkflowExecutionData: WorkflowExecutionData,
    WorkflowExecutionResponse: WorkflowExecutionResponse,
    WorkflowInstanceSummaryAttributes: WorkflowInstanceSummaryAttributes,
    WorkflowInstanceSummaryData: WorkflowInstanceSummaryData,
  },
};
