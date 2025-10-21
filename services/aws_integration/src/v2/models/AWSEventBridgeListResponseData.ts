import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSEventBridgeListResponseAttributes } from "./AWSEventBridgeListResponseAttributes";
import { AWSEventBridgeType } from "./AWSEventBridgeType";

/**
 * Amazon EventBridge list response data.
 */
export class AWSEventBridgeListResponseData {
  /**
   * An object describing the EventBridge configuration for multiple accounts.
   */
  "attributes": AWSEventBridgeListResponseAttributes;
  /**
   * The ID of the Amazon EventBridge list response data.
   */
  "id": string;
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
      type: "AWSEventBridgeListResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return AWSEventBridgeListResponseData.attributeTypeMap;
  }

  public constructor() {}
}
