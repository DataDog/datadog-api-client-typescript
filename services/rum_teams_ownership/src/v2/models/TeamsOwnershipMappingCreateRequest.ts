import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipMappingCreateData } from "./TeamsOwnershipMappingCreateData";

/**
 * The request body for creating a teams ownership mapping.
 */
export class TeamsOwnershipMappingCreateRequest {
  /**
   * The JSON:API data envelope for a teams ownership mapping create request.
   */
  "data": TeamsOwnershipMappingCreateData;
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
      type: "TeamsOwnershipMappingCreateData",
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
    return TeamsOwnershipMappingCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
