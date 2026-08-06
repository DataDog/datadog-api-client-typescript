import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The aggregation applied to an event query.
 */
export class GovernanceInsightEventCompute {
  /**
   * The aggregation function to apply.
   */
  "aggregation": string;
  /**
   * The aggregation time window, in milliseconds.
   */
  "interval": number;
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
    aggregation: {
      baseName: "aggregation",
      type: "string",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "number",
      required: true,
      format: "int64",
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
    return GovernanceInsightEventCompute.attributeTypeMap;
  }

  public constructor() {}
}
