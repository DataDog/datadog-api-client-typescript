/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A container within a problematic task that is exhibiting issues.
 */
export class RemediationProblemContainer {
  /**
   * CPU limit.
   */
  "cpuLimit"?: number;
  /**
   * Exit code if the container stopped.
   */
  "exitCode"?: number;
  /**
   * Container health status.
   */
  "healthStatus"?: string;
  /**
   * Docker image URI.
   */
  "image"?: string;
  /**
   * Container status.
   */
  "lastStatus"?: string;
  /**
   * Memory limit in MiB.
   */
  "memoryLimitMib"?: number;
  /**
   * Container name from the task definition.
   */
  "name"?: string;
  /**
   * Stop reason.
   */
  "reason"?: string;

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
    cpuLimit: {
      baseName: "cpu_limit",
      type: "number",
      format: "int64",
    },
    exitCode: {
      baseName: "exit_code",
      type: "number",
      format: "int32",
    },
    healthStatus: {
      baseName: "health_status",
      type: "string",
    },
    image: {
      baseName: "image",
      type: "string",
    },
    lastStatus: {
      baseName: "last_status",
      type: "string",
    },
    memoryLimitMib: {
      baseName: "memory_limit_mib",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    reason: {
      baseName: "reason",
      type: "string",
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
    return RemediationProblemContainer.attributeTypeMap;
  }

  public constructor() {}
}
