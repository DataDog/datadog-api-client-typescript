import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipMappingResponseData } from "./TeamsOwnershipMappingResponseData";

/**
 * The response body for a list of teams ownership mappings.
 */
export class TeamsOwnershipMappingsResponse {
  /**
   * A list of teams ownership mappings.
   */
  "data": Array<TeamsOwnershipMappingResponseData>;
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
      type: "Array<TeamsOwnershipMappingResponseData>",
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
    return TeamsOwnershipMappingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
