import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentPatchByVersionRemediation } from "./DORADeploymentPatchByVersionRemediation";

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
   * Remediation details for the deployment. Optional, but required to calculate failed deployment recovery time. Specify either `id` or `version` to identify the remediation deployment, but not both.
   */
  "remediation"?: DORADeploymentPatchByVersionRemediation;
  /**
   * The name of the service that was deployed.
   */
  "service": string;
  /**
   * The version deployed. This can be seen in the Service Catalog or in the APM Deployment Tracking.
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
      type: "DORADeploymentPatchByVersionRemediation",
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
