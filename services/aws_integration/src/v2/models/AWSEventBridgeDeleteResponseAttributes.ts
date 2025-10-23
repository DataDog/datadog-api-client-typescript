import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSEventBridgeDeleteStatus } from "./AWSEventBridgeDeleteStatus";

/**
 * The EventBridge source delete response attributes.
 */
export class AWSEventBridgeDeleteResponseAttributes {
  /**
   * The event source status "empty".
   */
  "status"?: AWSEventBridgeDeleteStatus;
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
    status: {
      baseName: "status",
      type: "AWSEventBridgeDeleteStatus",
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
    return AWSEventBridgeDeleteResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
