/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";

import { AttributeTypeMap } from "../util";

/**
 * Object to start or pause an existing Synthetic test.
 */
export class SyntheticsUpdateTestPauseStatusPayload {
  /**
   * Define whether you want to start (`live`) or pause (`paused`) a
   * Synthetic test.
   */
  "newStatus"?: SyntheticsTestPauseStatus;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    newStatus: {
      baseName: "new_status",
      type: "SyntheticsTestPauseStatus",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsUpdateTestPauseStatusPayload.attributeTypeMap;
  }

  public constructor() {}
}
