import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
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

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AWSCloudAuthPersonaMappingType: ["aws_cloud_auth_config"],
    GitHubCloudAuthIntakeMappingType: ["github_oidc_auth_intake_mapping"],
    GitHubCloudAuthPersonaMappingType: ["github_oidc_auth_config"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
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
  },
};
