import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCloudAuthIntakeMappingAttributesResponse } from "./GitHubCloudAuthIntakeMappingAttributesResponse";
import { GitHubCloudAuthIntakeMappingType } from "./GitHubCloudAuthIntakeMappingType";

/**
 * Data for GitHub cloud authentication intake mapping response.
 */
export class GitHubCloudAuthIntakeMappingDataResponse {
  /**
   * Attributes for GitHub cloud authentication intake mapping response.
   */
  "attributes": GitHubCloudAuthIntakeMappingAttributesResponse;
  /**
   * Unique identifier for the intake mapping.
   */
  "id": string;
  /**
   * Type identifier for GitHub cloud authentication intake mapping.
   */
  "type": GitHubCloudAuthIntakeMappingType;
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
      type: "GitHubCloudAuthIntakeMappingAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GitHubCloudAuthIntakeMappingType",
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
    return GitHubCloudAuthIntakeMappingDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
