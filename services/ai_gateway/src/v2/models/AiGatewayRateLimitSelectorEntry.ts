import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * One dimension rule in a template rate limit selector.
 */
export class AiGatewayRateLimitSelectorEntry {
  /**
   * Dimension to match: user_id, team_id, model, provider, or tag:<key>. Reserved metadata tag keys are rejected.
   */
  "dim": string;
  /**
   * Give each matched value its own allowance when true. Otherwise, matched values share the allowance within the other separated dimensions.
   */
  "perValue": boolean;
  /**
   * Allowed dimension values. Omit to match any value; with per_value true, a request must still carry the dimension to match. An explicit list must contain at least one value. Listed team_id values must be existing Teams without open membership.
   */
  "values"?: Array<string>;
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
    dim: {
      baseName: "dim",
      type: "string",
      required: true,
    },
    perValue: {
      baseName: "per_value",
      type: "boolean",
      required: true,
    },
    values: {
      baseName: "values",
      type: "Array<string>",
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
    return AiGatewayRateLimitSelectorEntry.attributeTypeMap;
  }

  public constructor() {}
}
