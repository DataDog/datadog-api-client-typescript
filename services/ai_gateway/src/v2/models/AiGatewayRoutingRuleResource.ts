import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRoutingRuleAttributes } from "./AiGatewayRoutingRuleAttributes";
import { AiGatewayRoutingRuleType } from "./AiGatewayRoutingRuleType";

/**
 * AI Gateway routing rule resource.
 */
export class AiGatewayRoutingRuleResource {
  /**
   * Routing rule configuration and metadata.
   */
  "attributes": AiGatewayRoutingRuleAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * AI Gateway routing rule resource type.
   */
  "type": AiGatewayRoutingRuleType;
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
    attributes: {
      baseName: "attributes",
      type: "AiGatewayRoutingRuleAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayRoutingRuleType",
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
    return AiGatewayRoutingRuleResource.attributeTypeMap;
  }

  public constructor() {}
}
