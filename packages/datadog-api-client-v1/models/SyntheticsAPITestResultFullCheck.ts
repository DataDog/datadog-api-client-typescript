/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestConfig } from "./SyntheticsTestConfig";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Object describing the API test configuration.
 */
export class SyntheticsAPITestResultFullCheck {
  /**
   * Configuration object for a Synthetic test.
   */
  "config": SyntheticsTestConfig;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    config: {
      baseName: "config",
      type: "SyntheticsTestConfig",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsAPITestResultFullCheck.attributeTypeMap;
  }

  public constructor() {}
}
