import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayNullableRoutingRuleTierOrdering } from "./AiGatewayNullableRoutingRuleTierOrdering";
import { AiGatewayRoutingClassifierRequest } from "./AiGatewayRoutingClassifierRequest";
import { AiGatewayRoutingRuleTargetRequest } from "./AiGatewayRoutingRuleTargetRequest";

/**
 * Routing fallback tier used to create or replace a rule.
 */
export class AiGatewayRoutingRuleTierRequest {
  /**
   * Decision model and settings for a classified tier. Omission preserves the saved classifier; null clears it. Newly selected models require provider View.
   */
  "classifier"?: AiGatewayRoutingClassifierRequest;
  /**
   * How a tier orders its targets. Omission preserves the saved same-position tier on update; null resets to configured. New tiers default to configured. The weighted_affinity ordering distributes first-choice assignments by relative target weights and accepts only model targets with an explicit provider, without repeated provider and model pairs in the same tier. The `classified` ordering is allowed only in the first tier and requires a classifier, destination rubrics, and one default destination.
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
    classifier: {
      baseName: "classifier",
      type: "AiGatewayRoutingClassifierRequest",
    },
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
