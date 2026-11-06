import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRateLimitInstancesSummaryAttributes } from "./AiGatewayRateLimitInstancesSummaryAttributes";
import { AiGatewayRateLimitInstancesSummaryType } from "./AiGatewayRateLimitInstancesSummaryType";

/**
 * Aggregate of a template rate limit's counters.
 */
export class AiGatewayRateLimitInstancesSummaryResource {
  /**
   * Aggregate of a template rate limit's counters.
   */
  "attributes": AiGatewayRateLimitInstancesSummaryAttributes;
  /**
   * Rate limit UUID.
   */
  "id": string;
  /**
   * AI Gateway rate limit counter summary resource type.
   */
  "type": AiGatewayRateLimitInstancesSummaryType;
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
      type: "AiGatewayRateLimitInstancesSummaryAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AiGatewayRateLimitInstancesSummaryType",
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
    return AiGatewayRateLimitInstancesSummaryResource.attributeTypeMap;
  }

  public constructor() {}
}
