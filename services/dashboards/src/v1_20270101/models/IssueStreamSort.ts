import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueStreamOrderingKey } from "./IssueStreamOrderingKey";
import { IssueStreamSortOrder } from "./IssueStreamSortOrder";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class IssueStreamSort {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": IssueStreamOrderingKey;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order": IssueStreamSortOrder;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    column: {
      baseName: "column",
      type: "IssueStreamOrderingKey",
      required: true,
    },
    order: {
      baseName: "order",
      type: "IssueStreamSortOrder",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IssueStreamSort.attributeTypeMap;
  }

  public constructor() {}
}
