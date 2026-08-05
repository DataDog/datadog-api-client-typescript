import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceNotificationSettingsResourceType } from "./GovernanceNotificationSettingsResourceType";
import { GovernanceNotificationSettingsUpdateAttributes } from "./GovernanceNotificationSettingsUpdateAttributes";

/**
 * The data of a governance notification settings update request.
 */
export class GovernanceNotificationSettingsUpdateData {
  /**
   * The attributes of the governance notification settings that can be updated. Only the attributes present in the request are modified.
   */
  "attributes"?: GovernanceNotificationSettingsUpdateAttributes;
  /**
   * Governance notification settings resource type.
   */
  "type": GovernanceNotificationSettingsResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "GovernanceNotificationSettingsUpdateAttributes",
    },
    type: {
      baseName: "type",
      type: "GovernanceNotificationSettingsResourceType",
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
    return GovernanceNotificationSettingsUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
