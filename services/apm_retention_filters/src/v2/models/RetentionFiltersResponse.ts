import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionFilterAll } from "./RetentionFilterAll";

/**
 * An ordered list of retention filters.
 */
export class RetentionFiltersResponse {
  /**
   * A list of retention filters objects.
   */
  "data": Array<RetentionFilterAll>;
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
      type: "Array<RetentionFilterAll>",
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
    return RetentionFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
