/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentNotificationRuleIncludedItems } from "./IncidentNotificationRuleIncludedItems";
import { IncidentNotificationRuleResponseData } from "./IncidentNotificationRuleResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a notification rule.
 */
export class IncidentNotificationRule {
  /**
   * Notification rule data from a response.
   */
  "data": IncidentNotificationRuleResponseData;
  /**
   * Related objects that are included in the response.
   */
  "included"?: Array<IncidentNotificationRuleIncludedItems>;

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
      type: "IncidentNotificationRuleResponseData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentNotificationRuleIncludedItems>",
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
    return IncidentNotificationRule.attributeTypeMap;
  }

  public constructor() {}
}
