import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAFailureResponseData } from "./DORAFailureResponseData";

/**
 * Response after receiving a DORA incident event.
 */
export class DORAFailureResponse {
  /**
   * Response after receiving a DORA incident event.
   */
  "data": DORAFailureResponseData;
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
      type: "DORAFailureResponseData",
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
    return DORAFailureResponse.attributeTypeMap;
  }

  public constructor() {}
}
