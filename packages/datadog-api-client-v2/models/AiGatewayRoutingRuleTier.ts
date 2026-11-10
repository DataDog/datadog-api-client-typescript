/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayRoutingRuleClassifier } from "./AiGatewayRoutingRuleClassifier";
import { AiGatewayRoutingRuleTarget } from "./AiGatewayRoutingRuleTarget";
import { AiGatewayRoutingRuleTierOrdering } from "./AiGatewayRoutingRuleTierOrdering";
import { AiGatewayRoutingRuleTierOrderingIssue } from "./AiGatewayRoutingRuleTierOrderingIssue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Routing fallback tier containing targets and their effective ordering.
 */
export class AiGatewayRoutingRuleTier {
  /**
   * Decision model of a classified tier.
   */
  "classifier"?: AiGatewayRoutingRuleClassifier;
  /**
   * How a tier orders its targets.
   */
  "ordering": AiGatewayRoutingRuleTierOrdering;
  /**
   * Stored tier ordering is inconsistent. mixed means targets have different supported orderings, and unknown means a target has an unsupported ordering. The tier is reported as configured without weights. Replace the rule to repair it. Omitted for consistent tiers. A forced deletion cannot rewrite a surviving tier with an unknown issue.
   */
  "orderingIssue"?: AiGatewayRoutingRuleTierOrderingIssue;
  "targets": Array<AiGatewayRoutingRuleTarget>;

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
      type: "AiGatewayRoutingRuleClassifier",
    },
    ordering: {
      baseName: "ordering",
      type: "AiGatewayRoutingRuleTierOrdering",
      required: true,
    },
    orderingIssue: {
      baseName: "ordering_issue",
      type: "AiGatewayRoutingRuleTierOrderingIssue",
    },
    targets: {
      baseName: "targets",
      type: "Array<AiGatewayRoutingRuleTarget>",
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
    return AiGatewayRoutingRuleTier.attributeTypeMap;
  }

  public constructor() {}
}
