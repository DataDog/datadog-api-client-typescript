import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionFilterAll } from "./RetentionFilterAll";

/**
 * The retention filters definition.
 */
export class RetentionFilterResponse {
  /**
   * The definition of the retention filter.
   */
  "data"?: RetentionFilterAll;
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
      type: "RetentionFilterAll",
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
    return RetentionFilterResponse.attributeTypeMap;
  }

  public constructor() {}
}
