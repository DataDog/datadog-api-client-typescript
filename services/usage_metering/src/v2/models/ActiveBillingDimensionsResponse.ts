import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ActiveBillingDimensionsBody } from "./ActiveBillingDimensionsBody";

/**
 * Active billing dimensions response.
 */
export class ActiveBillingDimensionsResponse {
  /**
   * Active billing dimensions data.
   */
  "data"?: ActiveBillingDimensionsBody;
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
      type: "ActiveBillingDimensionsBody",
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
    return ActiveBillingDimensionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
