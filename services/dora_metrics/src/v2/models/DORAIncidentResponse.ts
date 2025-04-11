import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAIncidentResponseData } from "./DORAIncidentResponseData";

/**
 * Response after receiving a DORA incident event.
 */
export class DORAIncidentResponse {
  /**
   * Response after receiving a DORA incident event.
   */
  "data": DORAIncidentResponseData;
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
      type: "DORAIncidentResponseData",
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
    return DORAIncidentResponse.attributeTypeMap;
  }

  public constructor() {}
}
