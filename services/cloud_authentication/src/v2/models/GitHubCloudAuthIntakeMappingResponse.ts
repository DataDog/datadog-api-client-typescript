import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCloudAuthIntakeMappingDataResponse } from "./GitHubCloudAuthIntakeMappingDataResponse";

/**
 * Response containing a single GitHub cloud authentication intake mapping.
 */
export class GitHubCloudAuthIntakeMappingResponse {
  /**
   * Data for GitHub cloud authentication intake mapping response.
   */
  "data": GitHubCloudAuthIntakeMappingDataResponse;
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
      type: "GitHubCloudAuthIntakeMappingDataResponse",
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
    return GitHubCloudAuthIntakeMappingResponse.attributeTypeMap;
  }

  public constructor() {}
}
