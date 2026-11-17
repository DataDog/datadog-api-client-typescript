import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyDropOffIssue } from "./ProductAnalyticsJourneyDropOffIssue";

/**
 * Attributes of a journey drop-off analysis response.
 */
export class ProductAnalyticsJourneyDropOffResponseAttributes {
  /**
   * Number of sessions that reached the step before the target but not the target step.
   */
  "dropOffCount": number;
  /**
   * The issues most associated with the drop-off.
   */
  "issues": Array<ProductAnalyticsJourneyDropOffIssue>;
  /**
   * Number of dropped-off sessions that contained an error.
   */
  "sessionsWithErrors": number;
  /**
   * Number of dropped-off sessions that contained a frustration signal.
   */
  "sessionsWithFrustrationSignals": number;
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
    dropOffCount: {
      baseName: "drop_off_count",
      type: "number",
      required: true,
      format: "int64",
    },
    issues: {
      baseName: "issues",
      type: "Array<ProductAnalyticsJourneyDropOffIssue>",
      required: true,
    },
    sessionsWithErrors: {
      baseName: "sessions_with_errors",
      type: "number",
      required: true,
      format: "int64",
    },
    sessionsWithFrustrationSignals: {
      baseName: "sessions_with_frustration_signals",
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
    return ProductAnalyticsJourneyDropOffResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
