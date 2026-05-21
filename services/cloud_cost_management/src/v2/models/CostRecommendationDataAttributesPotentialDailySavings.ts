import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Estimated daily savings if the recommendation is applied.
 */
export class CostRecommendationDataAttributesPotentialDailySavings {
  /**
   * Numeric amount of the potential daily savings.
   */
  "amount"?: number;
  /**
   * ISO 4217 currency code for the savings amount.
   */
  "currency"?: string;
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
    amount: {
      baseName: "amount",
      type: "number",
      format: "double",
    },
    currency: {
      baseName: "currency",
      type: "string",
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
    return CostRecommendationDataAttributesPotentialDailySavings.attributeTypeMap;
  }

  public constructor() {}
}
