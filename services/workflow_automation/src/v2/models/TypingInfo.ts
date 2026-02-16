import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { APITrigger } from "./APITrigger";
import { APITriggerWrapper } from "./APITriggerWrapper";
import { ActionMatch } from "./ActionMatch";
import { AgenticEvent } from "./AgenticEvent";
import { Annotation } from "./Annotation";
import { AnnotationDisplay } from "./AnnotationDisplay";
import { AnnotationDisplayBounds } from "./AnnotationDisplayBounds";
import { AnnotationMarkdownTextAnnotation } from "./AnnotationMarkdownTextAnnotation";
import { AppTriggerWrapper } from "./AppTriggerWrapper";
import { CaseTrigger } from "./CaseTrigger";
import { CaseTriggerWrapper } from "./CaseTriggerWrapper";
import { ChangeEventTriggerWrapper } from "./ChangeEventTriggerWrapper";
import { ChatHistoryItem } from "./ChatHistoryItem";
import { ChatMessage } from "./ChatMessage";
import { CompletionCondition } from "./CompletionCondition";
import { CompletionGate } from "./CompletionGate";
import { Connection } from "./Connection";
import { ConnectionEnv } from "./ConnectionEnv";
import { ConnectionGroup } from "./ConnectionGroup";
import { CreateWorkflowRequest } from "./CreateWorkflowRequest";
import { CreateWorkflowResponse } from "./CreateWorkflowResponse";
import { CustomAgentConversationRequest } from "./CustomAgentConversationRequest";
import { CustomAgentConversationStreamResponse } from "./CustomAgentConversationStreamResponse";
import { DashboardTriggerWrapper } from "./DashboardTriggerWrapper";
import { DataTransformationContext } from "./DataTransformationContext";
import { DataTransformationDescriptionRequest } from "./DataTransformationDescriptionRequest";
import { DataTransformationDescriptionResponse } from "./DataTransformationDescriptionResponse";
import { DataTransformationRequest } from "./DataTransformationRequest";
import { DataTransformationStreamResponse } from "./DataTransformationStreamResponse";
import { DatabaseMonitoringTriggerWrapper } from "./DatabaseMonitoringTriggerWrapper";
import { DatastoreTrigger } from "./DatastoreTrigger";
import { DatastoreTriggerWrapper } from "./DatastoreTriggerWrapper";
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
import { OnCallTrigger } from "./OnCallTrigger";
import { OnCallTriggerWrapper } from "./OnCallTriggerWrapper";
import { OutboundEdge } from "./OutboundEdge";
import { OutputSchema } from "./OutputSchema";
import { OutputSchemaParameters } from "./OutputSchemaParameters";
import { Parameter } from "./Parameter";
import { PickActionRequest } from "./PickActionRequest";
import { PickActionResponse } from "./PickActionResponse";
import { PickRemediationFromInvestigationRequest } from "./PickRemediationFromInvestigationRequest";
import { PickRemediationFromInvestigationResponse } from "./PickRemediationFromInvestigationResponse";
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
import { StreamEventV1 } from "./StreamEventV1";
import { TriggerRateLimit } from "./TriggerRateLimit";
import { UpdateWorkflowRequest } from "./UpdateWorkflowRequest";
import { UpdateWorkflowResponse } from "./UpdateWorkflowResponse";
import { UserContext } from "./UserContext";
import { UserInfo } from "./UserInfo";
import { WorkflowData } from "./WorkflowData";
import { WorkflowDataAttributes } from "./WorkflowDataAttributes";
import { WorkflowDataRelationships } from "./WorkflowDataRelationships";
import { WorkflowDataUpdate } from "./WorkflowDataUpdate";
import { WorkflowDataUpdateAttributes } from "./WorkflowDataUpdateAttributes";
import { WorkflowDescriptionRequest } from "./WorkflowDescriptionRequest";
import { WorkflowDescriptionResponse } from "./WorkflowDescriptionResponse";
import { WorkflowInstanceCreateMeta } from "./WorkflowInstanceCreateMeta";
import { WorkflowInstanceCreateRequest } from "./WorkflowInstanceCreateRequest";
import { WorkflowInstanceCreateResponse } from "./WorkflowInstanceCreateResponse";
import { WorkflowInstanceCreateResponseData } from "./WorkflowInstanceCreateResponseData";
import { WorkflowInstanceListItem } from "./WorkflowInstanceListItem";
import { WorkflowListInstancesResponse } from "./WorkflowListInstancesResponse";
import { WorkflowListInstancesResponseMeta } from "./WorkflowListInstancesResponseMeta";
import { WorkflowListInstancesResponseMetaPage } from "./WorkflowListInstancesResponseMetaPage";
import { WorkflowScaffoldAgenticStreamRequest } from "./WorkflowScaffoldAgenticStreamRequest";
import { WorkflowScaffoldAgenticStreamResponse } from "./WorkflowScaffoldAgenticStreamResponse";
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
    ChatHistoryItemRole: ["user", "assistant"],
    ChatMessageRole: ["user", "assistant", "system"],
    ClientType: ["workflows", "app_builder", "actions_api"],
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
    DataTransformationLanguage: ["javascript", "python"],
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
    StabilityLevel: ["UNSPECIFIED", "DEV", "BETA", "STABLE"],
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
      "DatastoreTriggerWrapper",
      "DashboardTriggerWrapper",
      "GithubWebhookTriggerWrapper",
      "IncidentTriggerWrapper",
      "MonitorTriggerWrapper",
      "NotebookTriggerWrapper",
      "OnCallTriggerWrapper",
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
    ActionMatch: ActionMatch,
    AgenticEvent: AgenticEvent,
    Annotation: Annotation,
    AnnotationDisplay: AnnotationDisplay,
    AnnotationDisplayBounds: AnnotationDisplayBounds,
    AnnotationMarkdownTextAnnotation: AnnotationMarkdownTextAnnotation,
    AppTriggerWrapper: AppTriggerWrapper,
    CaseTrigger: CaseTrigger,
    CaseTriggerWrapper: CaseTriggerWrapper,
    ChangeEventTriggerWrapper: ChangeEventTriggerWrapper,
    ChatHistoryItem: ChatHistoryItem,
    ChatMessage: ChatMessage,
    CompletionCondition: CompletionCondition,
    CompletionGate: CompletionGate,
    Connection: Connection,
    ConnectionEnv: ConnectionEnv,
    ConnectionGroup: ConnectionGroup,
    CreateWorkflowRequest: CreateWorkflowRequest,
    CreateWorkflowResponse: CreateWorkflowResponse,
    CustomAgentConversationRequest: CustomAgentConversationRequest,
    CustomAgentConversationStreamResponse:
      CustomAgentConversationStreamResponse,
    DashboardTriggerWrapper: DashboardTriggerWrapper,
    DataTransformationContext: DataTransformationContext,
    DataTransformationDescriptionRequest: DataTransformationDescriptionRequest,
    DataTransformationDescriptionResponse:
      DataTransformationDescriptionResponse,
    DataTransformationRequest: DataTransformationRequest,
    DataTransformationStreamResponse: DataTransformationStreamResponse,
    DatabaseMonitoringTriggerWrapper: DatabaseMonitoringTriggerWrapper,
    DatastoreTrigger: DatastoreTrigger,
    DatastoreTriggerWrapper: DatastoreTriggerWrapper,
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
    OnCallTrigger: OnCallTrigger,
    OnCallTriggerWrapper: OnCallTriggerWrapper,
    OutboundEdge: OutboundEdge,
    OutputSchema: OutputSchema,
    OutputSchemaParameters: OutputSchemaParameters,
    Parameter: Parameter,
    PickActionRequest: PickActionRequest,
    PickActionResponse: PickActionResponse,
    PickRemediationFromInvestigationRequest:
      PickRemediationFromInvestigationRequest,
    PickRemediationFromInvestigationResponse:
      PickRemediationFromInvestigationResponse,
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
    StreamEventV1: StreamEventV1,
    TriggerRateLimit: TriggerRateLimit,
    UpdateWorkflowRequest: UpdateWorkflowRequest,
    UpdateWorkflowResponse: UpdateWorkflowResponse,
    UserContext: UserContext,
    UserInfo: UserInfo,
    WorkflowData: WorkflowData,
    WorkflowDataAttributes: WorkflowDataAttributes,
    WorkflowDataRelationships: WorkflowDataRelationships,
    WorkflowDataUpdate: WorkflowDataUpdate,
    WorkflowDataUpdateAttributes: WorkflowDataUpdateAttributes,
    WorkflowDescriptionRequest: WorkflowDescriptionRequest,
    WorkflowDescriptionResponse: WorkflowDescriptionResponse,
    WorkflowInstanceCreateMeta: WorkflowInstanceCreateMeta,
    WorkflowInstanceCreateRequest: WorkflowInstanceCreateRequest,
    WorkflowInstanceCreateResponse: WorkflowInstanceCreateResponse,
    WorkflowInstanceCreateResponseData: WorkflowInstanceCreateResponseData,
    WorkflowInstanceListItem: WorkflowInstanceListItem,
    WorkflowListInstancesResponse: WorkflowListInstancesResponse,
    WorkflowListInstancesResponseMeta: WorkflowListInstancesResponseMeta,
    WorkflowListInstancesResponseMetaPage:
      WorkflowListInstancesResponseMetaPage,
    WorkflowScaffoldAgenticStreamRequest: WorkflowScaffoldAgenticStreamRequest,
    WorkflowScaffoldAgenticStreamResponse:
      WorkflowScaffoldAgenticStreamResponse,
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
