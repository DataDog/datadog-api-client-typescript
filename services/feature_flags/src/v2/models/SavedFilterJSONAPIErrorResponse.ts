import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JSONAPIErrorItem } from "./JSONAPIErrorItem";

/**
 * A saved filter error containing at least one JSON:API error object.
 */
export class SavedFilterJSONAPIErrorResponse {
  /**
   * The error details.
   */
  "errors": Array<JSONAPIErrorItem>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    errors: {
      baseName: "errors",
      type: "Array<JSONAPIErrorItem>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SavedFilterJSONAPIErrorResponse.attributeTypeMap;
  }

  public constructor() {}
}
