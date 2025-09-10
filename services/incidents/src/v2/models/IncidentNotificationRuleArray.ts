import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentNotificationRuleArrayMeta } from "./IncidentNotificationRuleArrayMeta";
import { IncidentNotificationRuleIncludedItems } from "./IncidentNotificationRuleIncludedItems";
import { IncidentNotificationRuleResponseData } from "./IncidentNotificationRuleResponseData";

/**
 * Response with notification rules.
 */
export class IncidentNotificationRuleArray {
  /**
   * The `NotificationRuleArray` `data`.
   */
  "data": Array<IncidentNotificationRuleResponseData>;
  /**
   * Related objects that are included in the response.
   */
  "included"?: Array<IncidentNotificationRuleIncludedItems>;
  /**
   * Response metadata.
   */
  "meta"?: IncidentNotificationRuleArrayMeta;
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
      type: "Array<IncidentNotificationRuleResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentNotificationRuleIncludedItems>",
    },
    meta: {
      baseName: "meta",
      type: "IncidentNotificationRuleArrayMeta",
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
    return IncidentNotificationRuleArray.attributeTypeMap;
  }

  public constructor() {}
}
