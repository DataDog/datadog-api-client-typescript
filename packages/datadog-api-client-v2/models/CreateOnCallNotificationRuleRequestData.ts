/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallNotificationRuleRelationships } from "./OnCallNotificationRuleRelationships";
import { OnCallNotificationRuleRequestAttributes } from "./OnCallNotificationRuleRequestAttributes";
import { OnCallNotificationRuleType } from "./OnCallNotificationRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating an on-call notification rule
 */
export class CreateOnCallNotificationRuleRequestData {
  /**
   * Attributes for creating or modifying an on-call notification rule.
   */
  "attributes"?: OnCallNotificationRuleRequestAttributes;
  /**
   * Relationship object for creating a notification rule
   */
  "relationships"?: OnCallNotificationRuleRelationships;
  /**
   * Indicates that the resource is of type 'notification_rules'.
   */
  "type": OnCallNotificationRuleType;

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
      type: "OnCallNotificationRuleRequestAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "OnCallNotificationRuleRelationships",
    },
    type: {
      baseName: "type",
      type: "OnCallNotificationRuleType",
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
    return CreateOnCallNotificationRuleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
