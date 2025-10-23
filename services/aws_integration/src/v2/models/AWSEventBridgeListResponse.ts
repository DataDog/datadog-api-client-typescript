import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSEventBridgeListResponseData } from "./AWSEventBridgeListResponseData";

/**
 * Amazon EventBridge list response body.
 */
export class AWSEventBridgeListResponse {
  /**
   * Amazon EventBridge list response data.
   */
  "data": AWSEventBridgeListResponseData;
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
      type: "AWSEventBridgeListResponseData",
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
    return AWSEventBridgeListResponse.attributeTypeMap;
  }

  public constructor() {}
}
