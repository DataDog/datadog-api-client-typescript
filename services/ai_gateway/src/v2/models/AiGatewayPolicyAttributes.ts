import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayPolicyTier } from "./AiGatewayPolicyTier";

/**
 * Routing policy configuration.
 */
export class AiGatewayPolicyAttributes {
  /**
   * Routing priority.
   */
  "priority": number;
  "tiers": Array<AiGatewayPolicyTier>;
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
    priority: {
      baseName: "priority",
      type: "number",
      required: true,
      format: "int64",
    },
    tiers: {
      baseName: "tiers",
      type: "Array<AiGatewayPolicyTier>",
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
    return AiGatewayPolicyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
