import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Number of the group's findings for each value of their `@severity` attribute. The response includes every
 * level, including levels with a count of zero.
 */
export class RemediationGroupFindingsBySeverity {
  /**
   * Number of critical findings.
   */
  "critical": number;
  /**
   * Number of high findings.
   */
  "high": number;
  /**
   * Number of info findings.
   */
  "info": number;
  /**
   * Number of low findings.
   */
  "low": number;
  /**
   * Number of medium findings.
   */
  "medium": number;
  /**
   * Number of findings with no severity.
   */
  "none": number;
  /**
   * Number of findings with an unknown severity.
   */
  "unknown": number;
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
    critical: {
      baseName: "critical",
      type: "number",
      required: true,
      format: "int64",
    },
    high: {
      baseName: "high",
      type: "number",
      required: true,
      format: "int64",
    },
    info: {
      baseName: "info",
      type: "number",
      required: true,
      format: "int64",
    },
    low: {
      baseName: "low",
      type: "number",
      required: true,
      format: "int64",
    },
    medium: {
      baseName: "medium",
      type: "number",
      required: true,
      format: "int64",
    },
    none: {
      baseName: "none",
      type: "number",
      required: true,
      format: "int64",
    },
    unknown: {
      baseName: "unknown",
      type: "number",
      required: true,
      format: "int64",
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
    return RemediationGroupFindingsBySeverity.attributeTypeMap;
  }

  public constructor() {}
}
