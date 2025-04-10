/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorNotificationRuleRelationships } from "./MonitorNotificationRuleRelationships";
import { MonitorNotificationRuleResourceType } from "./MonitorNotificationRuleResourceType";
import { MonitorNotificationRuleResponseAttributes } from "./MonitorNotificationRuleResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Monitor notification rule data.
 */
export class MonitorNotificationRuleData {
  /**
   * Attributes of the monitor notification rule.
   */
  "attributes"?: MonitorNotificationRuleResponseAttributes;
  /**
   * The ID of the monitor notification rule.
   */
  "id"?: string;
  /**
   * All relationships associated with monitor notification rule.
   */
  "relationships"?: MonitorNotificationRuleRelationships;
  /**
   * Monitor notification rule resource type.
   */
  "type"?: MonitorNotificationRuleResourceType;

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
      type: "MonitorNotificationRuleResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "MonitorNotificationRuleRelationships",
    },
    type: {
      baseName: "type",
      type: "MonitorNotificationRuleResourceType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorNotificationRuleData.attributeTypeMap;
  }

  public constructor() {}
}
