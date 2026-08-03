/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentConfigureV2DryRunResult } from "./FleetDeploymentConfigureV2DryRunResult";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a configuration deployment dry-run response.
 */
export class FleetDeploymentConfigureV2DryRunAttributes {
  /**
   * Validation result of a configuration deployment dry run.
   */
  "dryRun"?: FleetDeploymentConfigureV2DryRunResult;
  /**
   * Query used to filter and select target hosts for the deployment.
   */
  "query"?: string;
  /**
   * Total number of hosts targeted by the dry run.
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
    dryRun: {
      baseName: "dry_run",
      type: "FleetDeploymentConfigureV2DryRunResult",
    },
    query: {
      baseName: "query",
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
    return FleetDeploymentConfigureV2DryRunAttributes.attributeTypeMap;
  }

  public constructor() {}
}
