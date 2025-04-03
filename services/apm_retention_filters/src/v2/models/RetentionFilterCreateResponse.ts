import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionFilter } from "./RetentionFilter";

/**
 * The retention filters definition.
 */
export class RetentionFilterCreateResponse {
  /**
   * The definition of the retention filter.
   */
  "data"?: RetentionFilter;
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
      type: "RetentionFilter",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionFilterCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
