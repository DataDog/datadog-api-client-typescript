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
import { CreateFlagSuggestionAttributes } from "./CreateFlagSuggestionAttributes";
import { CreateFlagSuggestionData } from "./CreateFlagSuggestionData";
import { CreateFlagSuggestionRequest } from "./CreateFlagSuggestionRequest";
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
import { FeatureFlagEnvironment } from "./FeatureFlagEnvironment";
import { FeatureFlagEnvironmentListItem } from "./FeatureFlagEnvironmentListItem";
import { FeatureFlagListItem } from "./FeatureFlagListItem";
import { FeatureFlagListItemAttributes } from "./FeatureFlagListItemAttributes";
import { FeatureFlagResponse } from "./FeatureFlagResponse";
import { FeatureFlagsPaginationMeta } from "./FeatureFlagsPaginationMeta";
import { FeatureFlagsPaginationMetaPage } from "./FeatureFlagsPaginationMetaPage";
import { FlagSuggestion } from "./FlagSuggestion";
import { FlagSuggestionAttributes } from "./FlagSuggestionAttributes";
import { FlagSuggestionResponse } from "./FlagSuggestionResponse";
import { GuardrailMetric } from "./GuardrailMetric";
import { GuardrailMetricRequest } from "./GuardrailMetricRequest";
import { ListAllocationsResponse } from "./ListAllocationsResponse";
import { ListEnvironmentsResponse } from "./ListEnvironmentsResponse";
import { ListFeatureFlagsResponse } from "./ListFeatureFlagsResponse";
import { OverwriteAllocationsRequest } from "./OverwriteAllocationsRequest";
import { ReviewFlagSuggestionAttributes } from "./ReviewFlagSuggestionAttributes";
import { ReviewFlagSuggestionData } from "./ReviewFlagSuggestionData";
import { ReviewFlagSuggestionRequest } from "./ReviewFlagSuggestionRequest";
import { RolloutOptions } from "./RolloutOptions";
import { RolloutOptionsRequest } from "./RolloutOptionsRequest";
import { SuggestionMetadata } from "./SuggestionMetadata";
import { TargetingRule } from "./TargetingRule";
import { TargetingRuleRequest } from "./TargetingRuleRequest";
import { UpdateEnvironmentAttributes } from "./UpdateEnvironmentAttributes";
import { UpdateEnvironmentData } from "./UpdateEnvironmentData";
import { UpdateEnvironmentRequest } from "./UpdateEnvironmentRequest";
import { UpdateFeatureFlagAttributes } from "./UpdateFeatureFlagAttributes";
import { UpdateFeatureFlagData } from "./UpdateFeatureFlagData";
import { UpdateFeatureFlagRequest } from "./UpdateFeatureFlagRequest";
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
    FeatureFlagStatus: ["ENABLED", "DISABLED"],
    FlagSuggestionAction: [
      "created",
      "updated",
      "deleted",
      "archived",
      "unarchived",
      "started",
      "stopped",
      "paused",
      "unpaused",
    ],
    FlagSuggestionDataType: ["flag-suggestions"],
    FlagSuggestionEventDataType: ["flag-suggestion-events"],
    FlagSuggestionProperty: [
      "FLAG",
      "FLAG_NAME",
      "FLAG_DESCRIPTION",
      "JSON_SCHEMA",
      "DISTRIBUTION_CHANNEL",
      "VARIANT",
      "VARIANT_NAME",
      "VARIANT_VALUE",
      "ALLOCATIONS",
      "ROLLOUT",
      "ENVIRONMENT_STATUS",
      "DEFAULT_VARIANT",
      "OVERRIDE_VARIANT",
    ],
    FlagSuggestionStatus: ["pending", "rejected", "approved"],
    GuardrailTriggerAction: ["PAUSE", "ABORT"],
    RolloutStrategy: ["UNIFORM_INTERVALS", "NO_ROLLOUT"],
    UpdateEnvironmentDataType: ["environments"],
    UpdateFeatureFlagDataType: ["feature-flags"],
    ValueType: ["BOOLEAN", "INTEGER", "NUMERIC", "STRING", "JSON"],
  },
  oneOfMap: {},
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
    CreateFlagSuggestionAttributes: CreateFlagSuggestionAttributes,
    CreateFlagSuggestionData: CreateFlagSuggestionData,
    CreateFlagSuggestionRequest: CreateFlagSuggestionRequest,
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
    FeatureFlagEnvironment: FeatureFlagEnvironment,
    FeatureFlagEnvironmentListItem: FeatureFlagEnvironmentListItem,
    FeatureFlagListItem: FeatureFlagListItem,
    FeatureFlagListItemAttributes: FeatureFlagListItemAttributes,
    FeatureFlagResponse: FeatureFlagResponse,
    FeatureFlagsPaginationMeta: FeatureFlagsPaginationMeta,
    FeatureFlagsPaginationMetaPage: FeatureFlagsPaginationMetaPage,
    FlagSuggestion: FlagSuggestion,
    FlagSuggestionAttributes: FlagSuggestionAttributes,
    FlagSuggestionResponse: FlagSuggestionResponse,
    GuardrailMetric: GuardrailMetric,
    GuardrailMetricRequest: GuardrailMetricRequest,
    ListAllocationsResponse: ListAllocationsResponse,
    ListEnvironmentsResponse: ListEnvironmentsResponse,
    ListFeatureFlagsResponse: ListFeatureFlagsResponse,
    OverwriteAllocationsRequest: OverwriteAllocationsRequest,
    ReviewFlagSuggestionAttributes: ReviewFlagSuggestionAttributes,
    ReviewFlagSuggestionData: ReviewFlagSuggestionData,
    ReviewFlagSuggestionRequest: ReviewFlagSuggestionRequest,
    RolloutOptions: RolloutOptions,
    RolloutOptionsRequest: RolloutOptionsRequest,
    SuggestionMetadata: SuggestionMetadata,
    TargetingRule: TargetingRule,
    TargetingRuleRequest: TargetingRuleRequest,
    UpdateEnvironmentAttributes: UpdateEnvironmentAttributes,
    UpdateEnvironmentData: UpdateEnvironmentData,
    UpdateEnvironmentRequest: UpdateEnvironmentRequest,
    UpdateFeatureFlagAttributes: UpdateFeatureFlagAttributes,
    UpdateFeatureFlagData: UpdateFeatureFlagData,
    UpdateFeatureFlagRequest: UpdateFeatureFlagRequest,
    UpsertAllocationRequest: UpsertAllocationRequest,
    Variant: Variant,
    VariantWeight: VariantWeight,
    VariantWeightRequest: VariantWeightRequest,
  },
};
