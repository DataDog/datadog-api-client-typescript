/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorNotificationRuleData } from "./MonitorNotificationRuleData";
import { MonitorNotificationRuleResponseIncludedItem } from "./MonitorNotificationRuleResponseIncludedItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for retrieving all monitor notification rules.
 */
export class MonitorNotificationRuleListResponse {
  /**
   * A list of monitor notification rules.
   */
  "data"?: Array<MonitorNotificationRuleData>;
  /**
   * Array of objects related to the monitor notification rules.
   */
  "included"?: Array<MonitorNotificationRuleResponseIncludedItem>;

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
      type: "Array<MonitorNotificationRuleData>",
    },
    included: {
      baseName: "included",
      type: "Array<MonitorNotificationRuleResponseIncludedItem>",
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
    return MonitorNotificationRuleListResponse.attributeTypeMap;
  }

  public constructor() {}
}
