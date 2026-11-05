import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRoutingRuleTierRequest } from "./AiGatewayRoutingRuleTierRequest";

/**
 * Attributes used to replace an AI Gateway routing rule.
 */
export class AiGatewayRoutingRuleReplaceAttributes {
  "tiers": Array<AiGatewayRoutingRuleTierRequest>;
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
    tiers: {
      baseName: "tiers",
      type: "Array<AiGatewayRoutingRuleTierRequest>",
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
    return AiGatewayRoutingRuleReplaceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
