import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCloudAuthIntakeMappingDataResponse } from "./GitHubCloudAuthIntakeMappingDataResponse";

/**
 * Response containing a list of GitHub cloud authentication intake mappings.
 */
export class GitHubCloudAuthIntakeMappingsResponse {
  /**
   * List of GitHub cloud authentication intake mappings.
   */
  "data": Array<GitHubCloudAuthIntakeMappingDataResponse>;
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
      type: "Array<GitHubCloudAuthIntakeMappingDataResponse>",
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
    return GitHubCloudAuthIntakeMappingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
