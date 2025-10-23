import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSEventBridgeCreateRequestAttributes } from "./AWSEventBridgeCreateRequestAttributes";
import { AWSEventBridgeType } from "./AWSEventBridgeType";

/**
 * Amazon EventBridge create request data.
 */
export class AWSEventBridgeCreateRequestData {
  /**
   * The EventBridge source to be created.
   */
  "attributes": AWSEventBridgeCreateRequestAttributes;
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
      type: "AWSEventBridgeCreateRequestAttributes",
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
    return AWSEventBridgeCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
