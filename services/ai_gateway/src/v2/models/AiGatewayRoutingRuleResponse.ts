import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRoutingRuleResource } from "./AiGatewayRoutingRuleResource";

/**
 * Response containing one AI Gateway routing rule.
 */
export class AiGatewayRoutingRuleResponse {
  /**
   * AI Gateway routing rule resource.
   */
  "data": AiGatewayRoutingRuleResource;
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
    data: {
      baseName: "data",
      type: "AiGatewayRoutingRuleResource",
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
    return AiGatewayRoutingRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
