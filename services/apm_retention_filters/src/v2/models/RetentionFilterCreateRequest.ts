import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionFilterCreateData } from "./RetentionFilterCreateData";

/**
 * The body of the retention filter to be created.
 */
export class RetentionFilterCreateRequest {
  /**
   * The body of the retention filter to be created.
   */
  "data": RetentionFilterCreateData;
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
      type: "RetentionFilterCreateData",
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
    return RetentionFilterCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
