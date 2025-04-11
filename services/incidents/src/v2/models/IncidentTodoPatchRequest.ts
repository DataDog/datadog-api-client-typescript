import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTodoPatchData } from "./IncidentTodoPatchData";

/**
 * Patch request for an incident todo.
 */
export class IncidentTodoPatchRequest {
  /**
   * Incident todo data for a patch request.
   */
  "data": IncidentTodoPatchData;
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
      type: "IncidentTodoPatchData",
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
    return IncidentTodoPatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
