import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRoutingRuleTier } from "./AiGatewayRoutingRuleTier";

/**
 * Routing rule configuration and metadata.
 */
export class AiGatewayRoutingRuleAttributes {
  /**
   * Time when the resource was created.
   */
  "createdAt": Date;
  /**
   * Description of the routing rule. Absent when unset.
   */
  "description"?: string;
  /**
   * Human-readable name of the routing rule. Absent when unset; show the slug instead.
   */
  "displayName"?: string;
  /**
   * Stable numeric route identifier used by scoped policies and `ai-gateway-route` restriction policies.
   */
  "routeId": number;
  "tiers": Array<AiGatewayRoutingRuleTier>;
  /**
   * Time when the resource was last updated.
   */
  "updatedAt": Date;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    routeId: {
      baseName: "route_id",
      type: "number",
      required: true,
      format: "int64",
    },
    tiers: {
      baseName: "tiers",
      type: "Array<AiGatewayRoutingRuleTier>",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return AiGatewayRoutingRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
