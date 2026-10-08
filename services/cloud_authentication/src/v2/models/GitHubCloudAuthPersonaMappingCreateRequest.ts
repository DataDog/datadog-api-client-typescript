import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCloudAuthPersonaMappingCreateData } from "./GitHubCloudAuthPersonaMappingCreateData";

/**
 * Request used to create a GitHub cloud authentication persona mapping.
 */
export class GitHubCloudAuthPersonaMappingCreateRequest {
  /**
   * Data for creating a GitHub cloud authentication persona mapping.
   */
  "data": GitHubCloudAuthPersonaMappingCreateData;
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
      type: "GitHubCloudAuthPersonaMappingCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GitHubCloudAuthPersonaMappingCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
