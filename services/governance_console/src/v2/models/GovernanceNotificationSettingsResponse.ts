import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceNotificationSettingsData } from "./GovernanceNotificationSettingsData";

/**
 * The organization-wide governance notification settings.
 */
export class GovernanceNotificationSettingsResponse {
  /**
   * A governance notification settings resource.
   */
  "data": GovernanceNotificationSettingsData;
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
      type: "GovernanceNotificationSettingsData",
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
    return GovernanceNotificationSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
