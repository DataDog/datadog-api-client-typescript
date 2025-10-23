/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentOperation } from "./FleetDeploymentOperation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a deployment in the response.
 */
export class FleetDeploymentAttributes {
  /**
   * Ordered list of configuration file operations to perform on the target hosts.
   */
  "configOperations"?: Array<FleetDeploymentOperation>;
  /**
   * Estimated completion time of the deployment as a Unix timestamp (seconds since epoch).
   */
  "estimatedEndTimeUnix"?: number;
  /**
   * Query used to filter and select target hosts for the deployment. Uses the Datadog query syntax.
   */
  "filterQuery"?: string;
  /**
   * Current high-level status of the deployment (for example, "pending", "running", "completed", "failed").
   */
  "highLevelStatus"?: string;
  /**
   * Total number of hosts targeted by this deployment.
   */
  "totalHosts"?: number;

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
    configOperations: {
      baseName: "config_operations",
      type: "Array<FleetDeploymentOperation>",
    },
    estimatedEndTimeUnix: {
      baseName: "estimated_end_time_unix",
      type: "number",
      format: "int64",
    },
    filterQuery: {
      baseName: "filter_query",
      type: "string",
    },
    highLevelStatus: {
      baseName: "high_level_status",
      type: "string",
    },
    totalHosts: {
      baseName: "total_hosts",
      type: "number",
      format: "int64",
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
    return FleetDeploymentAttributes.attributeTypeMap;
  }

  public constructor() {}
}
