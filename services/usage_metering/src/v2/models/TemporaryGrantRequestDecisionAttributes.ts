import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TemporaryGrantRequestDecision } from "./TemporaryGrantRequestDecision";

/**
 * Binary decision. Overrides, reason fields, and unknown attributes are rejected, including null values.
 */
export class TemporaryGrantRequestDecisionAttributes {
  /**
   * Approve the exact submitted total and expiry, or deny the request.
   */
  "decision": TemporaryGrantRequestDecision;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    decision: {
      baseName: "decision",
      type: "TemporaryGrantRequestDecision",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TemporaryGrantRequestDecisionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
