import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCloudAuthIntakeMappingCreateAttributes } from "./GitHubCloudAuthIntakeMappingCreateAttributes";
import { GitHubCloudAuthIntakeMappingType } from "./GitHubCloudAuthIntakeMappingType";

/**
 * Data for creating a GitHub cloud authentication intake mapping.
 */
export class GitHubCloudAuthIntakeMappingCreateData {
  /**
   * Attributes for creating a GitHub cloud authentication intake mapping
   */
  "attributes": GitHubCloudAuthIntakeMappingCreateAttributes;
  /**
   * Type identifier for GitHub cloud authentication intake mapping.
   */
  "type": GitHubCloudAuthIntakeMappingType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "GitHubCloudAuthIntakeMappingCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GitHubCloudAuthIntakeMappingType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GitHubCloudAuthIntakeMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
