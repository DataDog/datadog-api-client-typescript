import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AWSAccountCreateRequest } from "./AWSAccountCreateRequest";
import { AWSAccountCreateRequestAttributes } from "./AWSAccountCreateRequestAttributes";
import { AWSAccountCreateRequestData } from "./AWSAccountCreateRequestData";
import { AWSAccountResponse } from "./AWSAccountResponse";
import { AWSAccountResponseAttributes } from "./AWSAccountResponseAttributes";
import { AWSAccountResponseData } from "./AWSAccountResponseData";
import { AWSAccountUpdateRequest } from "./AWSAccountUpdateRequest";
import { AWSAccountUpdateRequestAttributes } from "./AWSAccountUpdateRequestAttributes";
import { AWSAccountUpdateRequestData } from "./AWSAccountUpdateRequestData";
import { AWSAccountsResponse } from "./AWSAccountsResponse";
import { AWSAuthConfigKeys } from "./AWSAuthConfigKeys";
import { AWSAuthConfigRole } from "./AWSAuthConfigRole";
import { AWSCCMConfig } from "./AWSCCMConfig";
import { AWSEventBridgeAccountConfiguration } from "./AWSEventBridgeAccountConfiguration";
import { AWSEventBridgeCreateRequest } from "./AWSEventBridgeCreateRequest";
import { AWSEventBridgeCreateRequestAttributes } from "./AWSEventBridgeCreateRequestAttributes";
import { AWSEventBridgeCreateRequestData } from "./AWSEventBridgeCreateRequestData";
import { AWSEventBridgeCreateResponse } from "./AWSEventBridgeCreateResponse";
import { AWSEventBridgeCreateResponseAttributes } from "./AWSEventBridgeCreateResponseAttributes";
import { AWSEventBridgeCreateResponseData } from "./AWSEventBridgeCreateResponseData";
import { AWSEventBridgeDeleteRequest } from "./AWSEventBridgeDeleteRequest";
import { AWSEventBridgeDeleteRequestAttributes } from "./AWSEventBridgeDeleteRequestAttributes";
import { AWSEventBridgeDeleteRequestData } from "./AWSEventBridgeDeleteRequestData";
import { AWSEventBridgeDeleteResponse } from "./AWSEventBridgeDeleteResponse";
import { AWSEventBridgeDeleteResponseAttributes } from "./AWSEventBridgeDeleteResponseAttributes";
import { AWSEventBridgeDeleteResponseData } from "./AWSEventBridgeDeleteResponseData";
import { AWSEventBridgeListResponse } from "./AWSEventBridgeListResponse";
import { AWSEventBridgeListResponseAttributes } from "./AWSEventBridgeListResponseAttributes";
import { AWSEventBridgeListResponseData } from "./AWSEventBridgeListResponseData";
import { AWSEventBridgeSource } from "./AWSEventBridgeSource";
import { AWSIntegrationIamPermissionsResponse } from "./AWSIntegrationIamPermissionsResponse";
import { AWSIntegrationIamPermissionsResponseAttributes } from "./AWSIntegrationIamPermissionsResponseAttributes";
import { AWSIntegrationIamPermissionsResponseData } from "./AWSIntegrationIamPermissionsResponseData";
import { AWSLambdaForwarderConfig } from "./AWSLambdaForwarderConfig";
import { AWSLambdaForwarderConfigLogSourceConfig } from "./AWSLambdaForwarderConfigLogSourceConfig";
import { AWSLogSourceTagFilter } from "./AWSLogSourceTagFilter";
import { AWSLogsConfig } from "./AWSLogsConfig";
import { AWSMetricsConfig } from "./AWSMetricsConfig";
import { AWSNamespaceFiltersExcludeOnly } from "./AWSNamespaceFiltersExcludeOnly";
import { AWSNamespaceFiltersIncludeOnly } from "./AWSNamespaceFiltersIncludeOnly";
import { AWSNamespaceTagFilter } from "./AWSNamespaceTagFilter";
import { AWSNamespacesResponse } from "./AWSNamespacesResponse";
import { AWSNamespacesResponseAttributes } from "./AWSNamespacesResponseAttributes";
import { AWSNamespacesResponseData } from "./AWSNamespacesResponseData";
import { AWSNewExternalIDResponse } from "./AWSNewExternalIDResponse";
import { AWSNewExternalIDResponseAttributes } from "./AWSNewExternalIDResponseAttributes";
import { AWSNewExternalIDResponseData } from "./AWSNewExternalIDResponseData";
import { AWSRegionsIncludeAll } from "./AWSRegionsIncludeAll";
import { AWSRegionsIncludeOnly } from "./AWSRegionsIncludeOnly";
import { AWSResourcesConfig } from "./AWSResourcesConfig";
import { AWSTracesConfig } from "./AWSTracesConfig";
import { DataExportConfig } from "./DataExportConfig";
import { XRayServicesIncludeAll } from "./XRayServicesIncludeAll";
import { XRayServicesIncludeOnly } from "./XRayServicesIncludeOnly";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AWSAccountPartition: ["aws", "aws-cn", "aws-us-gov"],
    AWSAccountType: ["account"],
    AWSEventBridgeCreateStatus: ["created"],
    AWSEventBridgeDeleteStatus: ["empty"],
    AWSEventBridgeType: ["event_bridge"],
    AWSIntegrationIamPermissionsResponseDataType: ["permissions"],
    AWSNamespacesResponseDataType: ["namespaces"],
    AWSNewExternalIDResponseDataType: ["external_id"],
  },
  oneOfMap: {
    AWSAuthConfig: ["AWSAuthConfigKeys", "AWSAuthConfigRole"],
    AWSNamespaceFilters: [
      "AWSNamespaceFiltersExcludeOnly",
      "AWSNamespaceFiltersIncludeOnly",
    ],
    AWSRegions: ["AWSRegionsIncludeAll", "AWSRegionsIncludeOnly"],
    XRayServicesList: ["XRayServicesIncludeAll", "XRayServicesIncludeOnly"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AWSAccountCreateRequest: AWSAccountCreateRequest,
    AWSAccountCreateRequestAttributes: AWSAccountCreateRequestAttributes,
    AWSAccountCreateRequestData: AWSAccountCreateRequestData,
    AWSAccountResponse: AWSAccountResponse,
    AWSAccountResponseAttributes: AWSAccountResponseAttributes,
    AWSAccountResponseData: AWSAccountResponseData,
    AWSAccountUpdateRequest: AWSAccountUpdateRequest,
    AWSAccountUpdateRequestAttributes: AWSAccountUpdateRequestAttributes,
    AWSAccountUpdateRequestData: AWSAccountUpdateRequestData,
    AWSAccountsResponse: AWSAccountsResponse,
    AWSAuthConfigKeys: AWSAuthConfigKeys,
    AWSAuthConfigRole: AWSAuthConfigRole,
    AWSCCMConfig: AWSCCMConfig,
    AWSEventBridgeAccountConfiguration: AWSEventBridgeAccountConfiguration,
    AWSEventBridgeCreateRequest: AWSEventBridgeCreateRequest,
    AWSEventBridgeCreateRequestAttributes:
      AWSEventBridgeCreateRequestAttributes,
    AWSEventBridgeCreateRequestData: AWSEventBridgeCreateRequestData,
    AWSEventBridgeCreateResponse: AWSEventBridgeCreateResponse,
    AWSEventBridgeCreateResponseAttributes:
      AWSEventBridgeCreateResponseAttributes,
    AWSEventBridgeCreateResponseData: AWSEventBridgeCreateResponseData,
    AWSEventBridgeDeleteRequest: AWSEventBridgeDeleteRequest,
    AWSEventBridgeDeleteRequestAttributes:
      AWSEventBridgeDeleteRequestAttributes,
    AWSEventBridgeDeleteRequestData: AWSEventBridgeDeleteRequestData,
    AWSEventBridgeDeleteResponse: AWSEventBridgeDeleteResponse,
    AWSEventBridgeDeleteResponseAttributes:
      AWSEventBridgeDeleteResponseAttributes,
    AWSEventBridgeDeleteResponseData: AWSEventBridgeDeleteResponseData,
    AWSEventBridgeListResponse: AWSEventBridgeListResponse,
    AWSEventBridgeListResponseAttributes: AWSEventBridgeListResponseAttributes,
    AWSEventBridgeListResponseData: AWSEventBridgeListResponseData,
    AWSEventBridgeSource: AWSEventBridgeSource,
    AWSIntegrationIamPermissionsResponse: AWSIntegrationIamPermissionsResponse,
    AWSIntegrationIamPermissionsResponseAttributes:
      AWSIntegrationIamPermissionsResponseAttributes,
    AWSIntegrationIamPermissionsResponseData:
      AWSIntegrationIamPermissionsResponseData,
    AWSLambdaForwarderConfig: AWSLambdaForwarderConfig,
    AWSLambdaForwarderConfigLogSourceConfig:
      AWSLambdaForwarderConfigLogSourceConfig,
    AWSLogSourceTagFilter: AWSLogSourceTagFilter,
    AWSLogsConfig: AWSLogsConfig,
    AWSMetricsConfig: AWSMetricsConfig,
    AWSNamespaceFiltersExcludeOnly: AWSNamespaceFiltersExcludeOnly,
    AWSNamespaceFiltersIncludeOnly: AWSNamespaceFiltersIncludeOnly,
    AWSNamespaceTagFilter: AWSNamespaceTagFilter,
    AWSNamespacesResponse: AWSNamespacesResponse,
    AWSNamespacesResponseAttributes: AWSNamespacesResponseAttributes,
    AWSNamespacesResponseData: AWSNamespacesResponseData,
    AWSNewExternalIDResponse: AWSNewExternalIDResponse,
    AWSNewExternalIDResponseAttributes: AWSNewExternalIDResponseAttributes,
    AWSNewExternalIDResponseData: AWSNewExternalIDResponseData,
    AWSRegionsIncludeAll: AWSRegionsIncludeAll,
    AWSRegionsIncludeOnly: AWSRegionsIncludeOnly,
    AWSResourcesConfig: AWSResourcesConfig,
    AWSTracesConfig: AWSTracesConfig,
    DataExportConfig: DataExportConfig,
    XRayServicesIncludeAll: XRayServicesIncludeAll,
    XRayServicesIncludeOnly: XRayServicesIncludeOnly,
  },
};
