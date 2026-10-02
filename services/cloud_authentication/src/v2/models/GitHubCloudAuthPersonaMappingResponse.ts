import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCloudAuthPersonaMappingDataResponse } from "./GitHubCloudAuthPersonaMappingDataResponse";

/**
 * Response containing a single GitHub cloud authentication persona mapping.
 */
export class GitHubCloudAuthPersonaMappingResponse {
  /**
   * Data for GitHub cloud authentication persona mapping response.
   */
  "data": GitHubCloudAuthPersonaMappingDataResponse;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
      type: "GitHubCloudAuthPersonaMappingDataResponse",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GitHubCloudAuthPersonaMappingResponse.attributeTypeMap;
  }

  public constructor() {}
}
