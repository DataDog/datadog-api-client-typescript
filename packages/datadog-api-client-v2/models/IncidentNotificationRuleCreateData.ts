/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentNotificationRuleCreateAttributes } from "./IncidentNotificationRuleCreateAttributes";
import { IncidentNotificationRuleCreateDataRelationships } from "./IncidentNotificationRuleCreateDataRelationships";
import { IncidentNotificationRuleType } from "./IncidentNotificationRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Notification rule data for a create request.
 */
export class IncidentNotificationRuleCreateData {
  /**
   * The attributes for creating a notification rule.
   */
  "attributes": IncidentNotificationRuleCreateAttributes;
  /**
   * The definition of `NotificationRuleCreateDataRelationships` object.
   */
  "relationships"?: IncidentNotificationRuleCreateDataRelationships;
  /**
   * Notification rules resource type.
   */
  "type": IncidentNotificationRuleType;

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
      type: "IncidentNotificationRuleCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentNotificationRuleCreateDataRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentNotificationRuleType",
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
    return IncidentNotificationRuleCreateData.attributeTypeMap;
  }

  public constructor() {}
}
