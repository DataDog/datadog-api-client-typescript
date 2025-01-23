/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActionInbox } from "./ActionInbox";
import { Rule } from "./Rule";
import { RuleUser } from "./RuleUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the inbox rule
 */
export class InboxRuleAttributes {
  /**
   * Action of the inbox rule
   */
  "action": ActionInbox;
  /**
   * Date as Unix timestamp in milliseconds
   */
  "createdAt": number;
  /**
   * User creating or modifying a rule
   */
  "createdBy": RuleUser;
  /**
   * Field used to enable or disable the rule.
   */
  "enabled": boolean;
  /**
   * Date as Unix timestamp in milliseconds
   */
  "modifiedAt": number;
  /**
   * User creating or modifying a rule
   */
  "modifiedBy": RuleUser;
  /**
   * Name of the pipeline rule
   */
  "name": string;
  /**
   * The definition of an automation pipeline rule scope.
   * A rule can act on specific issue types, security rule types, security rule IDs, rule severities, or a query.
   * The query can be used to filter resources on tags and attributes.
   * The issue type and rule types fields are required.
   */
  "rule": Rule;

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
    action: {
      baseName: "action",
      type: "ActionInbox",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "number",
      required: true,
      format: "int64",
    },
    createdBy: {
      baseName: "created_by",
      type: "RuleUser",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "number",
      required: true,
      format: "int64",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "RuleUser",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    rule: {
      baseName: "rule",
      type: "Rule",
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
    return InboxRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
