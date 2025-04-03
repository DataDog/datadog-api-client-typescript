import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { VulnerabilitySeverity } from "./VulnerabilitySeverity";

/**
 * Vulnerability severity.
 */
export class CVSS {
  /**
   * Vulnerability severity score.
   */
  "score": number;
  /**
   * The vulnerability severity.
   */
  "severity": VulnerabilitySeverity;
  /**
   * Vulnerability CVSS vector.
   */
  "vector": string;
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
    vector: {
      baseName: "vector",
      type: "string",
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
    return CVSS.attributeTypeMap;
  }

  public constructor() {}
}
