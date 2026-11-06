import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRateLimitInstancesSummaryResource } from "./AiGatewayRateLimitInstancesSummaryResource";

/**
 * Response containing the aggregate of a template rate limit's counters.
 */
export class AiGatewayRateLimitInstancesSummaryResponse {
  /**
   * Aggregate of a template rate limit's counters.
   */
  "data": AiGatewayRateLimitInstancesSummaryResource;
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
      type: "AiGatewayRateLimitInstancesSummaryResource",
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
    return AiGatewayRateLimitInstancesSummaryResponse.attributeTypeMap;
  }

  public constructor() {}
}
