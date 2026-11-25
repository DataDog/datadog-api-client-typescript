import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueStreamColumn20270101Width } from "./IssueStreamColumn20270101Width";
import { IssueStreamColumnName } from "./IssueStreamColumnName";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class IssueStreamColumn {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "field": IssueStreamColumnName;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "width": IssueStreamColumn20270101Width;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alias: {
      baseName: "alias",
      type: "string",
    },
    field: {
      baseName: "field",
      type: "IssueStreamColumnName",
      required: true,
    },
    width: {
      baseName: "width",
      type: "IssueStreamColumn20270101Width",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IssueStreamColumn.attributeTypeMap;
  }

  public constructor() {}
}
