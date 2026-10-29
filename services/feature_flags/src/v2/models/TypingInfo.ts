import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Allocation } from "./Allocation";
import { AllocationDataRequest } from "./AllocationDataRequest";
import { AllocationDataResponse } from "./AllocationDataResponse";
import { AllocationExposureGuardrailTrigger } from "./AllocationExposureGuardrailTrigger";
import { AllocationExposureRolloutStep } from "./AllocationExposureRolloutStep";
import { AllocationExposureSchedule } from "./AllocationExposureSchedule";
import { AllocationExposureScheduleData } from "./AllocationExposureScheduleData";
import { AllocationExposureScheduleResponse } from "./AllocationExposureScheduleResponse";
import { AllocationResponse } from "./AllocationResponse";
import { Condition } from "./Condition";
import { ConditionRequest } from "./ConditionRequest";
import { CreateAllocationsRequest } from "./CreateAllocationsRequest";
import { CreateEnvironmentAttributes } from "./CreateEnvironmentAttributes";
import { CreateEnvironmentData } from "./CreateEnvironmentData";
import { CreateEnvironmentRequest } from "./CreateEnvironmentRequest";
import { CreateFeatureFlagAttributes } from "./CreateFeatureFlagAttributes";
import { CreateFeatureFlagData } from "./CreateFeatureFlagData";
import { CreateFeatureFlagRequest } from "./CreateFeatureFlagRequest";
import { CreateVariant } from "./CreateVariant";
import { Environment } from "./Environment";
import { EnvironmentAttributes } from "./EnvironmentAttributes";
import { EnvironmentResponse } from "./EnvironmentResponse";
import { EnvironmentsPaginationMeta } from "./EnvironmentsPaginationMeta";
import { EnvironmentsPaginationMetaPage } from "./EnvironmentsPaginationMetaPage";
import { ExposureRolloutStepRequest } from "./ExposureRolloutStepRequest";
import { ExposureScheduleRequest } from "./ExposureScheduleRequest";
import { FeatureFlag } from "./FeatureFlag";
import { FeatureFlagAttributes } from "./FeatureFlagAttributes";
import { FeatureFlagChangeEvent } from "./FeatureFlagChangeEvent";
import { FeatureFlagChangeEventAttributes } from "./FeatureFlagChangeEventAttributes";
import { FeatureFlagChangeEventEnvironment } from "./FeatureFlagChangeEventEnvironment";
import { FeatureFlagChangeEventFlag } from "./FeatureFlagChangeEventFlag";
import { FeatureFlagChangeEventSuggestionReview } from "./FeatureFlagChangeEventSuggestionReview";
import { FeatureFlagEnvironment } from "./FeatureFlagEnvironment";
import { FeatureFlagEnvironmentListItem } from "./FeatureFlagEnvironmentListItem";
import { FeatureFlagHistoryPaginationMeta } from "./FeatureFlagHistoryPaginationMeta";
import { FeatureFlagHistoryPaginationMetaPage } from "./FeatureFlagHistoryPaginationMetaPage";
import { FeatureFlagListItem } from "./FeatureFlagListItem";
import { FeatureFlagListItemAttributes } from "./FeatureFlagListItemAttributes";
import { FeatureFlagResponse } from "./FeatureFlagResponse";
import { FeatureFlagStalenessCodeReference } from "./FeatureFlagStalenessCodeReference";
import { FeatureFlagStalenessDetails } from "./FeatureFlagStalenessDetails";
import { FeatureFlagStalenessRecommendedAction } from "./FeatureFlagStalenessRecommendedAction";
import { FeatureFlagsPaginationLinks } from "./FeatureFlagsPaginationLinks";
import { FeatureFlagsPaginationMeta } from "./FeatureFlagsPaginationMeta";
import { FeatureFlagsPaginationMetaPage } from "./FeatureFlagsPaginationMetaPage";
import { GuardrailMetric } from "./GuardrailMetric";
import { GuardrailMetricRequest } from "./GuardrailMetricRequest";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ListAllocationsResponse } from "./ListAllocationsResponse";
import { ListEnvironmentsResponse } from "./ListEnvironmentsResponse";
import { ListFeatureFlagHistoryResponse } from "./ListFeatureFlagHistoryResponse";
import { ListFeatureFlagsResponse } from "./ListFeatureFlagsResponse";
import { OverwriteAllocationsRequest } from "./OverwriteAllocationsRequest";
import { PatchSavedFilterAttributes } from "./PatchSavedFilterAttributes";
import { PatchSavedFilterData } from "./PatchSavedFilterData";
import { PatchSavedFilterRequest } from "./PatchSavedFilterRequest";
import { RolloutOptions } from "./RolloutOptions";
import { RolloutOptionsRequest } from "./RolloutOptionsRequest";
import { SavedFilterAPIErrorResponse } from "./SavedFilterAPIErrorResponse";
import { SavedFilterApprovalConflictAttributes } from "./SavedFilterApprovalConflictAttributes";
import { SavedFilterApprovalConflictData } from "./SavedFilterApprovalConflictData";
import { SavedFilterApprovalConflictResponse } from "./SavedFilterApprovalConflictResponse";
import { SavedFilterAttributes } from "./SavedFilterAttributes";
import { SavedFilterCondition } from "./SavedFilterCondition";
import { SavedFilterConditionRequest } from "./SavedFilterConditionRequest";
import { SavedFilterData } from "./SavedFilterData";
import { SavedFilterFlagReference } from "./SavedFilterFlagReference";
import { SavedFilterJSONAPIErrorResponse } from "./SavedFilterJSONAPIErrorResponse";
import { SavedFilterPermissionDeniedAttributes } from "./SavedFilterPermissionDeniedAttributes";
import { SavedFilterPermissionDeniedData } from "./SavedFilterPermissionDeniedData";
import { SavedFilterPermissionDeniedResponse } from "./SavedFilterPermissionDeniedResponse";
import { SavedFilterResponse } from "./SavedFilterResponse";
import { SavedFilterTargetingRule } from "./SavedFilterTargetingRule";
import { SavedFilterTargetingRuleRequest } from "./SavedFilterTargetingRuleRequest";
import { TargetingRule } from "./TargetingRule";
import { TargetingRuleRequest } from "./TargetingRuleRequest";
import { UpdateEnvironmentAttributes } from "./UpdateEnvironmentAttributes";
import { UpdateEnvironmentData } from "./UpdateEnvironmentData";
import { UpdateEnvironmentRequest } from "./UpdateEnvironmentRequest";
import { UpdateFeatureFlagAttributes } from "./UpdateFeatureFlagAttributes";
import { UpdateFeatureFlagData } from "./UpdateFeatureFlagData";
import { UpdateFeatureFlagRequest } from "./UpdateFeatureFlagRequest";
import { UpdateVariantRequest } from "./UpdateVariantRequest";
import { UpsertAllocationRequest } from "./UpsertAllocationRequest";
import { Variant } from "./Variant";
import { VariantWeight } from "./VariantWeight";
import { VariantWeightRequest } from "./VariantWeightRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AllocationDataType: ["allocations"],
    AllocationExposureScheduleDataType: ["allocation_exposure_schedules"],
    AllocationType: ["FEATURE_GATE", "CANARY"],
    ConditionOperator: [
      "LT",
      "LTE",
      "GT",
      "GTE",
      "MATCHES",
      "NOT_MATCHES",
      "ONE_OF",
      "NOT_ONE_OF",
      "IS_NULL",
      "EQUALS",
    ],
    CreateEnvironmentDataType: ["environments"],
    CreateFeatureFlagDataType: ["feature-flags"],
    CreateFeatureFlagStalenessStatus: ["ACTIVE", "PERMANENT"],
    FeatureFlagChangeEventAction: [
      "created",
      "updated",
      "deleted",
      "archived",
      "unarchived",
      "scheduled",
      "started",
      "paused",
      "unpaused",
      "stopped",
    ],
    FeatureFlagChangeEventCreationSource: ["UI", "MCP"],
    FeatureFlagChangeEventProperty: [
      "FLAG",
      "FLAG_NAME",
      "FLAG_DESCRIPTION",
      "JSON_SCHEMA",
      "DISTRIBUTION_CHANNEL",
      "REQUIRE_APPROVAL",
      "VARIANT",
      "VARIANT_NAME",
      "VARIANT_VALUE",
      "ALLOCATIONS",
      "ROLLOUT",
      "ENVIRONMENT_STATUS",
      "DEFAULT_VARIANT",
      "OVERRIDE_VARIANT",
      "STALENESS_STATUS",
      "SAVED_FILTER",
    ],
    FeatureFlagChangeEventSuggestionLifecycleStatus: [
      "pending",
      "approved",
      "applied",
      "rejected",
      "discarded",
    ],
    FeatureFlagChangeEventSuggestionStatus: ["pending", "approved", "rejected"],
    FeatureFlagChangeEventType: ["change-events"],
    FeatureFlagDistributionChannel: ["ALL", "CLIENT", "SERVER"],
    FeatureFlagProductionStatus: ["ENABLED", "DISABLED", "OVERRIDDEN"],
    FeatureFlagStalenessStatus: ["ACTIVE", "STALE", "PERMANENT"],
    FeatureFlagStalenessStatusOverride: ["STALE", "PERMANENT"],
    FeatureFlagStatus: ["ENABLED", "DISABLED"],
    GuardrailTriggerAction: ["PAUSE", "ABORT"],
    RolloutStrategy: ["UNIFORM_INTERVALS", "NO_ROLLOUT"],
    SavedFilterApprovalConflictType: ["update-approval-conflict"],
    SavedFilterConditionOperator: [
      "LT",
      "LTE",
      "GT",
      "GTE",
      "MATCHES",
      "NOT_MATCHES",
      "ONE_OF",
      "NOT_ONE_OF",
      "IS_NULL",
      "EQUALS",
      "SEMVER_EQ",
      "SEMVER_NEQ",
      "SEMVER_LT",
      "SEMVER_LTE",
      "SEMVER_GT",
      "SEMVER_GTE",
    ],
    SavedFilterCreationType: ["RULES", "LIST"],
    SavedFilterDataType: ["saved-filters"],
    SavedFilterPermissionDeniedType: ["update-grace-denied"],
    UpdateEnvironmentDataType: ["environments"],
    UpdateFeatureFlagDataType: ["feature-flags"],
    ValueType: ["BOOLEAN", "INTEGER", "NUMERIC", "STRING", "JSON"],
  },
  oneOfMap: {
    PatchSavedFilterConflictResponse: [
      "SavedFilterJSONAPIErrorResponse",
      "SavedFilterApprovalConflictResponse",
    ],
    PatchSavedFilterForbiddenResponse: [
      "SavedFilterAPIErrorResponse",
      "SavedFilterJSONAPIErrorResponse",
      "SavedFilterPermissionDeniedResponse",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Allocation: Allocation,
    AllocationDataRequest: AllocationDataRequest,
    AllocationDataResponse: AllocationDataResponse,
    AllocationExposureGuardrailTrigger: AllocationExposureGuardrailTrigger,
    AllocationExposureRolloutStep: AllocationExposureRolloutStep,
    AllocationExposureSchedule: AllocationExposureSchedule,
    AllocationExposureScheduleData: AllocationExposureScheduleData,
    AllocationExposureScheduleResponse: AllocationExposureScheduleResponse,
    AllocationResponse: AllocationResponse,
    Condition: Condition,
    ConditionRequest: ConditionRequest,
    CreateAllocationsRequest: CreateAllocationsRequest,
    CreateEnvironmentAttributes: CreateEnvironmentAttributes,
    CreateEnvironmentData: CreateEnvironmentData,
    CreateEnvironmentRequest: CreateEnvironmentRequest,
    CreateFeatureFlagAttributes: CreateFeatureFlagAttributes,
    CreateFeatureFlagData: CreateFeatureFlagData,
    CreateFeatureFlagRequest: CreateFeatureFlagRequest,
    CreateVariant: CreateVariant,
    Environment: Environment,
    EnvironmentAttributes: EnvironmentAttributes,
    EnvironmentResponse: EnvironmentResponse,
    EnvironmentsPaginationMeta: EnvironmentsPaginationMeta,
    EnvironmentsPaginationMetaPage: EnvironmentsPaginationMetaPage,
    ExposureRolloutStepRequest: ExposureRolloutStepRequest,
    ExposureScheduleRequest: ExposureScheduleRequest,
    FeatureFlag: FeatureFlag,
    FeatureFlagAttributes: FeatureFlagAttributes,
    FeatureFlagChangeEvent: FeatureFlagChangeEvent,
    FeatureFlagChangeEventAttributes: FeatureFlagChangeEventAttributes,
    FeatureFlagChangeEventEnvironment: FeatureFlagChangeEventEnvironment,
    FeatureFlagChangeEventFlag: FeatureFlagChangeEventFlag,
    FeatureFlagChangeEventSuggestionReview:
      FeatureFlagChangeEventSuggestionReview,
    FeatureFlagEnvironment: FeatureFlagEnvironment,
    FeatureFlagEnvironmentListItem: FeatureFlagEnvironmentListItem,
    FeatureFlagHistoryPaginationMeta: FeatureFlagHistoryPaginationMeta,
    FeatureFlagHistoryPaginationMetaPage: FeatureFlagHistoryPaginationMetaPage,
    FeatureFlagListItem: FeatureFlagListItem,
    FeatureFlagListItemAttributes: FeatureFlagListItemAttributes,
    FeatureFlagResponse: FeatureFlagResponse,
    FeatureFlagStalenessCodeReference: FeatureFlagStalenessCodeReference,
    FeatureFlagStalenessDetails: FeatureFlagStalenessDetails,
    FeatureFlagStalenessRecommendedAction:
      FeatureFlagStalenessRecommendedAction,
    FeatureFlagsPaginationLinks: FeatureFlagsPaginationLinks,
    FeatureFlagsPaginationMeta: FeatureFlagsPaginationMeta,
    FeatureFlagsPaginationMetaPage: FeatureFlagsPaginationMetaPage,
    GuardrailMetric: GuardrailMetric,
    GuardrailMetricRequest: GuardrailMetricRequest,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ListAllocationsResponse: ListAllocationsResponse,
    ListEnvironmentsResponse: ListEnvironmentsResponse,
    ListFeatureFlagHistoryResponse: ListFeatureFlagHistoryResponse,
    ListFeatureFlagsResponse: ListFeatureFlagsResponse,
    OverwriteAllocationsRequest: OverwriteAllocationsRequest,
    PatchSavedFilterAttributes: PatchSavedFilterAttributes,
    PatchSavedFilterData: PatchSavedFilterData,
    PatchSavedFilterRequest: PatchSavedFilterRequest,
    RolloutOptions: RolloutOptions,
    RolloutOptionsRequest: RolloutOptionsRequest,
    SavedFilterAPIErrorResponse: SavedFilterAPIErrorResponse,
    SavedFilterApprovalConflictAttributes:
      SavedFilterApprovalConflictAttributes,
    SavedFilterApprovalConflictData: SavedFilterApprovalConflictData,
    SavedFilterApprovalConflictResponse: SavedFilterApprovalConflictResponse,
    SavedFilterAttributes: SavedFilterAttributes,
    SavedFilterCondition: SavedFilterCondition,
    SavedFilterConditionRequest: SavedFilterConditionRequest,
    SavedFilterData: SavedFilterData,
    SavedFilterFlagReference: SavedFilterFlagReference,
    SavedFilterJSONAPIErrorResponse: SavedFilterJSONAPIErrorResponse,
    SavedFilterPermissionDeniedAttributes:
      SavedFilterPermissionDeniedAttributes,
    SavedFilterPermissionDeniedData: SavedFilterPermissionDeniedData,
    SavedFilterPermissionDeniedResponse: SavedFilterPermissionDeniedResponse,
    SavedFilterResponse: SavedFilterResponse,
    SavedFilterTargetingRule: SavedFilterTargetingRule,
    SavedFilterTargetingRuleRequest: SavedFilterTargetingRuleRequest,
    TargetingRule: TargetingRule,
    TargetingRuleRequest: TargetingRuleRequest,
    UpdateEnvironmentAttributes: UpdateEnvironmentAttributes,
    UpdateEnvironmentData: UpdateEnvironmentData,
    UpdateEnvironmentRequest: UpdateEnvironmentRequest,
    UpdateFeatureFlagAttributes: UpdateFeatureFlagAttributes,
    UpdateFeatureFlagData: UpdateFeatureFlagData,
    UpdateFeatureFlagRequest: UpdateFeatureFlagRequest,
    UpdateVariantRequest: UpdateVariantRequest,
    UpsertAllocationRequest: UpsertAllocationRequest,
    Variant: Variant,
    VariantWeight: VariantWeight,
    VariantWeightRequest: VariantWeightRequest,
  },
};
