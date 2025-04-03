import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTypeObject } from "./IncidentTypeObject";

/**
 * Incident type response data.
 */
export class IncidentTypeResponse {
  /**
   * Incident type response data.
   */
  "data": IncidentTypeObject;
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
      type: "IncidentTypeObject",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentTypeResponse.attributeTypeMap;
  }

  public constructor() {}
}
