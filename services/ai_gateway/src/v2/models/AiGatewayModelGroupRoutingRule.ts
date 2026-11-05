import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Routing rule in an AI Gateway model group.
 */
export class AiGatewayModelGroupRoutingRule {
  /**
   * Organization-unique routing rule slug.
   */
  "slug": string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayModelGroupRoutingRule.attributeTypeMap;
  }

  public constructor() {}
}
