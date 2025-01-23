/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateInboxRuleParametersDataAttributes } from "./CreateInboxRuleParametersDataAttributes";
import { InboxRulesType } from "./InboxRulesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the inbox rule create request: the rule type, and the rule attributes. All fields are required.
 */
export class CreateInboxRuleParametersData {
  /**
   * Attributes of the inbox rule create request: the rule name, the rule details, the associated action, and the optional enabled field.
   */
  "attributes": CreateInboxRuleParametersDataAttributes;
  /**
   * The pipeline rule type associated to inbox rules
   */
  "type": InboxRulesType;

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
      type: "CreateInboxRuleParametersDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "InboxRulesType",
      required: true,
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
    return CreateInboxRuleParametersData.attributeTypeMap;
  }

  public constructor() {}
}
