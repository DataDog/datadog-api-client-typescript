import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCloudAuthIntakeMappingCreateData } from "./GitHubCloudAuthIntakeMappingCreateData";

/**
 * Request used to create a GitHub cloud authentication intake mapping.
 */
export class GitHubCloudAuthIntakeMappingCreateRequest {
  /**
   * Data for creating a GitHub cloud authentication intake mapping.
   */
  "data": GitHubCloudAuthIntakeMappingCreateData;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "GitHubCloudAuthIntakeMappingCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GitHubCloudAuthIntakeMappingCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
