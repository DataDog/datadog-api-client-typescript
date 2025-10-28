import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSEventBridgeCreateResponseAttributes } from "./AWSEventBridgeCreateResponseAttributes";
import { AWSEventBridgeType } from "./AWSEventBridgeType";

/**
 * Amazon EventBridge create response data.
 */
export class AWSEventBridgeCreateResponseData {
  /**
   * A created EventBridge source.
   */
  "attributes": AWSEventBridgeCreateResponseAttributes;
  /**
   * The ID of the Amazon EventBridge create response data.
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
      type: "AWSEventBridgeCreateResponseAttributes",
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
    return AWSEventBridgeCreateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
