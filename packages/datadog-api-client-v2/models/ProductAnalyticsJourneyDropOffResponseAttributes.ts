/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneyDropOffIssue } from "./ProductAnalyticsJourneyDropOffIssue";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Attributes of a journey drop-off analysis response.
 */
export class ProductAnalyticsJourneyDropOffResponseAttributes {
  /**
   * Number of sessions that reached the step before the target but not the target step.
   */
  "dropOffCount": Int64;
  /**
   * The issues most associated with the drop-off.
   */
  "issues": Array<ProductAnalyticsJourneyDropOffIssue>;
  /**
   * Number of dropped-off sessions that contained an error.
   */
  "sessionsWithErrors": Int64;
  /**
   * Number of dropped-off sessions that contained a frustration signal.
   */
  "sessionsWithFrustrationSignals": Int64;

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
