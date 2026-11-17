import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayProviderInitialBinding } from "./AiGatewayProviderInitialBinding";
import { AiGatewayRoutingRuleTierRequest } from "./AiGatewayRoutingRuleTierRequest";

/**
 * Attributes used to create an AI Gateway routing rule.
 */
export class AiGatewayRoutingRuleCreateAttributes {
  /**
   * Reserved for initial View and Edit permissions. Supplying this attribute returns HTTP 400 and doesn't
   * create the route. Create the route, then set its permissions through the restriction policy API.
   */
  "initialBindings"?: Array<AiGatewayProviderInitialBinding>;
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
    initialBindings: {
      baseName: "initial_bindings",
      type: "Array<AiGatewayProviderInitialBinding>",
    },
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
