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
import { AWSCcmConfig } from "./AWSCcmConfig";
import { AWSCcmConfigRequest } from "./AWSCcmConfigRequest";
import { AWSCcmConfigRequestAttributes } from "./AWSCcmConfigRequestAttributes";
import { AWSCcmConfigRequestData } from "./AWSCcmConfigRequestData";
import { AWSCcmConfigResponse } from "./AWSCcmConfigResponse";
import { AWSCcmConfigResponseAttributes } from "./AWSCcmConfigResponseAttributes";
import { AWSCcmConfigResponseData } from "./AWSCcmConfigResponseData";
import { AWSCcmConfigValidationIssue } from "./AWSCcmConfigValidationIssue";
import { AWSCcmConfigValidationRequest } from "./AWSCcmConfigValidationRequest";
import { AWSCcmConfigValidationRequestAttributes } from "./AWSCcmConfigValidationRequestAttributes";
import { AWSCcmConfigValidationRequestData } from "./AWSCcmConfigValidationRequestData";
import { AWSCcmConfigValidationResponse } from "./AWSCcmConfigValidationResponse";
import { AWSCcmConfigValidationResponseAttributes } from "./AWSCcmConfigValidationResponseAttributes";
import { AWSCcmConfigValidationResponseData } from "./AWSCcmConfigValidationResponseData";
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
import { AWSMetricNameFilterPreviewDDName } from "./AWSMetricNameFilterPreviewDDName";
import { AWSMetricNameFilterPreviewFilterMatch } from "./AWSMetricNameFilterPreviewFilterMatch";
import { AWSMetricNameFilterPreviewMetric } from "./AWSMetricNameFilterPreviewMetric";
import { AWSMetricNameFilterPreviewNamespace } from "./AWSMetricNameFilterPreviewNamespace";
import { AWSMetricNameFilterPreviewRequest } from "./AWSMetricNameFilterPreviewRequest";
import { AWSMetricNameFilterPreviewRequestAttributes } from "./AWSMetricNameFilterPreviewRequestAttributes";
import { AWSMetricNameFilterPreviewRequestData } from "./AWSMetricNameFilterPreviewRequestData";
import { AWSMetricNameFilterPreviewResponse } from "./AWSMetricNameFilterPreviewResponse";
import { AWSMetricNameFilterPreviewResponseAttributes } from "./AWSMetricNameFilterPreviewResponseAttributes";
import { AWSMetricNameFilterPreviewResponseData } from "./AWSMetricNameFilterPreviewResponseData";
import { AWSMetricNameFiltersExcludeOnly } from "./AWSMetricNameFiltersExcludeOnly";
import { AWSMetricNameFiltersIncludeOnly } from "./AWSMetricNameFiltersIncludeOnly";
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
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { XRayServicesIncludeAll } from "./XRayServicesIncludeAll";
import { XRayServicesIncludeOnly } from "./XRayServicesIncludeOnly";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AWSAccountPartition: ["aws", "aws-cn", "aws-us-gov"],
    AWSAccountType: ["account"],
    AWSCcmConfigType: ["ccm_config"],
    AWSCcmConfigValidationIssueCode: [
      "ISSUE_CODE_UNSPECIFIED",
      "CREDENTIAL_ERROR",
      "BUCKET_NAME_INVALID_GOVCLOUD",
      "S3_LIST_PERMISSION_MISSING",
      "S3_GET_PERMISSION_MISSING",
      "S3_BUCKET_REGION_MISMATCH",
      "S3_BUCKET_NOT_ACCESSIBLE",
      "EXPORT_LIST_PERMISSION_MISSING",
      "EXPORT_GET_PERMISSION_MISSING",
      "EXPORT_NOT_FOUND",
      "EXPORT_STATUS_UNHEALTHY",
      "TIME_GRANULARITY_INVALID",
      "FILE_FORMAT_INVALID",
      "INCLUDE_RESOURCES_DISABLED",
      "REFRESH_CADENCE_INVALID",
      "OVERWRITE_MODE_INVALID",
      "QUERY_STATEMENT_INVALID",
    ],
    AWSCcmConfigValidationType: ["ccm_config_validation"],
    AWSEventBridgeCreateStatus: ["created"],
    AWSEventBridgeDeleteStatus: ["empty"],
    AWSEventBridgeType: ["event_bridge"],
    AWSIntegrationIamPermissionsResponseDataType: ["permissions"],
    AWSMetricNameFilterPreviewType: ["metric_name_filter_preview"],
    AWSNamespacesResponseDataType: ["namespaces"],
    AWSNewExternalIDResponseDataType: ["external_id"],
  },
  oneOfMap: {
    AWSAuthConfig: ["AWSAuthConfigKeys", "AWSAuthConfigRole"],
    AWSMetricNameFilters: [
      "AWSMetricNameFiltersIncludeOnly",
      "AWSMetricNameFiltersExcludeOnly",
    ],
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
    AWSCcmConfig: AWSCcmConfig,
    AWSCcmConfigRequest: AWSCcmConfigRequest,
    AWSCcmConfigRequestAttributes: AWSCcmConfigRequestAttributes,
    AWSCcmConfigRequestData: AWSCcmConfigRequestData,
    AWSCcmConfigResponse: AWSCcmConfigResponse,
    AWSCcmConfigResponseAttributes: AWSCcmConfigResponseAttributes,
    AWSCcmConfigResponseData: AWSCcmConfigResponseData,
    AWSCcmConfigValidationIssue: AWSCcmConfigValidationIssue,
    AWSCcmConfigValidationRequest: AWSCcmConfigValidationRequest,
    AWSCcmConfigValidationRequestAttributes:
      AWSCcmConfigValidationRequestAttributes,
    AWSCcmConfigValidationRequestData: AWSCcmConfigValidationRequestData,
    AWSCcmConfigValidationResponse: AWSCcmConfigValidationResponse,
    AWSCcmConfigValidationResponseAttributes:
      AWSCcmConfigValidationResponseAttributes,
    AWSCcmConfigValidationResponseData: AWSCcmConfigValidationResponseData,
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
    AWSMetricNameFilterPreviewDDName: AWSMetricNameFilterPreviewDDName,
    AWSMetricNameFilterPreviewFilterMatch:
      AWSMetricNameFilterPreviewFilterMatch,
    AWSMetricNameFilterPreviewMetric: AWSMetricNameFilterPreviewMetric,
    AWSMetricNameFilterPreviewNamespace: AWSMetricNameFilterPreviewNamespace,
    AWSMetricNameFilterPreviewRequest: AWSMetricNameFilterPreviewRequest,
    AWSMetricNameFilterPreviewRequestAttributes:
      AWSMetricNameFilterPreviewRequestAttributes,
    AWSMetricNameFilterPreviewRequestData:
      AWSMetricNameFilterPreviewRequestData,
    AWSMetricNameFilterPreviewResponse: AWSMetricNameFilterPreviewResponse,
    AWSMetricNameFilterPreviewResponseAttributes:
      AWSMetricNameFilterPreviewResponseAttributes,
    AWSMetricNameFilterPreviewResponseData:
      AWSMetricNameFilterPreviewResponseData,
    AWSMetricNameFiltersExcludeOnly: AWSMetricNameFiltersExcludeOnly,
    AWSMetricNameFiltersIncludeOnly: AWSMetricNameFiltersIncludeOnly,
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
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    XRayServicesIncludeAll: XRayServicesIncludeAll,
    XRayServicesIncludeOnly: XRayServicesIncludeOnly,
  },
};
