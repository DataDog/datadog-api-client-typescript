/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayNullableRoutingRuleTierOrdering } from "./AiGatewayNullableRoutingRuleTierOrdering";
import { AiGatewayRoutingRuleTargetRequest } from "./AiGatewayRoutingRuleTargetRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Routing fallback tier used to create or replace a rule.
 */
export class AiGatewayRoutingRuleTierRequest {
  /**
   * How a tier orders its targets. Omitted or null defaults to configured, which preserves target order. The weighted_affinity ordering distributes first-choice assignments by relative target weights and accepts only model targets with an explicit provider, without repeated provider and model pairs in the same tier.
   */
  "ordering"?: AiGatewayNullableRoutingRuleTierOrdering;
  "targets": Array<AiGatewayRoutingRuleTargetRequest>;

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
    ordering: {
      baseName: "ordering",
      type: "AiGatewayNullableRoutingRuleTierOrdering",
    },
    targets: {
      baseName: "targets",
      type: "Array<AiGatewayRoutingRuleTargetRequest>",
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
    return AiGatewayRoutingRuleTierRequest.attributeTypeMap;
  }

  public constructor() {}
}
