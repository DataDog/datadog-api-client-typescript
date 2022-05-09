/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestConfig } from "./SyntheticsTestConfig";

import { AttributeTypeMap } from "../util";

/**
 * Object describing the browser test configuration.
 */
export class SyntheticsBrowserTestResultFullCheck {
  /**
   * Configuration object for a Synthetic test.
   */
  "config": SyntheticsTestConfig;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

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
    return SyntheticsBrowserTestResultFullCheck.attributeTypeMap;
  }

  public constructor() {}
}
