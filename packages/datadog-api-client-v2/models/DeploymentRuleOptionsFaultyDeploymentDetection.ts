/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Faulty deployment detection options for deployment rules.
 */
export class DeploymentRuleOptionsFaultyDeploymentDetection {
  /**
   * Resources to exclude from faulty deployment detection.
   */
  "excludedResources"?: Array<string>;
  /**
   * The operation name for faulty deployment detection.
   */
  "operationName"?: string;
  /**
   * The wait time for faulty deployment detection.
   */
  "waitTime"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    excludedResources: {
      baseName: "excluded_resources",
      type: "Array<string>",
    },
    operationName: {
      baseName: "operation_name",
      type: "string",
    },
    waitTime: {
      baseName: "wait_time",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DeploymentRuleOptionsFaultyDeploymentDetection.attributeTypeMap;
  }

  public constructor() {}
}
