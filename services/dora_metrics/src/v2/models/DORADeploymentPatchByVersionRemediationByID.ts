import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentPatchRemediationType } from "./DORADeploymentPatchRemediationType";

/**
 * Remediation details identified by the ID of the remediation deployment.
 */
export class DORADeploymentPatchByVersionRemediationByID {
  /**
   * The ID of the remediation deployment.
   */
  "id": string;
  /**
   * The type of remediation action taken. Required when the failed deployment must be linked to a remediation deployment.
   */
  "type": DORADeploymentPatchRemediationType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DORADeploymentPatchRemediationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DORADeploymentPatchByVersionRemediationByID.attributeTypeMap;
  }

  public constructor() {}
}
