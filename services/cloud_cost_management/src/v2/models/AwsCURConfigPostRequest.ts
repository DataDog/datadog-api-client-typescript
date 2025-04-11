import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsCURConfigPostData } from "./AwsCURConfigPostData";

/**
 * AWS CUR config Post Request.
 */
export class AwsCURConfigPostRequest {
  /**
   * AWS CUR config Post data.
   */
  "data": AwsCURConfigPostData;
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
      type: "AwsCURConfigPostData",
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
    return AwsCURConfigPostRequest.attributeTypeMap;
  }

  public constructor() {}
}
