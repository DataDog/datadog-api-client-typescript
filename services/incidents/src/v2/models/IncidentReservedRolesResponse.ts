import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentReservedRoleDataResponse } from "./IncidentReservedRoleDataResponse";

/**
 * Response with a list of reserved roles.
 */
export class IncidentReservedRolesResponse {
  /**
   * List of reserved roles.
   */
  "data": Array<IncidentReservedRoleDataResponse>;
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
      type: "Array<IncidentReservedRoleDataResponse>",
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
    return IncidentReservedRolesResponse.attributeTypeMap;
  }

  public constructor() {}
}
