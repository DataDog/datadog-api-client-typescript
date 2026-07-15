import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedRoleDataRequest } from "./IncidentUserDefinedRoleDataRequest";

/**
 * Request for creating an incident user-defined role.
 */
export class IncidentUserDefinedRoleRequest {
  /**
   * Data for creating an incident user-defined role.
   */
  "data": IncidentUserDefinedRoleDataRequest;
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
      type: "IncidentUserDefinedRoleDataRequest",
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
    return IncidentUserDefinedRoleRequest.attributeTypeMap;
  }

  public constructor() {}
}
