import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCloudAuthPersonaMappingAttributesResponse } from "./GitHubCloudAuthPersonaMappingAttributesResponse";
import { GitHubCloudAuthPersonaMappingType } from "./GitHubCloudAuthPersonaMappingType";

/**
 * Data for GitHub cloud authentication persona mapping response.
 */
export class GitHubCloudAuthPersonaMappingDataResponse {
  /**
   * Attributes for GitHub cloud authentication persona mapping response.
   */
  "attributes": GitHubCloudAuthPersonaMappingAttributesResponse;
  /**
   * Unique identifier for the persona mapping.
   */
  "id": string;
  /**
   * Type identifier for GitHub cloud authentication persona mapping.
   */
  "type": GitHubCloudAuthPersonaMappingType;
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
    attributes: {
      baseName: "attributes",
      type: "GitHubCloudAuthPersonaMappingAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GitHubCloudAuthPersonaMappingType",
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
    return GitHubCloudAuthPersonaMappingDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
