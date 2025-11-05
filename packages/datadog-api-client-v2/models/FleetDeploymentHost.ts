/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentHostPackage } from "./FleetDeploymentHostPackage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A host that is part of a deployment with its current status.
 */
export class FleetDeploymentHost {
  /**
   * Error message if the deployment failed on this host.
   */
  "error"?: string;
  /**
   * The hostname of the agent.
   */
  "hostname"?: string;
  /**
   * Current deployment status for this specific host.
   */
  "status"?: string;
  /**
   * List of packages and their versions currently installed on this host.
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
    status: {
      baseName: "status",
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
    return FleetDeploymentHost.attributeTypeMap;
  }

  public constructor() {}
}
