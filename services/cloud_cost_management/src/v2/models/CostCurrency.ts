import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostCurrencyType } from "./CostCurrencyType";

/**
 * A Cloud Cost Management billing currency entry.
 */
export class CostCurrency {
  /**
   * The currency code (for example, `USD`).
   */
  "id": string;
  /**
   * Type of the Cloud Cost Management billing currency resource.
   */
  "type": CostCurrencyType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostCurrencyType",
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
    return CostCurrency.attributeTypeMap;
  }

  public constructor() {}
}
