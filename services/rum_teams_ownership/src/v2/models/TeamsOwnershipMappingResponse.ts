import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipMappingResponseData } from "./TeamsOwnershipMappingResponseData";

/**
 * The response body for a single teams ownership mapping.
 */
export class TeamsOwnershipMappingResponse {
  /**
   * The JSON:API data envelope for a teams ownership mapping.
   */
  "data": TeamsOwnershipMappingResponseData;
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
      type: "TeamsOwnershipMappingResponseData",
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
    return TeamsOwnershipMappingResponse.attributeTypeMap;
  }

  public constructor() {}
}
