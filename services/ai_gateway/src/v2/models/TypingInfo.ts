import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AiGatewayBudgetAttributes } from "./AiGatewayBudgetAttributes";
import { AiGatewayBudgetCreateAttributes } from "./AiGatewayBudgetCreateAttributes";
import { AiGatewayBudgetCreateData } from "./AiGatewayBudgetCreateData";
import { AiGatewayBudgetCreateRequest } from "./AiGatewayBudgetCreateRequest";
import { AiGatewayBudgetInstanceAttributes } from "./AiGatewayBudgetInstanceAttributes";
import { AiGatewayBudgetInstanceCapacityOverrideAttributes } from "./AiGatewayBudgetInstanceCapacityOverrideAttributes";
import { AiGatewayBudgetInstanceCapacityOverrideData } from "./AiGatewayBudgetInstanceCapacityOverrideData";
import { AiGatewayBudgetInstanceCapacityOverrideRequest } from "./AiGatewayBudgetInstanceCapacityOverrideRequest";
import { AiGatewayBudgetInstanceDimensionAttributes } from "./AiGatewayBudgetInstanceDimensionAttributes";
import { AiGatewayBudgetInstanceDimensionListResponse } from "./AiGatewayBudgetInstanceDimensionListResponse";
import { AiGatewayBudgetInstanceDimensionResource } from "./AiGatewayBudgetInstanceDimensionResource";
import { AiGatewayBudgetInstanceDimensionValue } from "./AiGatewayBudgetInstanceDimensionValue";
import { AiGatewayBudgetInstanceListResponse } from "./AiGatewayBudgetInstanceListResponse";
import { AiGatewayBudgetInstanceResetAttributes } from "./AiGatewayBudgetInstanceResetAttributes";
import { AiGatewayBudgetInstanceResetData } from "./AiGatewayBudgetInstanceResetData";
import { AiGatewayBudgetInstanceResetRequest } from "./AiGatewayBudgetInstanceResetRequest";
import { AiGatewayBudgetInstanceResource } from "./AiGatewayBudgetInstanceResource";
import { AiGatewayBudgetInstanceResponse } from "./AiGatewayBudgetInstanceResponse";
import { AiGatewayBudgetInstancesSummaryAttributes } from "./AiGatewayBudgetInstancesSummaryAttributes";
import { AiGatewayBudgetInstancesSummaryResource } from "./AiGatewayBudgetInstancesSummaryResource";
import { AiGatewayBudgetInstancesSummaryResponse } from "./AiGatewayBudgetInstancesSummaryResponse";
import { AiGatewayBudgetListAttributes } from "./AiGatewayBudgetListAttributes";
import { AiGatewayBudgetListResource } from "./AiGatewayBudgetListResource";
import { AiGatewayBudgetListResponse } from "./AiGatewayBudgetListResponse";
import { AiGatewayBudgetPeriodAttributes } from "./AiGatewayBudgetPeriodAttributes";
import { AiGatewayBudgetPeriodResource } from "./AiGatewayBudgetPeriodResource";
import { AiGatewayBudgetPeriodResponse } from "./AiGatewayBudgetPeriodResponse";
import { AiGatewayBudgetResource } from "./AiGatewayBudgetResource";
import { AiGatewayBudgetResponse } from "./AiGatewayBudgetResponse";
import { AiGatewayBudgetSelectorEntry } from "./AiGatewayBudgetSelectorEntry";
import { AiGatewayBudgetUpdateAttributes } from "./AiGatewayBudgetUpdateAttributes";
import { AiGatewayBudgetUpdateData } from "./AiGatewayBudgetUpdateData";
import { AiGatewayBudgetUpdateRequest } from "./AiGatewayBudgetUpdateRequest";
import { AiGatewayCaptureConfigurationResponse } from "./AiGatewayCaptureConfigurationResponse";
import { AiGatewayCaptureConfigurationResponseData } from "./AiGatewayCaptureConfigurationResponseData";
import { AiGatewayCaptureConfigurationResponseDataAttributes } from "./AiGatewayCaptureConfigurationResponseDataAttributes";
import { AiGatewayCaptureCreateRequest } from "./AiGatewayCaptureCreateRequest";
import { AiGatewayCaptureCreateRequestData } from "./AiGatewayCaptureCreateRequestData";
import { AiGatewayCaptureCreateRequestDataAttributes } from "./AiGatewayCaptureCreateRequestDataAttributes";
import { AiGatewayCaptureDeleteRequest } from "./AiGatewayCaptureDeleteRequest";
import { AiGatewayCaptureDeleteRequestData } from "./AiGatewayCaptureDeleteRequestData";
import { AiGatewayCaptureDeleteRequestDataAttributes } from "./AiGatewayCaptureDeleteRequestDataAttributes";
import { AiGatewayCaptureOverride } from "./AiGatewayCaptureOverride";
import { AiGatewayCaptureOverrideResponse } from "./AiGatewayCaptureOverrideResponse";
import { AiGatewayCaptureOverrideResponseData } from "./AiGatewayCaptureOverrideResponseData";
import { AiGatewayCaptureOverrideResponseDataAttributes } from "./AiGatewayCaptureOverrideResponseDataAttributes";
import { AiGatewayCaptureResponseScope } from "./AiGatewayCaptureResponseScope";
import { AiGatewayCaptureScope } from "./AiGatewayCaptureScope";
import { AiGatewayCaptureUpdateRequest } from "./AiGatewayCaptureUpdateRequest";
import { AiGatewayCaptureUpdateRequestData } from "./AiGatewayCaptureUpdateRequestData";
import { AiGatewayCaptureUpdateRequestDataAttributes } from "./AiGatewayCaptureUpdateRequestDataAttributes";
import { AiGatewayDiscoveredModelAttributes } from "./AiGatewayDiscoveredModelAttributes";
import { AiGatewayDiscoveredModelListResponse } from "./AiGatewayDiscoveredModelListResponse";
import { AiGatewayDiscoveredModelResource } from "./AiGatewayDiscoveredModelResource";
import { AiGatewayGovernanceAttributes } from "./AiGatewayGovernanceAttributes";
import { AiGatewayGovernanceReplaceAttributes } from "./AiGatewayGovernanceReplaceAttributes";
import { AiGatewayGovernanceReplaceData } from "./AiGatewayGovernanceReplaceData";
import { AiGatewayGovernanceReplaceRequest } from "./AiGatewayGovernanceReplaceRequest";
import { AiGatewayGovernanceResource } from "./AiGatewayGovernanceResource";
import { AiGatewayGovernanceResponse } from "./AiGatewayGovernanceResponse";
import { AiGatewayModelCapabilities } from "./AiGatewayModelCapabilities";
import { AiGatewayModelCatalogEntryAttributes } from "./AiGatewayModelCatalogEntryAttributes";
import { AiGatewayModelCatalogEntryIdentifier } from "./AiGatewayModelCatalogEntryIdentifier";
import { AiGatewayModelCatalogEntryListResponse } from "./AiGatewayModelCatalogEntryListResponse";
import { AiGatewayModelCatalogEntryResource } from "./AiGatewayModelCatalogEntryResource";
import { AiGatewayModelCatalogEntryResponse } from "./AiGatewayModelCatalogEntryResponse";
import { AiGatewayModelCreateAttributes } from "./AiGatewayModelCreateAttributes";
import { AiGatewayModelCreateData } from "./AiGatewayModelCreateData";
import { AiGatewayModelCreateRequest } from "./AiGatewayModelCreateRequest";
import { AiGatewayModelGroupAttributes } from "./AiGatewayModelGroupAttributes";
import { AiGatewayModelGroupBinding } from "./AiGatewayModelGroupBinding";
import { AiGatewayModelGroupCreateAttributes } from "./AiGatewayModelGroupCreateAttributes";
import { AiGatewayModelGroupCreateData } from "./AiGatewayModelGroupCreateData";
import { AiGatewayModelGroupCreateRequest } from "./AiGatewayModelGroupCreateRequest";
import { AiGatewayModelGroupListResponse } from "./AiGatewayModelGroupListResponse";
import { AiGatewayModelGroupModel } from "./AiGatewayModelGroupModel";
import { AiGatewayModelGroupProvider } from "./AiGatewayModelGroupProvider";
import { AiGatewayModelGroupResource } from "./AiGatewayModelGroupResource";
import { AiGatewayModelGroupResponse } from "./AiGatewayModelGroupResponse";
import { AiGatewayModelGroupRoutingRule } from "./AiGatewayModelGroupRoutingRule";
import { AiGatewayModelGroupUpdateAttributes } from "./AiGatewayModelGroupUpdateAttributes";
import { AiGatewayModelGroupUpdateData } from "./AiGatewayModelGroupUpdateData";
import { AiGatewayModelGroupUpdateRequest } from "./AiGatewayModelGroupUpdateRequest";
import { AiGatewayModelInput } from "./AiGatewayModelInput";
import { AiGatewayModelLimits } from "./AiGatewayModelLimits";
import { AiGatewayModelMetadata } from "./AiGatewayModelMetadata";
import { AiGatewayModelMetadataSource } from "./AiGatewayModelMetadataSource";
import { AiGatewayModelModalities } from "./AiGatewayModelModalities";
import { AiGatewayModelPricingAttributes } from "./AiGatewayModelPricingAttributes";
import { AiGatewayModelPricingCatalogRequestConfig } from "./AiGatewayModelPricingCatalogRequestConfig";
import { AiGatewayModelPricingCatalogRequestSource } from "./AiGatewayModelPricingCatalogRequestSource";
import { AiGatewayModelPricingConfig } from "./AiGatewayModelPricingConfig";
import { AiGatewayModelPricingCustomRequestConfig } from "./AiGatewayModelPricingCustomRequestConfig";
import { AiGatewayModelPricingCustomRequestSource } from "./AiGatewayModelPricingCustomRequestSource";
import { AiGatewayModelPricingRates } from "./AiGatewayModelPricingRates";
import { AiGatewayModelPricingRequest } from "./AiGatewayModelPricingRequest";
import { AiGatewayModelPricingRequestAttributes } from "./AiGatewayModelPricingRequestAttributes";
import { AiGatewayModelPricingRequestData } from "./AiGatewayModelPricingRequestData";
import { AiGatewayModelPricingRequiredRates } from "./AiGatewayModelPricingRequiredRates";
import { AiGatewayModelPricingResponse } from "./AiGatewayModelPricingResponse";
import { AiGatewayModelPricingResponseData } from "./AiGatewayModelPricingResponseData";
import { AiGatewayModelPricingSource } from "./AiGatewayModelPricingSource";
import { AiGatewayModelReasoning } from "./AiGatewayModelReasoning";
import { AiGatewayModelReasoningControl } from "./AiGatewayModelReasoningControl";
import { AiGatewayModelReferencePrice } from "./AiGatewayModelReferencePrice";
import { AiGatewayModelUpdateAttributes } from "./AiGatewayModelUpdateAttributes";
import { AiGatewayModelUpdateData } from "./AiGatewayModelUpdateData";
import { AiGatewayModelUpdateRequest } from "./AiGatewayModelUpdateRequest";
import { AiGatewayModelsBulkCreateAttributes } from "./AiGatewayModelsBulkCreateAttributes";
import { AiGatewayModelsBulkCreateData } from "./AiGatewayModelsBulkCreateData";
import { AiGatewayModelsBulkCreateRequest } from "./AiGatewayModelsBulkCreateRequest";
import { AiGatewayModelsByCanonicalAttributes } from "./AiGatewayModelsByCanonicalAttributes";
import { AiGatewayModelsByCanonicalListResponse } from "./AiGatewayModelsByCanonicalListResponse";
import { AiGatewayModelsByCanonicalResource } from "./AiGatewayModelsByCanonicalResource";
import { AiGatewayPolicyAttributes } from "./AiGatewayPolicyAttributes";
import { AiGatewayPolicyListResponse } from "./AiGatewayPolicyListResponse";
import { AiGatewayPolicyRequest } from "./AiGatewayPolicyRequest";
import { AiGatewayPolicyRequestAttributes } from "./AiGatewayPolicyRequestAttributes";
import { AiGatewayPolicyRequestData } from "./AiGatewayPolicyRequestData";
import { AiGatewayPolicyResource } from "./AiGatewayPolicyResource";
import { AiGatewayPolicyResponse } from "./AiGatewayPolicyResponse";
import { AiGatewayPolicyTarget } from "./AiGatewayPolicyTarget";
import { AiGatewayPolicyTargetRequest } from "./AiGatewayPolicyTargetRequest";
import { AiGatewayPolicyTier } from "./AiGatewayPolicyTier";
import { AiGatewayPolicyTierRequest } from "./AiGatewayPolicyTierRequest";
import { AiGatewayProviderAttributes } from "./AiGatewayProviderAttributes";
import { AiGatewayProviderCreateAttributes } from "./AiGatewayProviderCreateAttributes";
import { AiGatewayProviderCreateData } from "./AiGatewayProviderCreateData";
import { AiGatewayProviderCreateRequest } from "./AiGatewayProviderCreateRequest";
import { AiGatewayProviderInitialBinding } from "./AiGatewayProviderInitialBinding";
import { AiGatewayProviderIntegrationConfig } from "./AiGatewayProviderIntegrationConfig";
import { AiGatewayProviderListResponse } from "./AiGatewayProviderListResponse";
import { AiGatewayProviderModelEntry } from "./AiGatewayProviderModelEntry";
import { AiGatewayProviderModelsRelationship } from "./AiGatewayProviderModelsRelationship";
import { AiGatewayProviderRelationships } from "./AiGatewayProviderRelationships";
import { AiGatewayProviderResource } from "./AiGatewayProviderResource";
import { AiGatewayProviderResponse } from "./AiGatewayProviderResponse";
import { AiGatewayProviderUpdateAttributes } from "./AiGatewayProviderUpdateAttributes";
import { AiGatewayProviderUpdateData } from "./AiGatewayProviderUpdateData";
import { AiGatewayProviderUpdateRequest } from "./AiGatewayProviderUpdateRequest";
import { AiGatewayRateLimitAttributes } from "./AiGatewayRateLimitAttributes";
import { AiGatewayRateLimitCreateAttributes } from "./AiGatewayRateLimitCreateAttributes";
import { AiGatewayRateLimitCreateData } from "./AiGatewayRateLimitCreateData";
import { AiGatewayRateLimitCreateRequest } from "./AiGatewayRateLimitCreateRequest";
import { AiGatewayRateLimitListResponse } from "./AiGatewayRateLimitListResponse";
import { AiGatewayRateLimitResource } from "./AiGatewayRateLimitResource";
import { AiGatewayRateLimitResponse } from "./AiGatewayRateLimitResponse";
import { AiGatewayRateLimitUpdateAttributes } from "./AiGatewayRateLimitUpdateAttributes";
import { AiGatewayRateLimitUpdateData } from "./AiGatewayRateLimitUpdateData";
import { AiGatewayRateLimitUpdateRequest } from "./AiGatewayRateLimitUpdateRequest";
import { AiGatewayRateLimitUsageAttributes } from "./AiGatewayRateLimitUsageAttributes";
import { AiGatewayRateLimitUsageListResponse } from "./AiGatewayRateLimitUsageListResponse";
import { AiGatewayRateLimitUsageResource } from "./AiGatewayRateLimitUsageResource";
import { AiGatewayRestrictedDetailsMeta } from "./AiGatewayRestrictedDetailsMeta";
import { AiGatewayRoutingClassifier } from "./AiGatewayRoutingClassifier";
import { AiGatewayRoutingClassifierRequest } from "./AiGatewayRoutingClassifierRequest";
import { AiGatewayRoutingRuleAttributes } from "./AiGatewayRoutingRuleAttributes";
import { AiGatewayRoutingRuleCreateAttributes } from "./AiGatewayRoutingRuleCreateAttributes";
import { AiGatewayRoutingRuleCreateData } from "./AiGatewayRoutingRuleCreateData";
import { AiGatewayRoutingRuleCreateRequest } from "./AiGatewayRoutingRuleCreateRequest";
import { AiGatewayRoutingRuleListResponse } from "./AiGatewayRoutingRuleListResponse";
import { AiGatewayRoutingRuleReplaceAttributes } from "./AiGatewayRoutingRuleReplaceAttributes";
import { AiGatewayRoutingRuleReplaceData } from "./AiGatewayRoutingRuleReplaceData";
import { AiGatewayRoutingRuleReplaceRequest } from "./AiGatewayRoutingRuleReplaceRequest";
import { AiGatewayRoutingRuleResource } from "./AiGatewayRoutingRuleResource";
import { AiGatewayRoutingRuleResponse } from "./AiGatewayRoutingRuleResponse";
import { AiGatewayRoutingRuleTarget } from "./AiGatewayRoutingRuleTarget";
import { AiGatewayRoutingRuleTargetRequest } from "./AiGatewayRoutingRuleTargetRequest";
import { AiGatewayRoutingRuleTier } from "./AiGatewayRoutingRuleTier";
import { AiGatewayRoutingRuleTierRequest } from "./AiGatewayRoutingRuleTierRequest";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AiGatewayBudgetEnforcement: ["BLOCK", "NOTIFY"],
    AiGatewayBudgetInstanceDimensionType: ["budget-instance-dimensions"],
    AiGatewayBudgetInstanceSort: ["spend_desc", "spend_asc", "key_asc"],
    AiGatewayBudgetInstanceType: ["budget-instances"],
    AiGatewayBudgetInstancesSummaryType: ["budget-instances-summary"],
    AiGatewayBudgetPeriodType: ["budget-periods"],
    AiGatewayBudgetType: ["budgets"],
    AiGatewayBudgetWindowPolicy: ["DAILY", "WEEKLY", "MONTHLY"],
    AiGatewayCaptureConfigurationResponseDataAttributesDefaultMode: [
      "metadata_only",
      "full_capture",
    ],
    AiGatewayCaptureConfigurationResponseDataType: [
      "data-capture-configurations",
    ],
    AiGatewayCaptureCreateRequestDataAttributesMode: [
      "metadata_only",
      "full_capture",
    ],
    AiGatewayCaptureCreateRequestDataAttributesOperation: [
      "create",
      "replace",
      "delete",
    ],
    AiGatewayCaptureCreateRequestDataType: ["data-capture-overrides"],
    AiGatewayCaptureDeleteRequestDataAttributesMode: [
      "metadata_only",
      "full_capture",
    ],
    AiGatewayCaptureDeleteRequestDataAttributesOperation: [
      "create",
      "replace",
      "delete",
    ],
    AiGatewayCaptureDeleteRequestDataType: ["data-capture-overrides"],
    AiGatewayCaptureOverrideMode: ["metadata_only", "full_capture"],
    AiGatewayCaptureOverrideResponseDataAttributesMode: [
      "metadata_only",
      "full_capture",
    ],
    AiGatewayCaptureOverrideResponseDataType: ["data-capture-overrides"],
    AiGatewayCaptureUpdateRequestDataAttributesMode: [
      "metadata_only",
      "full_capture",
    ],
    AiGatewayCaptureUpdateRequestDataAttributesOperation: [
      "create",
      "replace",
      "delete",
    ],
    AiGatewayCaptureUpdateRequestDataType: ["data-capture-overrides"],
    AiGatewayCustomProviderSupportedOperation: [
      "OPENAI_CHAT_COMPLETIONS",
      "OPENAI_RESPONSES",
      "ANTHROPIC_MESSAGES",
    ],
    AiGatewayDataCaptureMode: ["metadata_only", "full_capture"],
    AiGatewayDiscoveredModelType: ["provider-models"],
    AiGatewayGovernanceType: ["governance"],
    AiGatewayKnownProvider: [
      "custom",
      "anthropic",
      "openai",
      "azure_openai",
      "bedrock",
      "gemini",
      "baseten",
      "fireworks",
      "together",
      "typesafe",
      "azure_foundry",
    ],
    AiGatewayMaxReasoningLevel: [
      "none",
      "minimal",
      "low",
      "medium",
      "high",
      "xhigh",
      "max",
    ],
    AiGatewayMetadataCaptureItem: [
      "tool_usage",
      "tool_output_size",
      "tool_names",
      "conversation_shape",
      "input_size_by_role",
      "available_tools",
      "generation_settings",
    ],
    AiGatewayModelCatalogEntryType: ["model-catalog-entries"],
    AiGatewayModelGroupBindingRelation: ["viewer", "runner", "editor"],
    AiGatewayModelGroupType: ["model-groups"],
    AiGatewayModelMetadataKind: [
      "language",
      "embedding",
      "image",
      "audio",
      "decision",
      "reranking",
    ],
    AiGatewayModelMetadataLifecycle: ["active", "alpha", "beta", "deprecated"],
    AiGatewayModelMetadataSourceMatchedBy: [
      "override",
      "wire_id",
      "canonical_id",
      "wire_id_date_suffix",
      "canonical_model",
    ],
    AiGatewayModelMetadataStatus: ["available", "partial"],
    AiGatewayModelPricingCatalogRequestSourceType: ["catalog"],
    AiGatewayModelPricingCustomRequestSourceType: ["custom"],
    AiGatewayModelPricingEffectiveSource: [
      "catalog_auto",
      "model_override",
      "unknown",
    ],
    AiGatewayModelPricingSourceType: ["catalog", "custom"],
    AiGatewayModelPricingType: ["model-pricing"],
    AiGatewayModelReasoningControlType: ["toggle", "effort", "budget_tokens"],
    AiGatewayModelSource: ["discovered", "manual"],
    AiGatewayModelsByCanonicalType: ["models-by-canonical"],
    AiGatewayNullableMaxReasoningLevel: [
      "none",
      "minimal",
      "low",
      "medium",
      "high",
      "xhigh",
      "max",
    ],
    AiGatewayNullableRoutingRuleTierOrdering: [
      "configured",
      "weighted_affinity",
      "classified",
    ],
    AiGatewayPolicyType: ["routing-documents"],
    AiGatewayProviderInitialBindingRelation: ["viewer", "editor"],
    AiGatewayProviderType: ["providers"],
    AiGatewayRateLimitMode: ["ALERT", "ENFORCE"],
    AiGatewayRateLimitType: ["rate-limits"],
    AiGatewayRateLimitUsageType: ["rate-limit-usage"],
    AiGatewayRoutingReasoningLevel: [
      "none",
      "minimal",
      "low",
      "medium",
      "high",
      "xhigh",
      "max",
    ],
    AiGatewayRoutingRuleTargetType: ["model", "routing-rule"],
    AiGatewayRoutingRuleTierOrdering: [
      "configured",
      "weighted_affinity",
      "classified",
    ],
    AiGatewayRoutingRuleTierOrderingIssue: ["mixed", "unknown"],
    AiGatewayRoutingRuleType: ["routing-rules"],
    AiGatewaySupportedOperation: [
      "ANTHROPIC_MESSAGES",
      "ANTHROPIC_COUNT_TOKENS",
      "OPENAI_CHAT_COMPLETIONS",
      "OPENAI_RESPONSES",
      "OPENAI_WEB_SEARCH",
      "OPENAI_EMBEDDINGS",
      "GEMINI_GENERATE_CONTENT",
      "GEMINI_RAW_PREDICTIONS",
    ],
    AiGatewayZDRMode: ["off", "required"],
  },
  oneOfMap: {
    AiGatewayModelPricingRequestConfig: [
      "AiGatewayModelPricingCustomRequestConfig",
      "AiGatewayModelPricingCatalogRequestConfig",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AiGatewayBudgetAttributes: AiGatewayBudgetAttributes,
    AiGatewayBudgetCreateAttributes: AiGatewayBudgetCreateAttributes,
    AiGatewayBudgetCreateData: AiGatewayBudgetCreateData,
    AiGatewayBudgetCreateRequest: AiGatewayBudgetCreateRequest,
    AiGatewayBudgetInstanceAttributes: AiGatewayBudgetInstanceAttributes,
    AiGatewayBudgetInstanceCapacityOverrideAttributes:
      AiGatewayBudgetInstanceCapacityOverrideAttributes,
    AiGatewayBudgetInstanceCapacityOverrideData:
      AiGatewayBudgetInstanceCapacityOverrideData,
    AiGatewayBudgetInstanceCapacityOverrideRequest:
      AiGatewayBudgetInstanceCapacityOverrideRequest,
    AiGatewayBudgetInstanceDimensionAttributes:
      AiGatewayBudgetInstanceDimensionAttributes,
    AiGatewayBudgetInstanceDimensionListResponse:
      AiGatewayBudgetInstanceDimensionListResponse,
    AiGatewayBudgetInstanceDimensionResource:
      AiGatewayBudgetInstanceDimensionResource,
    AiGatewayBudgetInstanceDimensionValue:
      AiGatewayBudgetInstanceDimensionValue,
    AiGatewayBudgetInstanceListResponse: AiGatewayBudgetInstanceListResponse,
    AiGatewayBudgetInstanceResetAttributes:
      AiGatewayBudgetInstanceResetAttributes,
    AiGatewayBudgetInstanceResetData: AiGatewayBudgetInstanceResetData,
    AiGatewayBudgetInstanceResetRequest: AiGatewayBudgetInstanceResetRequest,
    AiGatewayBudgetInstanceResource: AiGatewayBudgetInstanceResource,
    AiGatewayBudgetInstanceResponse: AiGatewayBudgetInstanceResponse,
    AiGatewayBudgetInstancesSummaryAttributes:
      AiGatewayBudgetInstancesSummaryAttributes,
    AiGatewayBudgetInstancesSummaryResource:
      AiGatewayBudgetInstancesSummaryResource,
    AiGatewayBudgetInstancesSummaryResponse:
      AiGatewayBudgetInstancesSummaryResponse,
    AiGatewayBudgetListAttributes: AiGatewayBudgetListAttributes,
    AiGatewayBudgetListResource: AiGatewayBudgetListResource,
    AiGatewayBudgetListResponse: AiGatewayBudgetListResponse,
    AiGatewayBudgetPeriodAttributes: AiGatewayBudgetPeriodAttributes,
    AiGatewayBudgetPeriodResource: AiGatewayBudgetPeriodResource,
    AiGatewayBudgetPeriodResponse: AiGatewayBudgetPeriodResponse,
    AiGatewayBudgetResource: AiGatewayBudgetResource,
    AiGatewayBudgetResponse: AiGatewayBudgetResponse,
    AiGatewayBudgetSelectorEntry: AiGatewayBudgetSelectorEntry,
    AiGatewayBudgetUpdateAttributes: AiGatewayBudgetUpdateAttributes,
    AiGatewayBudgetUpdateData: AiGatewayBudgetUpdateData,
    AiGatewayBudgetUpdateRequest: AiGatewayBudgetUpdateRequest,
    AiGatewayCaptureConfigurationResponse:
      AiGatewayCaptureConfigurationResponse,
    AiGatewayCaptureConfigurationResponseData:
      AiGatewayCaptureConfigurationResponseData,
    AiGatewayCaptureConfigurationResponseDataAttributes:
      AiGatewayCaptureConfigurationResponseDataAttributes,
    AiGatewayCaptureCreateRequest: AiGatewayCaptureCreateRequest,
    AiGatewayCaptureCreateRequestData: AiGatewayCaptureCreateRequestData,
    AiGatewayCaptureCreateRequestDataAttributes:
      AiGatewayCaptureCreateRequestDataAttributes,
    AiGatewayCaptureDeleteRequest: AiGatewayCaptureDeleteRequest,
    AiGatewayCaptureDeleteRequestData: AiGatewayCaptureDeleteRequestData,
    AiGatewayCaptureDeleteRequestDataAttributes:
      AiGatewayCaptureDeleteRequestDataAttributes,
    AiGatewayCaptureOverride: AiGatewayCaptureOverride,
    AiGatewayCaptureOverrideResponse: AiGatewayCaptureOverrideResponse,
    AiGatewayCaptureOverrideResponseData: AiGatewayCaptureOverrideResponseData,
    AiGatewayCaptureOverrideResponseDataAttributes:
      AiGatewayCaptureOverrideResponseDataAttributes,
    AiGatewayCaptureResponseScope: AiGatewayCaptureResponseScope,
    AiGatewayCaptureScope: AiGatewayCaptureScope,
    AiGatewayCaptureUpdateRequest: AiGatewayCaptureUpdateRequest,
    AiGatewayCaptureUpdateRequestData: AiGatewayCaptureUpdateRequestData,
    AiGatewayCaptureUpdateRequestDataAttributes:
      AiGatewayCaptureUpdateRequestDataAttributes,
    AiGatewayDiscoveredModelAttributes: AiGatewayDiscoveredModelAttributes,
    AiGatewayDiscoveredModelListResponse: AiGatewayDiscoveredModelListResponse,
    AiGatewayDiscoveredModelResource: AiGatewayDiscoveredModelResource,
    AiGatewayGovernanceAttributes: AiGatewayGovernanceAttributes,
    AiGatewayGovernanceReplaceAttributes: AiGatewayGovernanceReplaceAttributes,
    AiGatewayGovernanceReplaceData: AiGatewayGovernanceReplaceData,
    AiGatewayGovernanceReplaceRequest: AiGatewayGovernanceReplaceRequest,
    AiGatewayGovernanceResource: AiGatewayGovernanceResource,
    AiGatewayGovernanceResponse: AiGatewayGovernanceResponse,
    AiGatewayModelCapabilities: AiGatewayModelCapabilities,
    AiGatewayModelCatalogEntryAttributes: AiGatewayModelCatalogEntryAttributes,
    AiGatewayModelCatalogEntryIdentifier: AiGatewayModelCatalogEntryIdentifier,
    AiGatewayModelCatalogEntryListResponse:
      AiGatewayModelCatalogEntryListResponse,
    AiGatewayModelCatalogEntryResource: AiGatewayModelCatalogEntryResource,
    AiGatewayModelCatalogEntryResponse: AiGatewayModelCatalogEntryResponse,
    AiGatewayModelCreateAttributes: AiGatewayModelCreateAttributes,
    AiGatewayModelCreateData: AiGatewayModelCreateData,
    AiGatewayModelCreateRequest: AiGatewayModelCreateRequest,
    AiGatewayModelGroupAttributes: AiGatewayModelGroupAttributes,
    AiGatewayModelGroupBinding: AiGatewayModelGroupBinding,
    AiGatewayModelGroupCreateAttributes: AiGatewayModelGroupCreateAttributes,
    AiGatewayModelGroupCreateData: AiGatewayModelGroupCreateData,
    AiGatewayModelGroupCreateRequest: AiGatewayModelGroupCreateRequest,
    AiGatewayModelGroupListResponse: AiGatewayModelGroupListResponse,
    AiGatewayModelGroupModel: AiGatewayModelGroupModel,
    AiGatewayModelGroupProvider: AiGatewayModelGroupProvider,
    AiGatewayModelGroupResource: AiGatewayModelGroupResource,
    AiGatewayModelGroupResponse: AiGatewayModelGroupResponse,
    AiGatewayModelGroupRoutingRule: AiGatewayModelGroupRoutingRule,
    AiGatewayModelGroupUpdateAttributes: AiGatewayModelGroupUpdateAttributes,
    AiGatewayModelGroupUpdateData: AiGatewayModelGroupUpdateData,
    AiGatewayModelGroupUpdateRequest: AiGatewayModelGroupUpdateRequest,
    AiGatewayModelInput: AiGatewayModelInput,
    AiGatewayModelLimits: AiGatewayModelLimits,
    AiGatewayModelMetadata: AiGatewayModelMetadata,
    AiGatewayModelMetadataSource: AiGatewayModelMetadataSource,
    AiGatewayModelModalities: AiGatewayModelModalities,
    AiGatewayModelPricingAttributes: AiGatewayModelPricingAttributes,
    AiGatewayModelPricingCatalogRequestConfig:
      AiGatewayModelPricingCatalogRequestConfig,
    AiGatewayModelPricingCatalogRequestSource:
      AiGatewayModelPricingCatalogRequestSource,
    AiGatewayModelPricingConfig: AiGatewayModelPricingConfig,
    AiGatewayModelPricingCustomRequestConfig:
      AiGatewayModelPricingCustomRequestConfig,
    AiGatewayModelPricingCustomRequestSource:
      AiGatewayModelPricingCustomRequestSource,
    AiGatewayModelPricingRates: AiGatewayModelPricingRates,
    AiGatewayModelPricingRequest: AiGatewayModelPricingRequest,
    AiGatewayModelPricingRequestAttributes:
      AiGatewayModelPricingRequestAttributes,
    AiGatewayModelPricingRequestData: AiGatewayModelPricingRequestData,
    AiGatewayModelPricingRequiredRates: AiGatewayModelPricingRequiredRates,
    AiGatewayModelPricingResponse: AiGatewayModelPricingResponse,
    AiGatewayModelPricingResponseData: AiGatewayModelPricingResponseData,
    AiGatewayModelPricingSource: AiGatewayModelPricingSource,
    AiGatewayModelReasoning: AiGatewayModelReasoning,
    AiGatewayModelReasoningControl: AiGatewayModelReasoningControl,
    AiGatewayModelReferencePrice: AiGatewayModelReferencePrice,
    AiGatewayModelUpdateAttributes: AiGatewayModelUpdateAttributes,
    AiGatewayModelUpdateData: AiGatewayModelUpdateData,
    AiGatewayModelUpdateRequest: AiGatewayModelUpdateRequest,
    AiGatewayModelsBulkCreateAttributes: AiGatewayModelsBulkCreateAttributes,
    AiGatewayModelsBulkCreateData: AiGatewayModelsBulkCreateData,
    AiGatewayModelsBulkCreateRequest: AiGatewayModelsBulkCreateRequest,
    AiGatewayModelsByCanonicalAttributes: AiGatewayModelsByCanonicalAttributes,
    AiGatewayModelsByCanonicalListResponse:
      AiGatewayModelsByCanonicalListResponse,
    AiGatewayModelsByCanonicalResource: AiGatewayModelsByCanonicalResource,
    AiGatewayPolicyAttributes: AiGatewayPolicyAttributes,
    AiGatewayPolicyListResponse: AiGatewayPolicyListResponse,
    AiGatewayPolicyRequest: AiGatewayPolicyRequest,
    AiGatewayPolicyRequestAttributes: AiGatewayPolicyRequestAttributes,
    AiGatewayPolicyRequestData: AiGatewayPolicyRequestData,
    AiGatewayPolicyResource: AiGatewayPolicyResource,
    AiGatewayPolicyResponse: AiGatewayPolicyResponse,
    AiGatewayPolicyTarget: AiGatewayPolicyTarget,
    AiGatewayPolicyTargetRequest: AiGatewayPolicyTargetRequest,
    AiGatewayPolicyTier: AiGatewayPolicyTier,
    AiGatewayPolicyTierRequest: AiGatewayPolicyTierRequest,
    AiGatewayProviderAttributes: AiGatewayProviderAttributes,
    AiGatewayProviderCreateAttributes: AiGatewayProviderCreateAttributes,
    AiGatewayProviderCreateData: AiGatewayProviderCreateData,
    AiGatewayProviderCreateRequest: AiGatewayProviderCreateRequest,
    AiGatewayProviderInitialBinding: AiGatewayProviderInitialBinding,
    AiGatewayProviderIntegrationConfig: AiGatewayProviderIntegrationConfig,
    AiGatewayProviderListResponse: AiGatewayProviderListResponse,
    AiGatewayProviderModelEntry: AiGatewayProviderModelEntry,
    AiGatewayProviderModelsRelationship: AiGatewayProviderModelsRelationship,
    AiGatewayProviderRelationships: AiGatewayProviderRelationships,
    AiGatewayProviderResource: AiGatewayProviderResource,
    AiGatewayProviderResponse: AiGatewayProviderResponse,
    AiGatewayProviderUpdateAttributes: AiGatewayProviderUpdateAttributes,
    AiGatewayProviderUpdateData: AiGatewayProviderUpdateData,
    AiGatewayProviderUpdateRequest: AiGatewayProviderUpdateRequest,
    AiGatewayRateLimitAttributes: AiGatewayRateLimitAttributes,
    AiGatewayRateLimitCreateAttributes: AiGatewayRateLimitCreateAttributes,
    AiGatewayRateLimitCreateData: AiGatewayRateLimitCreateData,
    AiGatewayRateLimitCreateRequest: AiGatewayRateLimitCreateRequest,
    AiGatewayRateLimitListResponse: AiGatewayRateLimitListResponse,
    AiGatewayRateLimitResource: AiGatewayRateLimitResource,
    AiGatewayRateLimitResponse: AiGatewayRateLimitResponse,
    AiGatewayRateLimitUpdateAttributes: AiGatewayRateLimitUpdateAttributes,
    AiGatewayRateLimitUpdateData: AiGatewayRateLimitUpdateData,
    AiGatewayRateLimitUpdateRequest: AiGatewayRateLimitUpdateRequest,
    AiGatewayRateLimitUsageAttributes: AiGatewayRateLimitUsageAttributes,
    AiGatewayRateLimitUsageListResponse: AiGatewayRateLimitUsageListResponse,
    AiGatewayRateLimitUsageResource: AiGatewayRateLimitUsageResource,
    AiGatewayRestrictedDetailsMeta: AiGatewayRestrictedDetailsMeta,
    AiGatewayRoutingClassifier: AiGatewayRoutingClassifier,
    AiGatewayRoutingClassifierRequest: AiGatewayRoutingClassifierRequest,
    AiGatewayRoutingRuleAttributes: AiGatewayRoutingRuleAttributes,
    AiGatewayRoutingRuleCreateAttributes: AiGatewayRoutingRuleCreateAttributes,
    AiGatewayRoutingRuleCreateData: AiGatewayRoutingRuleCreateData,
    AiGatewayRoutingRuleCreateRequest: AiGatewayRoutingRuleCreateRequest,
    AiGatewayRoutingRuleListResponse: AiGatewayRoutingRuleListResponse,
    AiGatewayRoutingRuleReplaceAttributes:
      AiGatewayRoutingRuleReplaceAttributes,
    AiGatewayRoutingRuleReplaceData: AiGatewayRoutingRuleReplaceData,
    AiGatewayRoutingRuleReplaceRequest: AiGatewayRoutingRuleReplaceRequest,
    AiGatewayRoutingRuleResource: AiGatewayRoutingRuleResource,
    AiGatewayRoutingRuleResponse: AiGatewayRoutingRuleResponse,
    AiGatewayRoutingRuleTarget: AiGatewayRoutingRuleTarget,
    AiGatewayRoutingRuleTargetRequest: AiGatewayRoutingRuleTargetRequest,
    AiGatewayRoutingRuleTier: AiGatewayRoutingRuleTier,
    AiGatewayRoutingRuleTierRequest: AiGatewayRoutingRuleTierRequest,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
