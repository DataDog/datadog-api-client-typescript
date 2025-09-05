import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentNotificationTemplateUpdateData } from "./IncidentNotificationTemplateUpdateData";

/**
 * Update request for a notification template.
 */
export class PatchIncidentNotificationTemplateRequest {
  /**
   * Notification template data for an update request.
   */
  "data": IncidentNotificationTemplateUpdateData;
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
      type: "IncidentNotificationTemplateUpdateData",
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
    return PatchIncidentNotificationTemplateRequest.attributeTypeMap;
  }

  public constructor() {}
}
