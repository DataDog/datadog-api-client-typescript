/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FlagSuggestionAction } from "./FlagSuggestionAction";
import { FlagSuggestionProperty } from "./FlagSuggestionProperty";
import { SuggestionMetadata } from "./SuggestionMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating a flag suggestion.
 */
export class CreateFlagSuggestionAttributes {
  /**
   * The type of change action for a suggestion.
   */
  "action": FlagSuggestionAction;
  /**
   * Optional comment explaining the change.
   */
  "comment"?: string;
  /**
   * The environment ID for environment-scoped changes.
   */
  "environmentId"?: string;
  /**
   * Notification handles (without @ prefix) to receive approval or rejection notifications.
   * For example, an email address or Slack channel name.
   */
  "notificationRuleTargets": Array<string>;
  /**
   * The flag property being changed.
   */
  "property": FlagSuggestionProperty;
  /**
   * The suggested new value (empty string for flag-level actions like archive, JSON-encoded for complex properties like allocations).
   */
  "suggestion"?: string;
  /**
   * Optional metadata for a suggestion.
   */
  "suggestionMetadata"?: SuggestionMetadata;

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
      type: "FlagSuggestionAction",
      required: true,
    },
    comment: {
      baseName: "comment",
      type: "string",
    },
    environmentId: {
      baseName: "environment_id",
      type: "string",
      format: "uuid",
    },
    notificationRuleTargets: {
      baseName: "notification_rule_targets",
      type: "Array<string>",
      required: true,
    },
    property: {
      baseName: "property",
      type: "FlagSuggestionProperty",
      required: true,
    },
    suggestion: {
      baseName: "suggestion",
      type: "string",
    },
    suggestionMetadata: {
      baseName: "suggestion_metadata",
      type: "SuggestionMetadata",
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
    return CreateFlagSuggestionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
