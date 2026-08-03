/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentHostPackage } from "./FleetDeploymentHostPackage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Per-host status entry for a deployment.
 */
export class FleetDeploymentV2DetailAgent {
  /**
   * Error message if the deployment failed on this host.
   */
  "error"?: string;
  /**
   * Hostname of the agent.
   */
  "hostname"?: string;
  /**
   * Name of the step currently executing on this host.
   */
  "runningStep"?: string;
  /**
   * Deployment status for this host (for example, "pending", "running", "succeeded", "failed").
   */
  "status"?: string;
  /**
   * Additional details about the current deployment status on this host.
   */
  "statusDetails"?: string;
  /**
   * Package version details for this host.
   */
  "versions"?: Array<FleetDeploymentHostPackage>;

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
    error: {
      baseName: "error",
      type: "string",
    },
    hostname: {
      baseName: "hostname",
      type: "string",
    },
    runningStep: {
      baseName: "running_step",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    statusDetails: {
      baseName: "status_details",
      type: "string",
    },
    versions: {
      baseName: "versions",
      type: "Array<FleetDeploymentHostPackage>",
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
    return FleetDeploymentV2DetailAgent.attributeTypeMap;
  }

  public constructor() {}
}
