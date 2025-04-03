import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BillingDimensionsMappingBodyItem } from "./BillingDimensionsMappingBodyItem";

/**
 * Billing dimensions mapping response.
 */
export class BillingDimensionsMappingResponse {
  /**
   * Billing dimensions mapping data.
   */
  "data"?: Array<BillingDimensionsMappingBodyItem>;
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
      type: "Array<BillingDimensionsMappingBodyItem>",
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
    return BillingDimensionsMappingResponse.attributeTypeMap;
  }

  public constructor() {}
}
