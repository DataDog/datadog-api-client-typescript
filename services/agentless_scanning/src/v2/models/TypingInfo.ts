import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AwsOnDemandAttributes } from "./AwsOnDemandAttributes";
import { AwsOnDemandCreateAttributes } from "./AwsOnDemandCreateAttributes";
import { AwsOnDemandCreateData } from "./AwsOnDemandCreateData";
import { AwsOnDemandCreateRequest } from "./AwsOnDemandCreateRequest";
import { AwsOnDemandData } from "./AwsOnDemandData";
import { AwsOnDemandListResponse } from "./AwsOnDemandListResponse";
import { AwsOnDemandResponse } from "./AwsOnDemandResponse";
import { AwsScanOptionsAttributes } from "./AwsScanOptionsAttributes";
import { AwsScanOptionsCreateAttributes } from "./AwsScanOptionsCreateAttributes";
import { AwsScanOptionsCreateData } from "./AwsScanOptionsCreateData";
import { AwsScanOptionsCreateRequest } from "./AwsScanOptionsCreateRequest";
import { AwsScanOptionsData } from "./AwsScanOptionsData";
import { AwsScanOptionsListResponse } from "./AwsScanOptionsListResponse";
import { AwsScanOptionsResponse } from "./AwsScanOptionsResponse";
import { AwsScanOptionsUpdateAttributes } from "./AwsScanOptionsUpdateAttributes";
import { AwsScanOptionsUpdateData } from "./AwsScanOptionsUpdateData";
import { AwsScanOptionsUpdateRequest } from "./AwsScanOptionsUpdateRequest";
import { AzureScanOptions } from "./AzureScanOptions";
import { AzureScanOptionsArray } from "./AzureScanOptionsArray";
import { AzureScanOptionsData } from "./AzureScanOptionsData";
import { AzureScanOptionsDataAttributes } from "./AzureScanOptionsDataAttributes";
import { AzureScanOptionsInputUpdate } from "./AzureScanOptionsInputUpdate";
import { AzureScanOptionsInputUpdateData } from "./AzureScanOptionsInputUpdateData";
import { AzureScanOptionsInputUpdateDataAttributes } from "./AzureScanOptionsInputUpdateDataAttributes";
import { GcpScanOptions } from "./GcpScanOptions";
import { GcpScanOptionsArray } from "./GcpScanOptionsArray";
import { GcpScanOptionsData } from "./GcpScanOptionsData";
import { GcpScanOptionsDataAttributes } from "./GcpScanOptionsDataAttributes";
import { GcpScanOptionsInputUpdate } from "./GcpScanOptionsInputUpdate";
import { GcpScanOptionsInputUpdateData } from "./GcpScanOptionsInputUpdateData";
import { GcpScanOptionsInputUpdateDataAttributes } from "./GcpScanOptionsInputUpdateDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AwsOnDemandType: ["aws_resource"],
    AwsScanOptionsType: ["aws_scan_options"],
    AzureScanOptionsDataType: ["azure_scan_options"],
    AzureScanOptionsInputUpdateDataType: ["azure_scan_options"],
    GcpScanOptionsDataType: ["gcp_scan_options"],
    GcpScanOptionsInputUpdateDataType: ["gcp_scan_options"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AwsOnDemandAttributes: AwsOnDemandAttributes,
    AwsOnDemandCreateAttributes: AwsOnDemandCreateAttributes,
    AwsOnDemandCreateData: AwsOnDemandCreateData,
    AwsOnDemandCreateRequest: AwsOnDemandCreateRequest,
    AwsOnDemandData: AwsOnDemandData,
    AwsOnDemandListResponse: AwsOnDemandListResponse,
    AwsOnDemandResponse: AwsOnDemandResponse,
    AwsScanOptionsAttributes: AwsScanOptionsAttributes,
    AwsScanOptionsCreateAttributes: AwsScanOptionsCreateAttributes,
    AwsScanOptionsCreateData: AwsScanOptionsCreateData,
    AwsScanOptionsCreateRequest: AwsScanOptionsCreateRequest,
    AwsScanOptionsData: AwsScanOptionsData,
    AwsScanOptionsListResponse: AwsScanOptionsListResponse,
    AwsScanOptionsResponse: AwsScanOptionsResponse,
    AwsScanOptionsUpdateAttributes: AwsScanOptionsUpdateAttributes,
    AwsScanOptionsUpdateData: AwsScanOptionsUpdateData,
    AwsScanOptionsUpdateRequest: AwsScanOptionsUpdateRequest,
    AzureScanOptions: AzureScanOptions,
    AzureScanOptionsArray: AzureScanOptionsArray,
    AzureScanOptionsData: AzureScanOptionsData,
    AzureScanOptionsDataAttributes: AzureScanOptionsDataAttributes,
    AzureScanOptionsInputUpdate: AzureScanOptionsInputUpdate,
    AzureScanOptionsInputUpdateData: AzureScanOptionsInputUpdateData,
    AzureScanOptionsInputUpdateDataAttributes:
      AzureScanOptionsInputUpdateDataAttributes,
    GcpScanOptions: GcpScanOptions,
    GcpScanOptionsArray: GcpScanOptionsArray,
    GcpScanOptionsData: GcpScanOptionsData,
    GcpScanOptionsDataAttributes: GcpScanOptionsDataAttributes,
    GcpScanOptionsInputUpdate: GcpScanOptionsInputUpdate,
    GcpScanOptionsInputUpdateData: GcpScanOptionsInputUpdateData,
    GcpScanOptionsInputUpdateDataAttributes:
      GcpScanOptionsInputUpdateDataAttributes,
  },
};
