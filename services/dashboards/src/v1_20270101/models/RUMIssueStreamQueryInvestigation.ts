import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RUMIssueStreamQueryInvestigation {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "completed"?: boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    completed: {
      baseName: "completed",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMIssueStreamQueryInvestigation.attributeTypeMap;
  }

  public constructor() {}
}
