import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentReservedRoleDataResponse } from "./IncidentReservedRoleDataResponse";

/**
 * Response with a single reserved role.
 */
export class IncidentReservedRoleResponse {
  /**
   * Reserved role data in a response.
   */
  "data": IncidentReservedRoleDataResponse;
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
      type: "IncidentReservedRoleDataResponse",
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
    return IncidentReservedRoleResponse.attributeTypeMap;
  }

  public constructor() {}
}
