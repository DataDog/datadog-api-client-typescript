/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateNotificationRuleParametersDataAttributes } from "./CreateNotificationRuleParametersDataAttributes";
import { NotificationRulesType } from "./NotificationRulesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the notification rule create request: the rule type, and the rule attributes. All fields are required.
 */
export class CreateNotificationRuleParametersData {
  /**
   * Attributes of the notification rule create request.
   */
  "attributes": CreateNotificationRuleParametersDataAttributes;
  /**
   * The rule type associated to notification rules.
   */
  "type": NotificationRulesType;

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
      type: "CreateNotificationRuleParametersDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotificationRulesType",
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
    return CreateNotificationRuleParametersData.attributeTypeMap;
  }

  public constructor() {}
}
