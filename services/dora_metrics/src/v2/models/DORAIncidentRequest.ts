import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAIncidentRequestData } from "./DORAIncidentRequestData";

/**
 * Request to create a DORA incident event.
 */
export class DORAIncidentRequest {
  /**
   * The JSON:API data.
   */
  "data": DORAIncidentRequestData;
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
      type: "DORAIncidentRequestData",
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
    return DORAIncidentRequest.attributeTypeMap;
  }

  public constructor() {}
}
