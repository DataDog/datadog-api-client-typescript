import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The raw error budget remaining for the SLO.
 */
export class RawErrorBudgetRemaining {
  /**
   * The unit of the error budget (for example, `seconds`, `requests`).
   */
  "unit": string;
  /**
   * The numeric value of the remaining error budget.
   */
  "value": number;
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
    unit: {
      baseName: "unit",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "double",
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
    return RawErrorBudgetRemaining.attributeTypeMap;
  }

  public constructor() {}
}
