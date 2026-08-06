/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GovernanceNotificationSettingsAttributes } from "./GovernanceNotificationSettingsAttributes";
import { GovernanceNotificationSettingsResourceType } from "./GovernanceNotificationSettingsResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A governance notification settings resource.
 */
export class GovernanceNotificationSettingsData {
  /**
   * The attributes of the organization-wide governance notification settings.
   */
  "attributes": GovernanceNotificationSettingsAttributes;
  /**
   * The unique identifier of the organization the notification settings apply to.
   */
  "id": string;
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
      type: "GovernanceNotificationSettingsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return GovernanceNotificationSettingsData.attributeTypeMap;
  }

  public constructor() {}
}
