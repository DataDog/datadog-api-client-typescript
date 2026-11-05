import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRoutingRuleTierRequest } from "./AiGatewayRoutingRuleTierRequest";

/**
 * Attributes used to create an AI Gateway routing rule.
 */
export class AiGatewayRoutingRuleCreateAttributes {
  /**
   * Organization-unique resource slug.
   */
  "slug": string;
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
    slug: {
      baseName: "slug",
      type: "string",
      required: true,
    },
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
    return AiGatewayRoutingRuleCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
