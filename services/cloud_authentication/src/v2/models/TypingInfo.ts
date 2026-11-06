import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AWSCloudAuthIntakeMappingAttributesResponse } from "./AWSCloudAuthIntakeMappingAttributesResponse";
import { AWSCloudAuthIntakeMappingCreateAttributes } from "./AWSCloudAuthIntakeMappingCreateAttributes";
import { AWSCloudAuthIntakeMappingCreateData } from "./AWSCloudAuthIntakeMappingCreateData";
import { AWSCloudAuthIntakeMappingCreateRequest } from "./AWSCloudAuthIntakeMappingCreateRequest";
import { AWSCloudAuthIntakeMappingDataResponse } from "./AWSCloudAuthIntakeMappingDataResponse";
import { AWSCloudAuthIntakeMappingResponse } from "./AWSCloudAuthIntakeMappingResponse";
import { AWSCloudAuthIntakeMappingsResponse } from "./AWSCloudAuthIntakeMappingsResponse";
import { AWSCloudAuthPersonaMappingAttributesResponse } from "./AWSCloudAuthPersonaMappingAttributesResponse";
import { AWSCloudAuthPersonaMappingCreateAttributes } from "./AWSCloudAuthPersonaMappingCreateAttributes";
import { AWSCloudAuthPersonaMappingCreateData } from "./AWSCloudAuthPersonaMappingCreateData";
import { AWSCloudAuthPersonaMappingCreateRequest } from "./AWSCloudAuthPersonaMappingCreateRequest";
import { AWSCloudAuthPersonaMappingDataResponse } from "./AWSCloudAuthPersonaMappingDataResponse";
import { AWSCloudAuthPersonaMappingResponse } from "./AWSCloudAuthPersonaMappingResponse";
import { AWSCloudAuthPersonaMappingsResponse } from "./AWSCloudAuthPersonaMappingsResponse";
import { GitHubCloudAuthIntakeMappingAttributesResponse } from "./GitHubCloudAuthIntakeMappingAttributesResponse";
import { GitHubCloudAuthIntakeMappingCreateAttributes } from "./GitHubCloudAuthIntakeMappingCreateAttributes";
import { GitHubCloudAuthIntakeMappingCreateData } from "./GitHubCloudAuthIntakeMappingCreateData";
import { GitHubCloudAuthIntakeMappingCreateRequest } from "./GitHubCloudAuthIntakeMappingCreateRequest";
import { GitHubCloudAuthIntakeMappingDataResponse } from "./GitHubCloudAuthIntakeMappingDataResponse";
import { GitHubCloudAuthIntakeMappingResponse } from "./GitHubCloudAuthIntakeMappingResponse";
import { GitHubCloudAuthIntakeMappingsResponse } from "./GitHubCloudAuthIntakeMappingsResponse";
import { GitHubCloudAuthPersonaMappingAttributesResponse } from "./GitHubCloudAuthPersonaMappingAttributesResponse";
import { GitHubCloudAuthPersonaMappingCreateAttributes } from "./GitHubCloudAuthPersonaMappingCreateAttributes";
import { GitHubCloudAuthPersonaMappingCreateData } from "./GitHubCloudAuthPersonaMappingCreateData";
import { GitHubCloudAuthPersonaMappingCreateRequest } from "./GitHubCloudAuthPersonaMappingCreateRequest";
import { GitHubCloudAuthPersonaMappingDataResponse } from "./GitHubCloudAuthPersonaMappingDataResponse";
import { GitHubCloudAuthPersonaMappingResponse } from "./GitHubCloudAuthPersonaMappingResponse";
import { GitHubCloudAuthPersonaMappingsResponse } from "./GitHubCloudAuthPersonaMappingsResponse";
import { GitHubOIDCClaimPatterns } from "./GitHubOIDCClaimPatterns";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { OIDCCloudAuthClaimMatcher } from "./OIDCCloudAuthClaimMatcher";
import { OIDCCloudAuthClaimMatcherCreate } from "./OIDCCloudAuthClaimMatcherCreate";
import { OIDCCloudAuthPersonaMappingAttributesResponse } from "./OIDCCloudAuthPersonaMappingAttributesResponse";
import { OIDCCloudAuthPersonaMappingCreateAttributes } from "./OIDCCloudAuthPersonaMappingCreateAttributes";
import { OIDCCloudAuthPersonaMappingCreateData } from "./OIDCCloudAuthPersonaMappingCreateData";
import { OIDCCloudAuthPersonaMappingCreateRequest } from "./OIDCCloudAuthPersonaMappingCreateRequest";
import { OIDCCloudAuthPersonaMappingDataResponse } from "./OIDCCloudAuthPersonaMappingDataResponse";
import { OIDCCloudAuthPersonaMappingResponse } from "./OIDCCloudAuthPersonaMappingResponse";
import { OIDCCloudAuthPersonaMappingsResponse } from "./OIDCCloudAuthPersonaMappingsResponse";
import { OIDCCloudAuthProviderAttributesResponse } from "./OIDCCloudAuthProviderAttributesResponse";
import { OIDCCloudAuthProviderCreateAttributes } from "./OIDCCloudAuthProviderCreateAttributes";
import { OIDCCloudAuthProviderCreateData } from "./OIDCCloudAuthProviderCreateData";
import { OIDCCloudAuthProviderCreateRequest } from "./OIDCCloudAuthProviderCreateRequest";
import { OIDCCloudAuthProviderDataResponse } from "./OIDCCloudAuthProviderDataResponse";
import { OIDCCloudAuthProviderResponse } from "./OIDCCloudAuthProviderResponse";
import { OIDCCloudAuthProvidersResponse } from "./OIDCCloudAuthProvidersResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AWSCloudAuthIntakeMappingType: ["aws_cloud_auth_intake_mapping"],
    AWSCloudAuthPersonaMappingType: ["aws_cloud_auth_config"],
    GitHubCloudAuthIntakeMappingType: ["github_oidc_auth_intake_mapping"],
    GitHubCloudAuthPersonaMappingType: ["github_oidc_auth_config"],
    OIDCCloudAuthClaimMatchMode: ["exact", "glob"],
    OIDCCloudAuthDiscoveryType: ["oidc_discovery", "direct_jwks"],
    OIDCCloudAuthOrgUUIDSource: ["dd_org_uuid", "aud"],
    OIDCCloudAuthPersonaMappingType: ["custom_oidc_identity_mapping"],
    OIDCCloudAuthProviderType: ["custom_oidc_provider_config"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AWSCloudAuthIntakeMappingAttributesResponse:
      AWSCloudAuthIntakeMappingAttributesResponse,
    AWSCloudAuthIntakeMappingCreateAttributes:
      AWSCloudAuthIntakeMappingCreateAttributes,
    AWSCloudAuthIntakeMappingCreateData: AWSCloudAuthIntakeMappingCreateData,
    AWSCloudAuthIntakeMappingCreateRequest:
      AWSCloudAuthIntakeMappingCreateRequest,
    AWSCloudAuthIntakeMappingDataResponse:
      AWSCloudAuthIntakeMappingDataResponse,
    AWSCloudAuthIntakeMappingResponse: AWSCloudAuthIntakeMappingResponse,
    AWSCloudAuthIntakeMappingsResponse: AWSCloudAuthIntakeMappingsResponse,
    AWSCloudAuthPersonaMappingAttributesResponse:
      AWSCloudAuthPersonaMappingAttributesResponse,
    AWSCloudAuthPersonaMappingCreateAttributes:
      AWSCloudAuthPersonaMappingCreateAttributes,
    AWSCloudAuthPersonaMappingCreateData: AWSCloudAuthPersonaMappingCreateData,
    AWSCloudAuthPersonaMappingCreateRequest:
      AWSCloudAuthPersonaMappingCreateRequest,
    AWSCloudAuthPersonaMappingDataResponse:
      AWSCloudAuthPersonaMappingDataResponse,
    AWSCloudAuthPersonaMappingResponse: AWSCloudAuthPersonaMappingResponse,
    AWSCloudAuthPersonaMappingsResponse: AWSCloudAuthPersonaMappingsResponse,
    GitHubCloudAuthIntakeMappingAttributesResponse:
      GitHubCloudAuthIntakeMappingAttributesResponse,
    GitHubCloudAuthIntakeMappingCreateAttributes:
      GitHubCloudAuthIntakeMappingCreateAttributes,
    GitHubCloudAuthIntakeMappingCreateData:
      GitHubCloudAuthIntakeMappingCreateData,
    GitHubCloudAuthIntakeMappingCreateRequest:
      GitHubCloudAuthIntakeMappingCreateRequest,
    GitHubCloudAuthIntakeMappingDataResponse:
      GitHubCloudAuthIntakeMappingDataResponse,
    GitHubCloudAuthIntakeMappingResponse: GitHubCloudAuthIntakeMappingResponse,
    GitHubCloudAuthIntakeMappingsResponse:
      GitHubCloudAuthIntakeMappingsResponse,
    GitHubCloudAuthPersonaMappingAttributesResponse:
      GitHubCloudAuthPersonaMappingAttributesResponse,
    GitHubCloudAuthPersonaMappingCreateAttributes:
      GitHubCloudAuthPersonaMappingCreateAttributes,
    GitHubCloudAuthPersonaMappingCreateData:
      GitHubCloudAuthPersonaMappingCreateData,
    GitHubCloudAuthPersonaMappingCreateRequest:
      GitHubCloudAuthPersonaMappingCreateRequest,
    GitHubCloudAuthPersonaMappingDataResponse:
      GitHubCloudAuthPersonaMappingDataResponse,
    GitHubCloudAuthPersonaMappingResponse:
      GitHubCloudAuthPersonaMappingResponse,
    GitHubCloudAuthPersonaMappingsResponse:
      GitHubCloudAuthPersonaMappingsResponse,
    GitHubOIDCClaimPatterns: GitHubOIDCClaimPatterns,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    OIDCCloudAuthClaimMatcher: OIDCCloudAuthClaimMatcher,
    OIDCCloudAuthClaimMatcherCreate: OIDCCloudAuthClaimMatcherCreate,
    OIDCCloudAuthPersonaMappingAttributesResponse:
      OIDCCloudAuthPersonaMappingAttributesResponse,
    OIDCCloudAuthPersonaMappingCreateAttributes:
      OIDCCloudAuthPersonaMappingCreateAttributes,
    OIDCCloudAuthPersonaMappingCreateData:
      OIDCCloudAuthPersonaMappingCreateData,
    OIDCCloudAuthPersonaMappingCreateRequest:
      OIDCCloudAuthPersonaMappingCreateRequest,
    OIDCCloudAuthPersonaMappingDataResponse:
      OIDCCloudAuthPersonaMappingDataResponse,
    OIDCCloudAuthPersonaMappingResponse: OIDCCloudAuthPersonaMappingResponse,
    OIDCCloudAuthPersonaMappingsResponse: OIDCCloudAuthPersonaMappingsResponse,
    OIDCCloudAuthProviderAttributesResponse:
      OIDCCloudAuthProviderAttributesResponse,
    OIDCCloudAuthProviderCreateAttributes:
      OIDCCloudAuthProviderCreateAttributes,
    OIDCCloudAuthProviderCreateData: OIDCCloudAuthProviderCreateData,
    OIDCCloudAuthProviderCreateRequest: OIDCCloudAuthProviderCreateRequest,
    OIDCCloudAuthProviderDataResponse: OIDCCloudAuthProviderDataResponse,
    OIDCCloudAuthProviderResponse: OIDCCloudAuthProviderResponse,
    OIDCCloudAuthProvidersResponse: OIDCCloudAuthProvidersResponse,
  },
};
