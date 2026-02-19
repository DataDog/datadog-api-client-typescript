import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentPatchRemediation } from "./DORADeploymentPatchRemediation";

/**
 * Attributes for patching a DORA deployment event.
 */
export class DORADeploymentPatchRequestAttributes {
  /**
   * Indicates whether the deployment resulted in a change failure.
   */
  "changeFailure"?: boolean;
  /**
   * Remediation details for the deployment. Optional, but required to calculate failed deployment recovery time.
   */
  "remediation"?: DORADeploymentPatchRemediation;
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
    },
    remediation: {
      baseName: "remediation",
      type: "DORADeploymentPatchRemediation",
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
    return DORADeploymentPatchRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
