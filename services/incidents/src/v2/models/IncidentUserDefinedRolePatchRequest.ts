import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedRolePatchDataRequest } from "./IncidentUserDefinedRolePatchDataRequest";

/**
 * Request for updating an incident user-defined role.
 */
export class IncidentUserDefinedRolePatchRequest {
  /**
   * Data for updating an incident user-defined role.
   */
  "data": IncidentUserDefinedRolePatchDataRequest;
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
      type: "IncidentUserDefinedRolePatchDataRequest",
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
    return IncidentUserDefinedRolePatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
