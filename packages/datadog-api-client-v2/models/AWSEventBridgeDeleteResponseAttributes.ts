/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSEventBridgeDeleteStatus } from "./AWSEventBridgeDeleteStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
