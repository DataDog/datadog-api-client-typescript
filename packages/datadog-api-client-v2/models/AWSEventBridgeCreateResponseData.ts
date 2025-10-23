/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSEventBridgeCreateResponseAttributes } from "./AWSEventBridgeCreateResponseAttributes";
import { AWSEventBridgeType } from "./AWSEventBridgeType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
