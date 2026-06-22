import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationGuardrailVerdict } from "./RemediationGuardrailVerdict";

/**
 * The guardrail decision applied to a plan or investigation.
 */
export class RemediationGuardrailDecision {
  /**
   * The verdict a guardrail applied to a plan or investigation.
   */
  "decision"?: RemediationGuardrailVerdict;
  /**
   * ID of the matching guardrail. Set when the decision is not denied; may be empty when denied because no rule matched.
   */
  "guardrailId"?: string;
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
    decision: {
      baseName: "decision",
      type: "RemediationGuardrailVerdict",
    },
    guardrailId: {
      baseName: "guardrail_id",
      type: "string",
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
    return RemediationGuardrailDecision.attributeTypeMap;
  }

  public constructor() {}
}
