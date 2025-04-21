import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { APITrigger } from "./APITrigger";
import { APITriggerWrapper } from "./APITriggerWrapper";
import { Annotation } from "./Annotation";
import { AnnotationDisplay } from "./AnnotationDisplay";
import { AnnotationDisplayBounds } from "./AnnotationDisplayBounds";
import { AnnotationMarkdownTextAnnotation } from "./AnnotationMarkdownTextAnnotation";
import { AppTriggerWrapper } from "./AppTriggerWrapper";
import { CaseTrigger } from "./CaseTrigger";
import { CaseTriggerWrapper } from "./CaseTriggerWrapper";
import { ChangeEventTriggerWrapper } from "./ChangeEventTriggerWrapper";
import { CompletionCondition } from "./CompletionCondition";
import { CompletionGate } from "./CompletionGate";
import { Connection } from "./Connection";
import { ConnectionEnv } from "./ConnectionEnv";
import { ConnectionGroup } from "./ConnectionGroup";
import { CreateWorkflowRequest } from "./CreateWorkflowRequest";
import { CreateWorkflowResponse } from "./CreateWorkflowResponse";
import { DashboardTriggerWrapper } from "./DashboardTriggerWrapper";
import { DatabaseMonitoringTriggerWrapper } from "./DatabaseMonitoringTriggerWrapper";
import { ErrorHandler } from "./ErrorHandler";
import { GetWorkflowResponse } from "./GetWorkflowResponse";
import { GithubWebhookTrigger } from "./GithubWebhookTrigger";
import { GithubWebhookTriggerWrapper } from "./GithubWebhookTriggerWrapper";
import { IncidentTrigger } from "./IncidentTrigger";
import { IncidentTriggerWrapper } from "./IncidentTriggerWrapper";
import { InputSchema } from "./InputSchema";
import { InputSchemaParameters } from "./InputSchemaParameters";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { MonitorTrigger } from "./MonitorTrigger";
import { MonitorTriggerWrapper } from "./MonitorTriggerWrapper";
import { NotebookTriggerWrapper } from "./NotebookTriggerWrapper";
import { OutboundEdge } from "./OutboundEdge";
import { OutputSchema } from "./OutputSchema";
import { OutputSchemaParameters } from "./OutputSchemaParameters";
import { Parameter } from "./Parameter";
import { ReadinessGate } from "./ReadinessGate";
import { RetryStrategy } from "./RetryStrategy";
import { RetryStrategyLinear } from "./RetryStrategyLinear";
import { ScheduleTrigger } from "./ScheduleTrigger";
import { ScheduleTriggerWrapper } from "./ScheduleTriggerWrapper";
import { SecurityTrigger } from "./SecurityTrigger";
import { SecurityTriggerWrapper } from "./SecurityTriggerWrapper";
import { SelfServiceTriggerWrapper } from "./SelfServiceTriggerWrapper";
import { SlackTriggerWrapper } from "./SlackTriggerWrapper";
import { SoftwareCatalogTriggerWrapper } from "./SoftwareCatalogTriggerWrapper";
import { Spec } from "./Spec";
import { Step } from "./Step";
import { StepDisplay } from "./StepDisplay";
import { StepDisplayBounds } from "./StepDisplayBounds";
import { TriggerRateLimit } from "./TriggerRateLimit";
import { UpdateWorkflowRequest } from "./UpdateWorkflowRequest";
import { UpdateWorkflowResponse } from "./UpdateWorkflowResponse";
import { WorkflowData } from "./WorkflowData";
import { WorkflowDataAttributes } from "./WorkflowDataAttributes";
import { WorkflowDataRelationships } from "./WorkflowDataRelationships";
import { WorkflowDataUpdate } from "./WorkflowDataUpdate";
import { WorkflowDataUpdateAttributes } from "./WorkflowDataUpdateAttributes";
import { WorkflowInstanceCreateMeta } from "./WorkflowInstanceCreateMeta";
import { WorkflowInstanceCreateRequest } from "./WorkflowInstanceCreateRequest";
import { WorkflowInstanceCreateResponse } from "./WorkflowInstanceCreateResponse";
import { WorkflowInstanceCreateResponseData } from "./WorkflowInstanceCreateResponseData";
import { WorkflowInstanceListItem } from "./WorkflowInstanceListItem";
import { WorkflowListInstancesResponse } from "./WorkflowListInstancesResponse";
import { WorkflowListInstancesResponseMeta } from "./WorkflowListInstancesResponseMeta";
import { WorkflowListInstancesResponseMetaPage } from "./WorkflowListInstancesResponseMetaPage";
import { WorkflowTriggerWrapper } from "./WorkflowTriggerWrapper";
import { WorkflowUserRelationship } from "./WorkflowUserRelationship";
import { WorkflowUserRelationshipData } from "./WorkflowUserRelationshipData";
import { WorklflowCancelInstanceResponse } from "./WorklflowCancelInstanceResponse";
import { WorklflowCancelInstanceResponseData } from "./WorklflowCancelInstanceResponseData";
import { WorklflowGetInstanceResponse } from "./WorklflowGetInstanceResponse";
import { WorklflowGetInstanceResponseData } from "./WorklflowGetInstanceResponseData";
import { WorklflowGetInstanceResponseDataAttributes } from "./WorklflowGetInstanceResponseDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CompletionConditionOperator: [
      "OPERATOR_EQUAL",
      "OPERATOR_NOT_EQUAL",
      "OPERATOR_GREATER_THAN",
      "OPERATOR_LESS_THAN",
      "OPERATOR_GREATER_THAN_OR_EQUAL_TO",
      "OPERATOR_LESS_THAN_OR_EQUAL_TO",
      "OPERATOR_CONTAINS",
      "OPERATOR_DOES_NOT_CONTAIN",
      "OPERATOR_IS_NULL",
      "OPERATOR_IS_NOT_NULL",
      "OPERATOR_IS_EMPTY",
      "OPERATOR_IS_NOT_EMPTY",
    ],
    ConnectionEnvEnv: ["default"],
    InputSchemaParametersType: [
      "STRING",
      "NUMBER",
      "BOOLEAN",
      "OBJECT",
      "ARRAY_STRING",
      "ARRAY_NUMBER",
      "ARRAY_BOOLEAN",
      "ARRAY_OBJECT",
    ],
    OutputSchemaParametersType: [
      "STRING",
      "NUMBER",
      "BOOLEAN",
      "OBJECT",
      "ARRAY_STRING",
      "ARRAY_NUMBER",
      "ARRAY_BOOLEAN",
      "ARRAY_OBJECT",
    ],
    ReadinessGateThresholdType: ["ANY", "ALL"],
    RetryStrategyKind: ["RETRY_STRATEGY_LINEAR"],
    WorkflowDataType: ["workflows"],
    WorkflowUserRelationshipType: ["users"],
  },
  oneOfMap: {
    Trigger: [
      "APITriggerWrapper",
      "AppTriggerWrapper",
      "CaseTriggerWrapper",
      "ChangeEventTriggerWrapper",
      "DatabaseMonitoringTriggerWrapper",
      "DashboardTriggerWrapper",
      "GithubWebhookTriggerWrapper",
      "IncidentTriggerWrapper",
      "MonitorTriggerWrapper",
      "NotebookTriggerWrapper",
      "ScheduleTriggerWrapper",
      "SecurityTriggerWrapper",
      "SelfServiceTriggerWrapper",
      "SlackTriggerWrapper",
      "SoftwareCatalogTriggerWrapper",
      "WorkflowTriggerWrapper",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    APITrigger: APITrigger,
    APITriggerWrapper: APITriggerWrapper,
    Annotation: Annotation,
    AnnotationDisplay: AnnotationDisplay,
    AnnotationDisplayBounds: AnnotationDisplayBounds,
    AnnotationMarkdownTextAnnotation: AnnotationMarkdownTextAnnotation,
    AppTriggerWrapper: AppTriggerWrapper,
    CaseTrigger: CaseTrigger,
    CaseTriggerWrapper: CaseTriggerWrapper,
    ChangeEventTriggerWrapper: ChangeEventTriggerWrapper,
    CompletionCondition: CompletionCondition,
    CompletionGate: CompletionGate,
    Connection: Connection,
    ConnectionEnv: ConnectionEnv,
    ConnectionGroup: ConnectionGroup,
    CreateWorkflowRequest: CreateWorkflowRequest,
    CreateWorkflowResponse: CreateWorkflowResponse,
    DashboardTriggerWrapper: DashboardTriggerWrapper,
    DatabaseMonitoringTriggerWrapper: DatabaseMonitoringTriggerWrapper,
    ErrorHandler: ErrorHandler,
    GetWorkflowResponse: GetWorkflowResponse,
    GithubWebhookTrigger: GithubWebhookTrigger,
    GithubWebhookTriggerWrapper: GithubWebhookTriggerWrapper,
    IncidentTrigger: IncidentTrigger,
    IncidentTriggerWrapper: IncidentTriggerWrapper,
    InputSchema: InputSchema,
    InputSchemaParameters: InputSchemaParameters,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    MonitorTrigger: MonitorTrigger,
    MonitorTriggerWrapper: MonitorTriggerWrapper,
    NotebookTriggerWrapper: NotebookTriggerWrapper,
    OutboundEdge: OutboundEdge,
    OutputSchema: OutputSchema,
    OutputSchemaParameters: OutputSchemaParameters,
    Parameter: Parameter,
    ReadinessGate: ReadinessGate,
    RetryStrategy: RetryStrategy,
    RetryStrategyLinear: RetryStrategyLinear,
    ScheduleTrigger: ScheduleTrigger,
    ScheduleTriggerWrapper: ScheduleTriggerWrapper,
    SecurityTrigger: SecurityTrigger,
    SecurityTriggerWrapper: SecurityTriggerWrapper,
    SelfServiceTriggerWrapper: SelfServiceTriggerWrapper,
    SlackTriggerWrapper: SlackTriggerWrapper,
    SoftwareCatalogTriggerWrapper: SoftwareCatalogTriggerWrapper,
    Spec: Spec,
    Step: Step,
    StepDisplay: StepDisplay,
    StepDisplayBounds: StepDisplayBounds,
    TriggerRateLimit: TriggerRateLimit,
    UpdateWorkflowRequest: UpdateWorkflowRequest,
    UpdateWorkflowResponse: UpdateWorkflowResponse,
    WorkflowData: WorkflowData,
    WorkflowDataAttributes: WorkflowDataAttributes,
    WorkflowDataRelationships: WorkflowDataRelationships,
    WorkflowDataUpdate: WorkflowDataUpdate,
    WorkflowDataUpdateAttributes: WorkflowDataUpdateAttributes,
    WorkflowInstanceCreateMeta: WorkflowInstanceCreateMeta,
    WorkflowInstanceCreateRequest: WorkflowInstanceCreateRequest,
    WorkflowInstanceCreateResponse: WorkflowInstanceCreateResponse,
    WorkflowInstanceCreateResponseData: WorkflowInstanceCreateResponseData,
    WorkflowInstanceListItem: WorkflowInstanceListItem,
    WorkflowListInstancesResponse: WorkflowListInstancesResponse,
    WorkflowListInstancesResponseMeta: WorkflowListInstancesResponseMeta,
    WorkflowListInstancesResponseMetaPage:
      WorkflowListInstancesResponseMetaPage,
    WorkflowTriggerWrapper: WorkflowTriggerWrapper,
    WorkflowUserRelationship: WorkflowUserRelationship,
    WorkflowUserRelationshipData: WorkflowUserRelationshipData,
    WorklflowCancelInstanceResponse: WorklflowCancelInstanceResponse,
    WorklflowCancelInstanceResponseData: WorklflowCancelInstanceResponseData,
    WorklflowGetInstanceResponse: WorklflowGetInstanceResponse,
    WorklflowGetInstanceResponseData: WorklflowGetInstanceResponseData,
    WorklflowGetInstanceResponseDataAttributes:
      WorklflowGetInstanceResponseDataAttributes,
  },
};
