/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayRateLimitInstancesSummaryAttributes } from "./AiGatewayRateLimitInstancesSummaryAttributes";
import { AiGatewayRateLimitInstancesSummaryType } from "./AiGatewayRateLimitInstancesSummaryType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
