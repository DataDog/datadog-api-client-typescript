import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppBuilderInputValue20270101Value } from "../../v1/models/AppBuilderInputValue20270101Value";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class AppBuilderInputValue {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "value": AppBuilderInputValue20270101Value;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "AppBuilderInputValue20270101Value",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AppBuilderInputValue.attributeTypeMap;
  }

  public constructor() {}
}
