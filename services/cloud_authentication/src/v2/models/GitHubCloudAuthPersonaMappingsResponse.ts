import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCloudAuthPersonaMappingDataResponse } from "./GitHubCloudAuthPersonaMappingDataResponse";

/**
 * Response containing a list of GitHub cloud authentication persona mappings.
 */
export class GitHubCloudAuthPersonaMappingsResponse {
  /**
   * List of GitHub cloud authentication persona mappings.
   */
  "data": Array<GitHubCloudAuthPersonaMappingDataResponse>;
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
      type: "Array<GitHubCloudAuthPersonaMappingDataResponse>",
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
    return GitHubCloudAuthPersonaMappingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
