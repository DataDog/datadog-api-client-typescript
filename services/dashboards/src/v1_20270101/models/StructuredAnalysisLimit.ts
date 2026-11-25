import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StructuredAnalysisLimitType } from "./StructuredAnalysisLimitType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisLimit {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StructuredAnalysisLimitType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "double",
    },
    type: {
      baseName: "type",
      type: "StructuredAnalysisLimitType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisLimit.attributeTypeMap;
  }

  public constructor() {}
}
