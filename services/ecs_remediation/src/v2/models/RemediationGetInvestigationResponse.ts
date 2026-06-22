import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationInvestigation } from "./RemediationInvestigation";

/**
 * Response payload for getting a single investigation.
 */
export class RemediationGetInvestigationResponse {
  /**
   * A single ECS remediation investigation: a detected issue together with its proposed plan, history, and ECS workload metadata.
   */
  "investigation": RemediationInvestigation;
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
    investigation: {
      baseName: "investigation",
      type: "RemediationInvestigation",
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
    return RemediationGetInvestigationResponse.attributeTypeMap;
  }

  public constructor() {}
}
