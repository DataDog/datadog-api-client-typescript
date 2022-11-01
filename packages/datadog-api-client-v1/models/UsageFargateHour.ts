/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Number of Fargate tasks run and hourly usage.
 */
export class UsageFargateHour {
  /**
   * The high-water mark of APM ECS Fargate tasks during the given hour.
   */
  "apmFargateCount"?: number;
  /**
   * The Application Security Monitoring ECS Fargate tasks during the given hour.
   */
  "appsecFargateCount"?: number;
  /**
   * The average profiled task count for Fargate Profiling.
   */
  "avgProfiledFargateTasks"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * The number of Fargate tasks run.
   */
  "tasksCount"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    apmFargateCount: {
      baseName: "apm_fargate_count",
      type: "number",
      format: "int64",
    },
    appsecFargateCount: {
      baseName: "appsec_fargate_count",
      type: "number",
      format: "int64",
    },
    avgProfiledFargateTasks: {
      baseName: "avg_profiled_fargate_tasks",
      type: "number",
      format: "int64",
    },
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    tasksCount: {
      baseName: "tasks_count",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageFargateHour.attributeTypeMap;
  }

  public constructor() {}
}
