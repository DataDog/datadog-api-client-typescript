import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSEventBridgeDeleteRequestData } from "./AWSEventBridgeDeleteRequestData";

/**
 * Amazon EventBridge delete request body.
 */
export class AWSEventBridgeDeleteRequest {
  /**
   * Amazon EventBridge delete request data.
   */
  "data": AWSEventBridgeDeleteRequestData;
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
      type: "AWSEventBridgeDeleteRequestData",
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
    return AWSEventBridgeDeleteRequest.attributeTypeMap;
  }

  public constructor() {}
}
