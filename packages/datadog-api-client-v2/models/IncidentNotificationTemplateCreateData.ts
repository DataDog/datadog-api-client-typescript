/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentNotificationTemplateCreateAttributes } from "./IncidentNotificationTemplateCreateAttributes";
import { IncidentNotificationTemplateCreateDataRelationships } from "./IncidentNotificationTemplateCreateDataRelationships";
import { IncidentNotificationTemplateType } from "./IncidentNotificationTemplateType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Notification template data for a create request.
 */
export class IncidentNotificationTemplateCreateData {
  /**
   * The attributes for creating a notification template.
   */
  "attributes": IncidentNotificationTemplateCreateAttributes;
  /**
   * The definition of `NotificationTemplateCreateDataRelationships` object.
   */
  "relationships"?: IncidentNotificationTemplateCreateDataRelationships;
  /**
   * Notification templates resource type.
   */
  "type": IncidentNotificationTemplateType;

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
      type: "IncidentNotificationTemplateCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentNotificationTemplateCreateDataRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentNotificationTemplateType",
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
    return IncidentNotificationTemplateCreateData.attributeTypeMap;
  }

  public constructor() {}
}
