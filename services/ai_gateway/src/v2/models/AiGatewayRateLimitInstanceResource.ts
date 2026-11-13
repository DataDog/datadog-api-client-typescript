import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRateLimitInstanceAttributes } from "./AiGatewayRateLimitInstanceAttributes";
import { AiGatewayRateLimitInstanceType } from "./AiGatewayRateLimitInstanceType";

/**
 * One counter of a template rate limit.
 */
export class AiGatewayRateLimitInstanceResource {
  /**
   * One counter of a template rate limit and its live usage.
   */
  "attributes": AiGatewayRateLimitInstanceAttributes;
  /**
   * Counter ID, the rate limit UUID and instance key joined by `|`.
   */
  "id": string;
  /**
   * AI Gateway rate limit counter resource type.
   */
  "type": AiGatewayRateLimitInstanceType;
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
      type: "AiGatewayRateLimitInstanceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayRateLimitInstanceType",
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
    return AiGatewayRateLimitInstanceResource.attributeTypeMap;
  }

  public constructor() {}
}
