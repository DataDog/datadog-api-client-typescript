import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentPatchRemediationType } from "./DORADeploymentPatchRemediationType";

/**
 * Remediation details identified by the version of the remediation deployment, matched against the same service and environment as the failed deployment.
 */
export class DORADeploymentPatchByVersionRemediationByVersion {
  /**
   * The type of remediation action taken. Required when the failed deployment must be linked to a remediation deployment.
   */
  "type": DORADeploymentPatchRemediationType;
  /**
   * The version of the remediation deployment.
   */
  "version": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "DORADeploymentPatchRemediationType",
      required: true,
    },
    version: {
      baseName: "version",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DORADeploymentPatchByVersionRemediationByVersion.attributeTypeMap;
  }

  public constructor() {}
}
