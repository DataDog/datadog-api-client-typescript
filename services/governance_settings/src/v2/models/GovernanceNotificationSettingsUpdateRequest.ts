import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceNotificationSettingsUpdateData } from "./GovernanceNotificationSettingsUpdateData";

/**
 * A request to update the organization-wide governance notification settings.
 */
export class GovernanceNotificationSettingsUpdateRequest {
  /**
   * The data of a governance notification settings update request.
   */
  "data": GovernanceNotificationSettingsUpdateData;
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
      type: "GovernanceNotificationSettingsUpdateData",
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
    return GovernanceNotificationSettingsUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
