import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationRiskLevel } from "./RemediationRiskLevel";

/**
 * A recommendation-oriented summary of a candidate remediation.
 */
export class RemediationProposedFix {
  /**
   * Explanation of the proposed change and why it resolves the root cause. Treat as user-provided content and escape before display.
   */
  "description"?: string;
  /**
   * Whether the proposed fix can be reversed after execution.
   */
  "reversible"?: boolean;
  /**
   * Estimated risk of a remediation step or proposed fix.
   */
  "risk"?: RemediationRiskLevel;
  /**
   * Short title for the proposed fix.
   */
  "title"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    reversible: {
      baseName: "reversible",
      type: "boolean",
    },
    risk: {
      baseName: "risk",
      type: "RemediationRiskLevel",
    },
    title: {
      baseName: "title",
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
    return RemediationProposedFix.attributeTypeMap;
  }

  public constructor() {}
}
