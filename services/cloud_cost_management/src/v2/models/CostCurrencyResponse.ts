import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostCurrency } from "./CostCurrency";

/**
 * The dominant Cloud Cost Management billing currency for the requested period. The `data` array contains at most one entry, and is empty when no currency data is available.
 */
export class CostCurrencyResponse {
  /**
   * The dominant billing currency. Empty when no data is available, or a single entry otherwise.
   */
  "data": Array<CostCurrency>;
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
      type: "Array<CostCurrency>",
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
    return CostCurrencyResponse.attributeTypeMap;
  }

  public constructor() {}
}
