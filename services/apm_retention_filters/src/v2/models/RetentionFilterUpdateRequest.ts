import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionFilterUpdateData } from "./RetentionFilterUpdateData";

/**
 * The body of the retention filter to be updated.
 */
export class RetentionFilterUpdateRequest {
  /**
   * The body of the retention filter to be updated.
   */
  "data": RetentionFilterUpdateData;
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
      type: "RetentionFilterUpdateData",
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
    return RetentionFilterUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
