import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CompositeStreamRequestColumn20270101Width } from "./CompositeStreamRequestColumn20270101Width";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CompositeStreamRequestColumn {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "field": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "source"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "width": CompositeStreamRequestColumn20270101Width;
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
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "string",
    },
    width: {
      baseName: "width",
      type: "CompositeStreamRequestColumn20270101Width",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CompositeStreamRequestColumn.attributeTypeMap;
  }

  public constructor() {}
}
