import { AttributeTypeMap } from "@datadog/datadog-api-client";

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
