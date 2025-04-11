import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionFilterWithoutAttributes } from "./RetentionFilterWithoutAttributes";

/**
 * A list of retention filters to reorder.
 */
export class ReorderRetentionFiltersRequest {
  /**
   * A list of retention filters objects.
   */
  "data": Array<RetentionFilterWithoutAttributes>;
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
    data: {
      baseName: "data",
      type: "Array<RetentionFilterWithoutAttributes>",
      required: true,
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
    return ReorderRetentionFiltersRequest.attributeTypeMap;
  }

  public constructor() {}
}
