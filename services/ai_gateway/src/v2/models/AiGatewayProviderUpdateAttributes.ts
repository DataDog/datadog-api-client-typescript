import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes used to update an AI Gateway provider.
 */
export class AiGatewayProviderUpdateAttributes {
  /**
   * Multiplier applied to provider costs. Must be greater than 0 and at most 1000000.
   */
  "costMultiplier"?: number;
  /**
   * Human-readable resource name.
   */
  "name"?: string;
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
    costMultiplier: {
      baseName: "cost_multiplier",
      type: "number",
      format: "double",
    },
    name: {
      baseName: "name",
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
    return AiGatewayProviderUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
