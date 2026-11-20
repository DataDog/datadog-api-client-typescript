import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DetectionRuleStreamQuery } from "./DetectionRuleStreamQuery";
import { DetectionRuleStreamRequestColumnsItems } from "./DetectionRuleStreamRequestColumnsItems";
import { DetectionRuleStreamRequestResponseFormat } from "./DetectionRuleStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DetectionRuleStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<DetectionRuleStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": DetectionRuleStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": DetectionRuleStreamRequestResponseFormat;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<DetectionRuleStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "DetectionRuleStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "DetectionRuleStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DetectionRuleStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
