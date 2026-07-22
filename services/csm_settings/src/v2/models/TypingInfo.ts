import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CsmAgentlessHostAttributes } from "./CsmAgentlessHostAttributes";
import { CsmAgentlessHostData } from "./CsmAgentlessHostData";
import { CsmAgentlessHostFacetAttributes } from "./CsmAgentlessHostFacetAttributes";
import { CsmAgentlessHostFacetData } from "./CsmAgentlessHostFacetData";
import { CsmAgentlessHostFacetsResponse } from "./CsmAgentlessHostFacetsResponse";
import { CsmAgentlessHostsResponse } from "./CsmAgentlessHostsResponse";
import { CsmHostFacetInfoAttributes } from "./CsmHostFacetInfoAttributes";
import { CsmHostFacetInfoData } from "./CsmHostFacetInfoData";
import { CsmHostFacetInfoItem } from "./CsmHostFacetInfoItem";
import { CsmHostFacetInfoMeta } from "./CsmHostFacetInfoMeta";
import { CsmHostFacetInfoResponse } from "./CsmHostFacetInfoResponse";
import { CsmSettingsMeta } from "./CsmSettingsMeta";
import { CsmUnifiedHostAttributes } from "./CsmUnifiedHostAttributes";
import { CsmUnifiedHostData } from "./CsmUnifiedHostData";
import { CsmUnifiedHostFacetData } from "./CsmUnifiedHostFacetData";
import { CsmUnifiedHostFacetsResponse } from "./CsmUnifiedHostFacetsResponse";
import { CsmUnifiedHostsMeta } from "./CsmUnifiedHostsMeta";
import { CsmUnifiedHostsResponse } from "./CsmUnifiedHostsResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CsmAgentlessHostFacetType: ["agentless_host_facet"],
    CsmAgentlessHostResourceType: ["aws_ec2_instance", "azure_virtual_machine_instance", "gcp_compute_instance", "oci_instance"],
    CsmAgentlessHostType: ["agentless_host"],
    CsmCloudProvider: ["aws", "gcp", "azure", "oci"],
    CsmFacetInfoType: ["facet_info"],
    CsmUnifiedHostFacetType: ["unified_host_facet"],
    CsmUnifiedHostSource: ["agent", "agentless", "both"],
    CsmUnifiedHostType: ["unified_host"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CsmAgentlessHostAttributes: CsmAgentlessHostAttributes,
    CsmAgentlessHostData: CsmAgentlessHostData,
    CsmAgentlessHostFacetAttributes: CsmAgentlessHostFacetAttributes,
    CsmAgentlessHostFacetData: CsmAgentlessHostFacetData,
    CsmAgentlessHostFacetsResponse: CsmAgentlessHostFacetsResponse,
    CsmAgentlessHostsResponse: CsmAgentlessHostsResponse,
    CsmHostFacetInfoAttributes: CsmHostFacetInfoAttributes,
    CsmHostFacetInfoData: CsmHostFacetInfoData,
    CsmHostFacetInfoItem: CsmHostFacetInfoItem,
    CsmHostFacetInfoMeta: CsmHostFacetInfoMeta,
    CsmHostFacetInfoResponse: CsmHostFacetInfoResponse,
    CsmSettingsMeta: CsmSettingsMeta,
    CsmUnifiedHostAttributes: CsmUnifiedHostAttributes,
    CsmUnifiedHostData: CsmUnifiedHostData,
    CsmUnifiedHostFacetData: CsmUnifiedHostFacetData,
    CsmUnifiedHostFacetsResponse: CsmUnifiedHostFacetsResponse,
    CsmUnifiedHostsMeta: CsmUnifiedHostsMeta,
    CsmUnifiedHostsResponse: CsmUnifiedHostsResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};