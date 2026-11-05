/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayPolicyTier } from "./AiGatewayPolicyTier";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Routing policy configuration.
 */
export class AiGatewayPolicyAttributes {
  /**
   * Routing priority.
   */
  "priority": Int64;
  "tiers": Array<AiGatewayPolicyTier>;

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
    priority: {
      baseName: "priority",
      type: "number",
      required: true,
      format: "int64",
    },
    tiers: {
      baseName: "tiers",
      type: "Array<AiGatewayPolicyTier>",
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
    return AiGatewayPolicyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
