import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRoutingRuleReplaceData } from "./AiGatewayRoutingRuleReplaceData";

/**
 * Request to replace an AI Gateway routing rule.
 */
export class AiGatewayRoutingRuleReplaceRequest {
  /**
   * Data used to replace an AI Gateway routing rule.
   */
  "data": AiGatewayRoutingRuleReplaceData;
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
      type: "AiGatewayRoutingRuleReplaceData",
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
    return AiGatewayRoutingRuleReplaceRequest.attributeTypeMap;
  }

  public constructor() {}
}
