/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestExecutionRule } from "./SyntheticsTestExecutionRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * CI/CD options for a Synthetic test.
 */
export class SyntheticsTestCiOptions {
  /**
   * Execution rule for a Synthetics test.
   */
  "executionRule"?: SyntheticsTestExecutionRule;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    executionRule: {
      baseName: "executionRule",
      type: "SyntheticsTestExecutionRule",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestCiOptions.attributeTypeMap;
  }

  public constructor() {}
}
