/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorNotificationRuleFilter } from "./MonitorNotificationRuleFilter";
import { MonitorNotificationRuleRecipientsItem } from "./MonitorNotificationRuleRecipientsItem";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes of the monitor notification rule.
*/
export class MonitorNotificationRuleResponseAttributes {
  /**
   * Creation time of the monitor notification rule.
  */
  "created"?: Date;
  /**
   * Filter used to associate the notification rule with monitors.
  */
  "filter"?: MonitorNotificationRuleFilter;
  /**
   * Time the monitor notification rule was last modified.
  */
  "modified"?: Date;
  /**
   * The name of the monitor notification rule.
  */
  "name"?: string;
  /**
   * A list of recipients to notify. Uses the same format as the monitor `message` field. Must not start with an '@'.
  */
  "recipients"?: Array<string>;

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
    "created": {
      "baseName": "created",
      "type": "Date",
      "format": "date-time",
    },
    "filter": {
      "baseName": "filter",
      "type": "MonitorNotificationRuleFilter",
    },
    "modified": {
      "baseName": "modified",
      "type": "Date",
      "format": "date-time",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "recipients": {
      "baseName": "recipients",
      "type": "Array<string>",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return MonitorNotificationRuleResponseAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









