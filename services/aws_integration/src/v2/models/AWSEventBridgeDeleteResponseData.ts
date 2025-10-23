import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSEventBridgeDeleteResponseAttributes } from "./AWSEventBridgeDeleteResponseAttributes";
import { AWSEventBridgeType } from "./AWSEventBridgeType";

/**
 * Amazon EventBridge delete response data.
 */
export class AWSEventBridgeDeleteResponseData {
  /**
   * The EventBridge source delete response attributes.
   */
  "attributes": AWSEventBridgeDeleteResponseAttributes;
  /**
   * The ID of the Amazon EventBridge list response data.
   */
  "id"?: string;
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
      type: "AWSEventBridgeDeleteResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return AWSEventBridgeDeleteResponseData.attributeTypeMap;
  }

  public constructor() {}
}
