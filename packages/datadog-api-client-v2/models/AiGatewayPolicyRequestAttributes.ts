/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayPolicyTierRequest } from "./AiGatewayPolicyTierRequest";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Attributes used to create or replace a routing policy document.
 */
export class AiGatewayPolicyRequestAttributes {
  /**
   * Inbound request pattern.
   */
  "inbound": string;
  /**
   * Routing priority.
   */
  "priority"?: Int64;
  "tiers": Array<AiGatewayPolicyTierRequest>;

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
    inbound: {
      baseName: "inbound",
      type: "string",
      required: true,
    },
    priority: {
      baseName: "priority",
      type: "number",
      format: "int64",
    },
    tiers: {
      baseName: "tiers",
      type: "Array<AiGatewayPolicyTierRequest>",
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
    return AiGatewayPolicyRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
