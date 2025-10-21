import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSEventBridgeDeleteRequestAttributes } from "./AWSEventBridgeDeleteRequestAttributes";
import { AWSEventBridgeType } from "./AWSEventBridgeType";

/**
 * Amazon EventBridge delete request data.
 */
export class AWSEventBridgeDeleteRequestData {
  /**
   * The EventBridge source to be deleted.
   */
  "attributes": AWSEventBridgeDeleteRequestAttributes;
  /**
   * Amazon EventBridge resource type.
   */
  "type": AWSEventBridgeType;
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
    attributes: {
      baseName: "attributes",
      type: "AWSEventBridgeDeleteRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSEventBridgeType",
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
    return AWSEventBridgeDeleteRequestData.attributeTypeMap;
  }

  public constructor() {}
}
