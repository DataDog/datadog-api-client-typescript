import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAIncidentObject } from "./DORAIncidentObject";

/**
 * Response for the list failures endpoint.
 */
export class DORAFailuresListResponse {
  /**
   * The list of DORA incident events.
   */
  "data"?: Array<DORAIncidentObject>;
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
      type: "Array<DORAIncidentObject>",
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
    return DORAFailuresListResponse.attributeTypeMap;
  }

  public constructor() {}
}
