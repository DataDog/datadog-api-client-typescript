import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentOutreachModeUpdateData } from "./SecurityAgentOutreachModeUpdateData";

/**
 * Request to set the organization's outreach mode.
 */
export class SecurityAgentOutreachModeUpdateRequest {
  /**
   * Data of a mode-only policy update request.
   */
  "data": SecurityAgentOutreachModeUpdateData;
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
      type: "SecurityAgentOutreachModeUpdateData",
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
    return SecurityAgentOutreachModeUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
