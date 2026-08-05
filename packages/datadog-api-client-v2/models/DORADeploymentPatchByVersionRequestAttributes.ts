/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORADeploymentPatchRemediation } from "./DORADeploymentPatchRemediation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for patching a DORA deployment event identified by service, environment, and version.
 */
export class DORADeploymentPatchByVersionRequestAttributes {
  /**
   * Indicates whether the deployment resulted in a change failure.
   */
  "changeFailure": boolean;
  /**
   * The environment the deployment was performed in.
   */
  "env": string;
  /**
   * Remediation details for the deployment. Optional, but required to calculate failed deployment recovery time.
   */
  "remediation"?: DORADeploymentPatchRemediation;
  /**
   * The name of the service that was deployed.
   */
  "service": string;
  /**
   * The version deployed. This is the same version used to correlate with [APM Deployment Tracking](https://docs.datadoghq.com/tracing/services/deployment_tracking/).
   */
  "version": string;

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
    changeFailure: {
      baseName: "change_failure",
      type: "boolean",
      required: true,
    },
    env: {
      baseName: "env",
      type: "string",
      required: true,
    },
    remediation: {
      baseName: "remediation",
      type: "DORADeploymentPatchRemediation",
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "string",
      required: true,
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
    return DORADeploymentPatchByVersionRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
