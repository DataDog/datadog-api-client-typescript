import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRoutingRuleCreateData } from "./AiGatewayRoutingRuleCreateData";

/**
 * Request to create an AI Gateway routing rule.
 */
export class AiGatewayRoutingRuleCreateRequest {
  /**
   * Data used to create an AI Gateway routing rule.
   */
  "data": AiGatewayRoutingRuleCreateData;
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
      type: "AiGatewayRoutingRuleCreateData",
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
    return AiGatewayRoutingRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
