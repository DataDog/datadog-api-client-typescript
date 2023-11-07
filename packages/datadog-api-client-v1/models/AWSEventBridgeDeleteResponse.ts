/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSEventBridgeDeleteStatus } from "./AWSEventBridgeDeleteStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An indicator of the successful deletion of an EventBridge source.
 */
export class AWSEventBridgeDeleteResponse {
  /**
   * The event source status "empty".
   */
  "status"?: AWSEventBridgeDeleteStatus;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSEventBridgeDeleteResponse.attributeTypeMap;
  }

  public constructor() {}
}
