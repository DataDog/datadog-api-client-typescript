import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceConfigData } from "./GovernanceConfigData";

/**
 * The Governance Console configuration for an organization.
 */
export class GovernanceConfigResponse {
  /**
   * A Governance Console configuration resource.
   */
  "data": GovernanceConfigData;
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
    data: {
      baseName: "data",
      type: "GovernanceConfigData",
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
    return GovernanceConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
