import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Vulnerability rating information.
 */
export class CycloneDXRating {
  /**
   * The CVSS score.
   */
  "score"?: number;
  /**
   * The severity level.
   */
  "severity"?: string;
  /**
   * The CVSS vector string.
   */
  "vector"?: string;
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
      format: "double",
    },
    severity: {
      baseName: "severity",
      type: "string",
    },
    vector: {
      baseName: "vector",
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
    return CycloneDXRating.attributeTypeMap;
  }

  public constructor() {}
}
