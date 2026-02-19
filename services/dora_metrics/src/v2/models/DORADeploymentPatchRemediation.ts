import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentPatchRemediationType } from "./DORADeploymentPatchRemediationType";

/**
 * Remediation details for the deployment. Optional, but required to calculate failed deployment recovery time.
 */
export class DORADeploymentPatchRemediation {
  /**
   * The ID of the remediation deployment. Required when the failed deployment must be linked to a remediation deployment.
   */
  "id"?: string;
  /**
   * The type of remediation action taken. Required when the failed deployment must be linked to a remediation deployment.
   */
  "type"?: DORADeploymentPatchRemediationType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DORADeploymentPatchRemediationType",
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
    return DORADeploymentPatchRemediation.attributeTypeMap;
  }

  public constructor() {}
}
