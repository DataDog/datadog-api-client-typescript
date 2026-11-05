import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * One value of a budget split dimension.
 */
export class AiGatewayBudgetInstanceDimensionValue {
  /**
   * Number of instance counters carrying this value.
   */
  "instanceCount": number;
  /**
   * Spend summed across those instance counters, in microcents.
   */
  "spendMicrocents": number;
  /**
   * Raw dimension value. User and Team values are UUIDs. A counter with no value for the dimension carries the null character (U+0000).
   */
  "value": string;
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
    instanceCount: {
      baseName: "instance_count",
      type: "number",
      required: true,
      format: "int64",
    },
    spendMicrocents: {
      baseName: "spend_microcents",
      type: "number",
      required: true,
      format: "int64",
    },
    value: {
      baseName: "value",
      type: "string",
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
    return AiGatewayBudgetInstanceDimensionValue.attributeTypeMap;
  }

  public constructor() {}
}
