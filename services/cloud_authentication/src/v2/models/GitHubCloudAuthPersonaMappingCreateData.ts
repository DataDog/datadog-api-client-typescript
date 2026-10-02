import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCloudAuthPersonaMappingCreateAttributes } from "./GitHubCloudAuthPersonaMappingCreateAttributes";
import { GitHubCloudAuthPersonaMappingType } from "./GitHubCloudAuthPersonaMappingType";

/**
 * Data for creating a GitHub cloud authentication persona mapping.
 */
export class GitHubCloudAuthPersonaMappingCreateData {
  /**
   * Attributes for creating a GitHub cloud authentication persona mapping.
   */
  "attributes": GitHubCloudAuthPersonaMappingCreateAttributes;
  /**
   * Type identifier for GitHub cloud authentication persona mapping.
   */
  "type": GitHubCloudAuthPersonaMappingType;
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
      type: "GitHubCloudAuthPersonaMappingCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GitHubCloudAuthPersonaMappingType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GitHubCloudAuthPersonaMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
