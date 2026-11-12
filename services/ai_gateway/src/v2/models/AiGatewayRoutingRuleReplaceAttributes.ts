import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRoutingRuleTierRequest } from "./AiGatewayRoutingRuleTierRequest";

/**
 * Partial route update. Omit tiers to preserve the entire graph, including hidden selections. Saved target IDs retain omitted settings. Replacing tiers must explicitly retain or remove every hidden occurrence.
 */
export class AiGatewayRoutingRuleReplaceAttributes {
  /**
   * Saved route revision. A mismatched value returns 409 without changes.
   */
  "expectedUpdatedAt"?: Date;
  /**
   * Parent-local saved occurrence IDs explicitly removed from the submitted tiers. IDs must be distinct, belong to this route, and not also be retained.
   */
  "removedTargetIds"?: Array<number>;
  "tiers"?: Array<AiGatewayRoutingRuleTierRequest>;
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
    expectedUpdatedAt: {
      baseName: "expected_updated_at",
      type: "Date",
      format: "date-time",
    },
    removedTargetIds: {
      baseName: "removed_target_ids",
      type: "Array<number>",
      format: "int64",
    },
    tiers: {
      baseName: "tiers",
      type: "Array<AiGatewayRoutingRuleTierRequest>",
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
    return AiGatewayRoutingRuleReplaceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
