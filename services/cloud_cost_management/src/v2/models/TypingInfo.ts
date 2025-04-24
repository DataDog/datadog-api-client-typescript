import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AccountFilteringConfig } from "./AccountFilteringConfig";
import { AwsCURConfig } from "./AwsCURConfig";
import { AwsCURConfigAttributes } from "./AwsCURConfigAttributes";
import { AwsCURConfigPatchData } from "./AwsCURConfigPatchData";
import { AwsCURConfigPatchRequest } from "./AwsCURConfigPatchRequest";
import { AwsCURConfigPatchRequestAttributes } from "./AwsCURConfigPatchRequestAttributes";
import { AwsCURConfigPostData } from "./AwsCURConfigPostData";
import { AwsCURConfigPostRequest } from "./AwsCURConfigPostRequest";
import { AwsCURConfigPostRequestAttributes } from "./AwsCURConfigPostRequestAttributes";
import { AwsCURConfigResponse } from "./AwsCURConfigResponse";
import { AwsCURConfigsResponse } from "./AwsCURConfigsResponse";
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
import { BudgetEntry } from "./BudgetEntry";
import { BudgetWithEntries } from "./BudgetWithEntries";
import { BudgetWithEntriesData } from "./BudgetWithEntriesData";
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

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AwsCURConfigPatchRequestType: ["aws_cur_config_patch_request"],
    AwsCURConfigPostRequestType: ["aws_cur_config_post_request"],
    AwsCURConfigType: ["aws_cur_config"],
    AzureUCConfigPairType: ["azure_uc_configs"],
    AzureUCConfigPatchRequestType: ["azure_uc_config_patch_request"],
    AzureUCConfigPostRequestType: ["azure_uc_config_post_request"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AccountFilteringConfig: AccountFilteringConfig,
    AwsCURConfig: AwsCURConfig,
    AwsCURConfigAttributes: AwsCURConfigAttributes,
    AwsCURConfigPatchData: AwsCURConfigPatchData,
    AwsCURConfigPatchRequest: AwsCURConfigPatchRequest,
    AwsCURConfigPatchRequestAttributes: AwsCURConfigPatchRequestAttributes,
    AwsCURConfigPostData: AwsCURConfigPostData,
    AwsCURConfigPostRequest: AwsCURConfigPostRequest,
    AwsCURConfigPostRequestAttributes: AwsCURConfigPostRequestAttributes,
    AwsCURConfigResponse: AwsCURConfigResponse,
    AwsCURConfigsResponse: AwsCURConfigsResponse,
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
    BudgetEntry: BudgetEntry,
    BudgetWithEntries: BudgetWithEntries,
    BudgetWithEntriesData: BudgetWithEntriesData,
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
  },
};
