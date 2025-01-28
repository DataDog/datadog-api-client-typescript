/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { InboxRuleAttributes } from "./InboxRuleAttributes";
import { InboxRulesType } from "./InboxRulesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Inbox rules are used to prioritize and add relevant vulnerabilities to your Security Inbox.
 * An inbox rule is composed of a rule UUID, a rule type, and the rule attributes. All fields are required.
 */
export class InboxRule {
  /**
   * Attributes of the inbox rule
   */
  "attributes": InboxRuleAttributes;
  /**
   * The ID of a pipeline rule
   */
  "id": string;
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
      type: "InboxRuleAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return InboxRule.attributeTypeMap;
  }

  public constructor() {}
}
