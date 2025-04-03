import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTypeObject } from "./IncidentTypeObject";

/**
 * Response with a list of incident types.
 */
export class IncidentTypeListResponse {
  /**
   * An array of incident type objects.
   */
  "data": Array<IncidentTypeObject>;
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
      type: "Array<IncidentTypeObject>",
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
    return IncidentTypeListResponse.attributeTypeMap;
  }

  public constructor() {}
}
