import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentNotificationTemplateArrayMeta } from "./IncidentNotificationTemplateArrayMeta";
import { IncidentNotificationTemplateIncludedItems } from "./IncidentNotificationTemplateIncludedItems";
import { IncidentNotificationTemplateResponseData } from "./IncidentNotificationTemplateResponseData";

/**
 * Response with notification templates.
 */
export class IncidentNotificationTemplateArray {
  /**
   * The `NotificationTemplateArray` `data`.
   */
  "data": Array<IncidentNotificationTemplateResponseData>;
  /**
   * Related objects that are included in the response.
   */
  "included"?: Array<IncidentNotificationTemplateIncludedItems>;
  /**
   * Response metadata.
   */
  "meta"?: IncidentNotificationTemplateArrayMeta;
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
      type: "Array<IncidentNotificationTemplateResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentNotificationTemplateIncludedItems>",
    },
    meta: {
      baseName: "meta",
      type: "IncidentNotificationTemplateArrayMeta",
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
    return IncidentNotificationTemplateArray.attributeTypeMap;
  }

  public constructor() {}
}
