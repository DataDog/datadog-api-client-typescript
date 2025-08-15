/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The number of profiled hosts for each hour for a given organization.
 */
export class UsageProfilingHour {
  /**
   * Contains the total number of profiled Azure app services reporting during a given hour.
   */
  "aasCount"?: number;
  /**
   * Get average number of container agents for that hour.
   */
  "avgContainerAgentCount"?: number;
  /**
   * Contains the total number of profiled hosts reporting during a given hour.
   */
  "hostCount"?: number;
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
    aasCount: {
      baseName: "aas_count",
      type: "number",
      format: "int64",
    },
    avgContainerAgentCount: {
      baseName: "avg_container_agent_count",
      type: "number",
      format: "int64",
    },
    hostCount: {
      baseName: "host_count",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageProfilingHour.attributeTypeMap;
  }

  public constructor() {}
}
