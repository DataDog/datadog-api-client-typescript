import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAFailureRequestData } from "./DORAFailureRequestData";

/**
 * Request to create a DORA failure event.
 */
export class DORAFailureRequest {
  /**
   * The JSON:API data.
   */
  "data": DORAFailureRequestData;
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
      type: "DORAFailureRequestData",
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
    return DORAFailureRequest.attributeTypeMap;
  }

  public constructor() {}
}
