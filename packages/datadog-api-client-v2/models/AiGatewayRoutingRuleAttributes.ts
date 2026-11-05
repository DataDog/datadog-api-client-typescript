/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayRoutingRuleTier } from "./AiGatewayRoutingRuleTier";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Routing rule configuration and metadata.
 */
export class AiGatewayRoutingRuleAttributes {
  /**
   * Time when the resource was created.
   */
  "createdAt": Date;
  /**
   * Stable numeric route identifier used by scoped policies.
   */
  "routeId"?: Int64;
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
    routeId: {
      baseName: "route_id",
      type: "number",
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
