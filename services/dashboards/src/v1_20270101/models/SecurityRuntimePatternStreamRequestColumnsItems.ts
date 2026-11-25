import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityRuntimePatternStreamRequestColumnsItems20270101Width } from "./SecurityRuntimePatternStreamRequestColumnsItems20270101Width";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SecurityRuntimePatternStreamRequestColumnsItems {
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
  "width": SecurityRuntimePatternStreamRequestColumnsItems20270101Width;
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
    width: {
      baseName: "width",
      type: "SecurityRuntimePatternStreamRequestColumnsItems20270101Width",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityRuntimePatternStreamRequestColumnsItems.attributeTypeMap;
  }

  public constructor() {}
}
