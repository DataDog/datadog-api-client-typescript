import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AccountFilteringConfig } from "./AccountFilteringConfig";
import { ArbitraryCostUpsertRequest } from "./ArbitraryCostUpsertRequest";
import { ArbitraryCostUpsertRequestData } from "./ArbitraryCostUpsertRequestData";
import { ArbitraryCostUpsertRequestDataAttributes } from "./ArbitraryCostUpsertRequestDataAttributes";
import { ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems } from "./ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems";
import { ArbitraryCostUpsertRequestDataAttributesStrategy } from "./ArbitraryCostUpsertRequestDataAttributesStrategy";
import { ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems } from "./ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems";
import { ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems } from "./ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems";
import { ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems } from "./ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems";
import { ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems } from "./ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems";
import { ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems } from "./ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems";
import { ArbitraryRuleResponse } from "./ArbitraryRuleResponse";
import { ArbitraryRuleResponseArray } from "./ArbitraryRuleResponseArray";
import { ArbitraryRuleResponseData } from "./ArbitraryRuleResponseData";
import { ArbitraryRuleResponseDataAttributes } from "./ArbitraryRuleResponseDataAttributes";
import { ArbitraryRuleResponseDataAttributesCostsToAllocateItems } from "./ArbitraryRuleResponseDataAttributesCostsToAllocateItems";
import { ArbitraryRuleResponseDataAttributesStrategy } from "./ArbitraryRuleResponseDataAttributesStrategy";
import { ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems } from "./ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems";
import { ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems } from "./ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems";
import { ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems } from "./ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems";
import { ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems } from "./ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems";
import { ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems } from "./ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems";
import { AwsCURConfig } from "./AwsCURConfig";
import { AwsCURConfigAttributes } from "./AwsCURConfigAttributes";
import { AwsCURConfigPatchData } from "./AwsCURConfigPatchData";
import { AwsCURConfigPatchRequest } from "./AwsCURConfigPatchRequest";
import { AwsCURConfigPatchRequestAttributes } from "./AwsCURConfigPatchRequestAttributes";
import { AwsCURConfigPostData } from "./AwsCURConfigPostData";
import { AwsCURConfigPostRequest } from "./AwsCURConfigPostRequest";
import { AwsCURConfigPostRequestAttributes } from "./AwsCURConfigPostRequestAttributes";
import { AwsCURConfigsResponse } from "./AwsCURConfigsResponse";
import { AwsCurConfigResponse } from "./AwsCurConfigResponse";
import { AwsCurConfigResponseData } from "./AwsCurConfigResponseData";
import { AwsCurConfigResponseDataAttributes } from "./AwsCurConfigResponseDataAttributes";
import { AwsCurConfigResponseDataAttributesAccountFilters } from "./AwsCurConfigResponseDataAttributesAccountFilters";
import { AzureUCConfig } from "./AzureUCConfig";
import { AzureUCConfigPair } from "./AzureUCConfigPair";
import { AzureUCConfigPairAttributes } from "./AzureUCConfigPairAttributes";
import { AzureUCConfigPairsResponse } from "./AzureUCConfigPairsResponse";
import { AzureUCConfigPatchData } from "./AzureUCConfigPatchData";
import { AzureUCConfigPatchRequest } from "./AzureUCConfigPatchRequest";
import { AzureUCConfigPatchRequestAttributes } from "./AzureUCConfigPatchRequestAttributes";
import { AzureUCConfigPostData } from "./AzureUCConfigPostData";
import { AzureUCConfigPostRequest } from "./AzureUCConfigPostRequest";
import { AzureUCConfigPostRequestAttributes } from "./AzureUCConfigPostRequestAttributes";
import { AzureUCConfigsResponse } from "./AzureUCConfigsResponse";
import { BillConfig } from "./BillConfig";
import { Budget } from "./Budget";
import { BudgetArray } from "./BudgetArray";
import { BudgetAttributes } from "./BudgetAttributes";
import { BudgetEntry } from "./BudgetEntry";
import { BudgetWithEntries } from "./BudgetWithEntries";
import { BudgetWithEntriesData } from "./BudgetWithEntriesData";
import { CreateRulesetRequest } from "./CreateRulesetRequest";
import { CreateRulesetRequestData } from "./CreateRulesetRequestData";
import { CreateRulesetRequestDataAttributes } from "./CreateRulesetRequestDataAttributes";
import { CreateRulesetRequestDataAttributesRulesItems } from "./CreateRulesetRequestDataAttributesRulesItems";
import { CreateRulesetRequestDataAttributesRulesItemsMapping } from "./CreateRulesetRequestDataAttributesRulesItemsMapping";
import { CreateRulesetRequestDataAttributesRulesItemsQuery } from "./CreateRulesetRequestDataAttributesRulesItemsQuery";
import { CreateRulesetRequestDataAttributesRulesItemsQueryAddition } from "./CreateRulesetRequestDataAttributesRulesItemsQueryAddition";
import { CreateRulesetRequestDataAttributesRulesItemsReferenceTable } from "./CreateRulesetRequestDataAttributesRulesItemsReferenceTable";
import { CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems } from "./CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems";
import { CustomCostGetResponseMeta } from "./CustomCostGetResponseMeta";
import { CustomCostListResponseMeta } from "./CustomCostListResponseMeta";
import { CustomCostUploadResponseMeta } from "./CustomCostUploadResponseMeta";
import { CustomCostsFileGetResponse } from "./CustomCostsFileGetResponse";
import { CustomCostsFileLineItem } from "./CustomCostsFileLineItem";
import { CustomCostsFileListResponse } from "./CustomCostsFileListResponse";
import { CustomCostsFileMetadata } from "./CustomCostsFileMetadata";
import { CustomCostsFileMetadataHighLevel } from "./CustomCostsFileMetadataHighLevel";
import { CustomCostsFileMetadataWithContent } from "./CustomCostsFileMetadataWithContent";
import { CustomCostsFileMetadataWithContentHighLevel } from "./CustomCostsFileMetadataWithContentHighLevel";
import { CustomCostsFileUploadResponse } from "./CustomCostsFileUploadResponse";
import { CustomCostsFileUsageChargePeriod } from "./CustomCostsFileUsageChargePeriod";
import { CustomCostsUser } from "./CustomCostsUser";
import { GCPUsageCostConfig } from "./GCPUsageCostConfig";
import { GCPUsageCostConfigAttributes } from "./GCPUsageCostConfigAttributes";
import { GCPUsageCostConfigPatchData } from "./GCPUsageCostConfigPatchData";
import { GCPUsageCostConfigPatchRequest } from "./GCPUsageCostConfigPatchRequest";
import { GCPUsageCostConfigPatchRequestAttributes } from "./GCPUsageCostConfigPatchRequestAttributes";
import { GCPUsageCostConfigPostData } from "./GCPUsageCostConfigPostData";
import { GCPUsageCostConfigPostRequest } from "./GCPUsageCostConfigPostRequest";
import { GCPUsageCostConfigPostRequestAttributes } from "./GCPUsageCostConfigPostRequestAttributes";
import { GCPUsageCostConfigResponse } from "./GCPUsageCostConfigResponse";
import { GCPUsageCostConfigsResponse } from "./GCPUsageCostConfigsResponse";
import { GcpUcConfigResponse } from "./GcpUcConfigResponse";
import { GcpUcConfigResponseData } from "./GcpUcConfigResponseData";
import { GcpUcConfigResponseDataAttributes } from "./GcpUcConfigResponseDataAttributes";
import { ReorderRuleResourceArray } from "./ReorderRuleResourceArray";
import { ReorderRuleResourceData } from "./ReorderRuleResourceData";
import { ReorderRulesetResourceArray } from "./ReorderRulesetResourceArray";
import { ReorderRulesetResourceData } from "./ReorderRulesetResourceData";
import { RulesValidateQueryRequest } from "./RulesValidateQueryRequest";
import { RulesValidateQueryRequestData } from "./RulesValidateQueryRequestData";
import { RulesValidateQueryRequestDataAttributes } from "./RulesValidateQueryRequestDataAttributes";
import { RulesValidateQueryResponse } from "./RulesValidateQueryResponse";
import { RulesValidateQueryResponseData } from "./RulesValidateQueryResponseData";
import { RulesValidateQueryResponseDataAttributes } from "./RulesValidateQueryResponseDataAttributes";
import { RulesetResp } from "./RulesetResp";
import { RulesetRespArray } from "./RulesetRespArray";
import { RulesetRespData } from "./RulesetRespData";
import { RulesetRespDataAttributes } from "./RulesetRespDataAttributes";
import { RulesetRespDataAttributesCreated } from "./RulesetRespDataAttributesCreated";
import { RulesetRespDataAttributesModified } from "./RulesetRespDataAttributesModified";
import { RulesetRespDataAttributesRulesItems } from "./RulesetRespDataAttributesRulesItems";
import { RulesetRespDataAttributesRulesItemsMapping } from "./RulesetRespDataAttributesRulesItemsMapping";
import { RulesetRespDataAttributesRulesItemsQuery } from "./RulesetRespDataAttributesRulesItemsQuery";
import { RulesetRespDataAttributesRulesItemsQueryAddition } from "./RulesetRespDataAttributesRulesItemsQueryAddition";
import { RulesetRespDataAttributesRulesItemsReferenceTable } from "./RulesetRespDataAttributesRulesItemsReferenceTable";
import { RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems } from "./RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems";
import { TagFilter } from "./TagFilter";
import { UCConfigPair } from "./UCConfigPair";
import { UCConfigPairData } from "./UCConfigPairData";
import { UCConfigPairDataAttributes } from "./UCConfigPairDataAttributes";
import { UCConfigPairDataAttributesConfigsItems } from "./UCConfigPairDataAttributesConfigsItems";
import { UpdateRulesetRequest } from "./UpdateRulesetRequest";
import { UpdateRulesetRequestData } from "./UpdateRulesetRequestData";
import { UpdateRulesetRequestDataAttributes } from "./UpdateRulesetRequestDataAttributes";
import { UpdateRulesetRequestDataAttributesRulesItems } from "./UpdateRulesetRequestDataAttributesRulesItems";
import { UpdateRulesetRequestDataAttributesRulesItemsMapping } from "./UpdateRulesetRequestDataAttributesRulesItemsMapping";
import { UpdateRulesetRequestDataAttributesRulesItemsQuery } from "./UpdateRulesetRequestDataAttributesRulesItemsQuery";
import { UpdateRulesetRequestDataAttributesRulesItemsQueryAddition } from "./UpdateRulesetRequestDataAttributesRulesItemsQueryAddition";
import { UpdateRulesetRequestDataAttributesRulesItemsReferenceTable } from "./UpdateRulesetRequestDataAttributesRulesItemsReferenceTable";
import { UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems } from "./UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ArbitraryCostUpsertRequestDataType: ["upsert_arbitrary_rule"],
    ArbitraryRuleResponseDataType: ["arbitrary_rule"],
    AwsCURConfigPatchRequestType: ["aws_cur_config_patch_request"],
    AwsCURConfigPostRequestType: ["aws_cur_config_post_request"],
    AwsCURConfigType: ["aws_cur_config"],
    AwsCurConfigResponseDataType: ["aws_cur_config"],
    AzureUCConfigPairType: ["azure_uc_configs"],
    AzureUCConfigPatchRequestType: ["azure_uc_config_patch_request"],
    AzureUCConfigPostRequestType: ["azure_uc_config_post_request"],
    CreateRulesetRequestDataType: ["create_ruleset"],
    GCPUsageCostConfigPatchRequestType: ["gcp_uc_config_patch_request"],
    GCPUsageCostConfigPostRequestType: ["gcp_uc_config_post_request"],
    GCPUsageCostConfigType: ["gcp_uc_config"],
    GcpUcConfigResponseDataType: ["gcp_uc_config"],
    ReorderRuleResourceDataType: ["arbitrary_rule"],
    ReorderRulesetResourceDataType: ["ruleset"],
    RulesValidateQueryRequestDataType: ["validate_query"],
    RulesValidateQueryResponseDataType: ["validate_response"],
    RulesetRespDataType: ["ruleset"],
    UCConfigPairDataType: ["azure_uc_configs"],
    UpdateRulesetRequestDataType: ["update_ruleset"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AccountFilteringConfig: AccountFilteringConfig,
    ArbitraryCostUpsertRequest: ArbitraryCostUpsertRequest,
    ArbitraryCostUpsertRequestData: ArbitraryCostUpsertRequestData,
    ArbitraryCostUpsertRequestDataAttributes:
      ArbitraryCostUpsertRequestDataAttributes,
    ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems:
      ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems,
    ArbitraryCostUpsertRequestDataAttributesStrategy:
      ArbitraryCostUpsertRequestDataAttributesStrategy,
    ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems:
      ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems,
    ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems:
      ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems,
    ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems:
      ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems,
    ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems:
      ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems,
    ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems:
      ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems,
    ArbitraryRuleResponse: ArbitraryRuleResponse,
    ArbitraryRuleResponseArray: ArbitraryRuleResponseArray,
    ArbitraryRuleResponseData: ArbitraryRuleResponseData,
    ArbitraryRuleResponseDataAttributes: ArbitraryRuleResponseDataAttributes,
    ArbitraryRuleResponseDataAttributesCostsToAllocateItems:
      ArbitraryRuleResponseDataAttributesCostsToAllocateItems,
    ArbitraryRuleResponseDataAttributesStrategy:
      ArbitraryRuleResponseDataAttributesStrategy,
    ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems:
      ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems,
    ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems:
      ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems,
    ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems:
      ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems,
    ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems:
      ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems,
    ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems:
      ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems,
    AwsCURConfig: AwsCURConfig,
    AwsCURConfigAttributes: AwsCURConfigAttributes,
    AwsCURConfigPatchData: AwsCURConfigPatchData,
    AwsCURConfigPatchRequest: AwsCURConfigPatchRequest,
    AwsCURConfigPatchRequestAttributes: AwsCURConfigPatchRequestAttributes,
    AwsCURConfigPostData: AwsCURConfigPostData,
    AwsCURConfigPostRequest: AwsCURConfigPostRequest,
    AwsCURConfigPostRequestAttributes: AwsCURConfigPostRequestAttributes,
    AwsCURConfigsResponse: AwsCURConfigsResponse,
    AwsCurConfigResponse: AwsCurConfigResponse,
    AwsCurConfigResponseData: AwsCurConfigResponseData,
    AwsCurConfigResponseDataAttributes: AwsCurConfigResponseDataAttributes,
    AwsCurConfigResponseDataAttributesAccountFilters:
      AwsCurConfigResponseDataAttributesAccountFilters,
    AzureUCConfig: AzureUCConfig,
    AzureUCConfigPair: AzureUCConfigPair,
    AzureUCConfigPairAttributes: AzureUCConfigPairAttributes,
    AzureUCConfigPairsResponse: AzureUCConfigPairsResponse,
    AzureUCConfigPatchData: AzureUCConfigPatchData,
    AzureUCConfigPatchRequest: AzureUCConfigPatchRequest,
    AzureUCConfigPatchRequestAttributes: AzureUCConfigPatchRequestAttributes,
    AzureUCConfigPostData: AzureUCConfigPostData,
    AzureUCConfigPostRequest: AzureUCConfigPostRequest,
    AzureUCConfigPostRequestAttributes: AzureUCConfigPostRequestAttributes,
    AzureUCConfigsResponse: AzureUCConfigsResponse,
    BillConfig: BillConfig,
    Budget: Budget,
    BudgetArray: BudgetArray,
    BudgetAttributes: BudgetAttributes,
    BudgetEntry: BudgetEntry,
    BudgetWithEntries: BudgetWithEntries,
    BudgetWithEntriesData: BudgetWithEntriesData,
    CreateRulesetRequest: CreateRulesetRequest,
    CreateRulesetRequestData: CreateRulesetRequestData,
    CreateRulesetRequestDataAttributes: CreateRulesetRequestDataAttributes,
    CreateRulesetRequestDataAttributesRulesItems:
      CreateRulesetRequestDataAttributesRulesItems,
    CreateRulesetRequestDataAttributesRulesItemsMapping:
      CreateRulesetRequestDataAttributesRulesItemsMapping,
    CreateRulesetRequestDataAttributesRulesItemsQuery:
      CreateRulesetRequestDataAttributesRulesItemsQuery,
    CreateRulesetRequestDataAttributesRulesItemsQueryAddition:
      CreateRulesetRequestDataAttributesRulesItemsQueryAddition,
    CreateRulesetRequestDataAttributesRulesItemsReferenceTable:
      CreateRulesetRequestDataAttributesRulesItemsReferenceTable,
    CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems:
      CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems,
    CustomCostGetResponseMeta: CustomCostGetResponseMeta,
    CustomCostListResponseMeta: CustomCostListResponseMeta,
    CustomCostUploadResponseMeta: CustomCostUploadResponseMeta,
    CustomCostsFileGetResponse: CustomCostsFileGetResponse,
    CustomCostsFileLineItem: CustomCostsFileLineItem,
    CustomCostsFileListResponse: CustomCostsFileListResponse,
    CustomCostsFileMetadata: CustomCostsFileMetadata,
    CustomCostsFileMetadataHighLevel: CustomCostsFileMetadataHighLevel,
    CustomCostsFileMetadataWithContent: CustomCostsFileMetadataWithContent,
    CustomCostsFileMetadataWithContentHighLevel:
      CustomCostsFileMetadataWithContentHighLevel,
    CustomCostsFileUploadResponse: CustomCostsFileUploadResponse,
    CustomCostsFileUsageChargePeriod: CustomCostsFileUsageChargePeriod,
    CustomCostsUser: CustomCostsUser,
    GCPUsageCostConfig: GCPUsageCostConfig,
    GCPUsageCostConfigAttributes: GCPUsageCostConfigAttributes,
    GCPUsageCostConfigPatchData: GCPUsageCostConfigPatchData,
    GCPUsageCostConfigPatchRequest: GCPUsageCostConfigPatchRequest,
    GCPUsageCostConfigPatchRequestAttributes:
      GCPUsageCostConfigPatchRequestAttributes,
    GCPUsageCostConfigPostData: GCPUsageCostConfigPostData,
    GCPUsageCostConfigPostRequest: GCPUsageCostConfigPostRequest,
    GCPUsageCostConfigPostRequestAttributes:
      GCPUsageCostConfigPostRequestAttributes,
    GCPUsageCostConfigResponse: GCPUsageCostConfigResponse,
    GCPUsageCostConfigsResponse: GCPUsageCostConfigsResponse,
    GcpUcConfigResponse: GcpUcConfigResponse,
    GcpUcConfigResponseData: GcpUcConfigResponseData,
    GcpUcConfigResponseDataAttributes: GcpUcConfigResponseDataAttributes,
    ReorderRuleResourceArray: ReorderRuleResourceArray,
    ReorderRuleResourceData: ReorderRuleResourceData,
    ReorderRulesetResourceArray: ReorderRulesetResourceArray,
    ReorderRulesetResourceData: ReorderRulesetResourceData,
    RulesValidateQueryRequest: RulesValidateQueryRequest,
    RulesValidateQueryRequestData: RulesValidateQueryRequestData,
    RulesValidateQueryRequestDataAttributes:
      RulesValidateQueryRequestDataAttributes,
    RulesValidateQueryResponse: RulesValidateQueryResponse,
    RulesValidateQueryResponseData: RulesValidateQueryResponseData,
    RulesValidateQueryResponseDataAttributes:
      RulesValidateQueryResponseDataAttributes,
    RulesetResp: RulesetResp,
    RulesetRespArray: RulesetRespArray,
    RulesetRespData: RulesetRespData,
    RulesetRespDataAttributes: RulesetRespDataAttributes,
    RulesetRespDataAttributesCreated: RulesetRespDataAttributesCreated,
    RulesetRespDataAttributesModified: RulesetRespDataAttributesModified,
    RulesetRespDataAttributesRulesItems: RulesetRespDataAttributesRulesItems,
    RulesetRespDataAttributesRulesItemsMapping:
      RulesetRespDataAttributesRulesItemsMapping,
    RulesetRespDataAttributesRulesItemsQuery:
      RulesetRespDataAttributesRulesItemsQuery,
    RulesetRespDataAttributesRulesItemsQueryAddition:
      RulesetRespDataAttributesRulesItemsQueryAddition,
    RulesetRespDataAttributesRulesItemsReferenceTable:
      RulesetRespDataAttributesRulesItemsReferenceTable,
    RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems:
      RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems,
    TagFilter: TagFilter,
    UCConfigPair: UCConfigPair,
    UCConfigPairData: UCConfigPairData,
    UCConfigPairDataAttributes: UCConfigPairDataAttributes,
    UCConfigPairDataAttributesConfigsItems:
      UCConfigPairDataAttributesConfigsItems,
    UpdateRulesetRequest: UpdateRulesetRequest,
    UpdateRulesetRequestData: UpdateRulesetRequestData,
    UpdateRulesetRequestDataAttributes: UpdateRulesetRequestDataAttributes,
    UpdateRulesetRequestDataAttributesRulesItems:
      UpdateRulesetRequestDataAttributesRulesItems,
    UpdateRulesetRequestDataAttributesRulesItemsMapping:
      UpdateRulesetRequestDataAttributesRulesItemsMapping,
    UpdateRulesetRequestDataAttributesRulesItemsQuery:
      UpdateRulesetRequestDataAttributesRulesItemsQuery,
    UpdateRulesetRequestDataAttributesRulesItemsQueryAddition:
      UpdateRulesetRequestDataAttributesRulesItemsQueryAddition,
    UpdateRulesetRequestDataAttributesRulesItemsReferenceTable:
      UpdateRulesetRequestDataAttributesRulesItemsReferenceTable,
    UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems:
      UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems,
  },
};
