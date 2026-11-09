import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayNullableRoutingRuleTierOrdering } from "./AiGatewayNullableRoutingRuleTierOrdering";
import { AiGatewayRoutingRuleClassifierRequest } from "./AiGatewayRoutingRuleClassifierRequest";
import { AiGatewayRoutingRuleTargetRequest } from "./AiGatewayRoutingRuleTargetRequest";

/**
 * Routing fallback tier used to create or replace a rule.
 */
export class AiGatewayRoutingRuleTierRequest {
  /**
   * Decision model that picks the destination of a classified tier.
   */
  "classifier"?: AiGatewayRoutingRuleClassifierRequest;
  /**
   * How a tier orders its targets. Omitted or null defaults to configured, which preserves target order. The weighted_affinity ordering distributes first-choice assignments by relative target weights and accepts only model targets with an explicit provider, without repeated provider and model pairs in the same tier. The classified ordering lets a decision model pick one destination for each request by its rubric. It is allowed only on the first tier, and it needs a classifier and exactly one default destination.
   *
   * **Note**: Classified routing is in Preview and may not be available for all organizations. Saving a classified tier returns 403 Forbidden unless the feature is enabled for your organization.
   */
  "ordering"?: AiGatewayNullableRoutingRuleTierOrdering;
  /**
   * Targets of the tier. A classified tier accepts only model targets, each with an explicit provider ("*" is not allowed). Exactly one of its targets is the default, and the other 1 to 9 targets are destinations with a rubric.
   */
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
      type: "AiGatewayRoutingRuleClassifierRequest",
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
