import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { VulnerabilitySeverity } from "./VulnerabilitySeverity";

/**
 * Vulnerability EPSS severity.
 */
export class EPSS {
  /**
   * Vulnerability EPSS severity score.
   */
  "score": number;
  /**
   * The vulnerability severity.
   */
  "severity": VulnerabilitySeverity;
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
    score: {
      baseName: "score",
      type: "number",
      required: true,
      format: "double",
    },
    severity: {
      baseName: "severity",
      type: "VulnerabilitySeverity",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EPSS.attributeTypeMap;
  }

  public constructor() {}
}
