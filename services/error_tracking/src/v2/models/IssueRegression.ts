import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Regression information for an issue that was previously resolved and then reopened.
 */
export class IssueRegression {
  /**
   * Timestamp when the issue was reopened (regressed).
   */
  "regressedAt": Date;
  /**
   * Application version where the regression was observed.
   */
  "regressedAtVersion"?: string;
  /**
   * Timestamp when the issue was resolved before the regression.
   */
  "resolvedAt": Date;
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
    regressedAt: {
      baseName: "regressed_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    regressedAtVersion: {
      baseName: "regressed_at_version",
      type: "string",
    },
    resolvedAt: {
      baseName: "resolved_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return IssueRegression.attributeTypeMap;
  }

  public constructor() {}
}
