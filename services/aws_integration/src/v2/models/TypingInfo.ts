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
import { XRayServicesIncludeAll } from "./XRayServicesIncludeAll";
import { XRayServicesIncludeOnly } from "./XRayServicesIncludeOnly";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AWSAccountPartition: ["aws", "aws-cn", "aws-us-gov"],
    AWSAccountType: ["account"],
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
    XRayServicesIncludeAll: XRayServicesIncludeAll,
    XRayServicesIncludeOnly: XRayServicesIncludeOnly,
  },
};
