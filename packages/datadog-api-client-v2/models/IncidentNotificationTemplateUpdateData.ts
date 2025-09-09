/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentNotificationTemplateType } from "./IncidentNotificationTemplateType";
import { IncidentNotificationTemplateUpdateAttributes } from "./IncidentNotificationTemplateUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Notification template data for an update request.
 */
export class IncidentNotificationTemplateUpdateData {
  /**
   * The attributes to update on a notification template.
   */
  "attributes"?: IncidentNotificationTemplateUpdateAttributes;
  /**
   * The unique identifier of the notification template.
   */
  "id": string;
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
      type: "IncidentNotificationTemplateUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return IncidentNotificationTemplateUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
