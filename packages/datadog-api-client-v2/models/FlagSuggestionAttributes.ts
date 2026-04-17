/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FlagSuggestionAction } from "./FlagSuggestionAction";
import { FlagSuggestionProperty } from "./FlagSuggestionProperty";
import { FlagSuggestionStatus } from "./FlagSuggestionStatus";
import { SuggestionMetadata } from "./SuggestionMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a flag suggestion.
 */
export class FlagSuggestionAttributes {
  /**
   * The type of change action for a suggestion.
   */
  "action": FlagSuggestionAction;
  /**
   * The flag history version this suggestion was based on.
   */
  "baseFlagHistoryId"?: string;
  /**
   * Optional comment from the requester.
   */
  "comment"?: string;
  /**
   * When the suggestion was created.
   */
  "createdAt": Date;
  /**
   * UUID of the user who created the suggestion.
   */
  "createdBy": string;
  /**
   * The status of a flag suggestion.
   */
  "currentStatus": FlagSuggestionStatus;
  /**
   * The current value before the suggested change (empty string for flag-level actions like archive).
   */
  "currentValue"?: string;
  /**
   * When the suggestion was soft-deleted.
   */
  "deletedAt"?: Date;
  /**
   * UUID of the user who deleted the suggestion.
   */
  "deletedBy"?: string;
  /**
   * The environment ID for environment-scoped suggestions. Null for flag-level changes.
   */
  "environmentId"?: string;
  /**
   * The ID of the feature flag this suggestion applies to.
   */
  "featureFlagId": string;
  /**
   * Human-readable message about the suggestion (populated on auto-created suggestions).
   */
  "message"?: string;
  /**
   * The flag property being changed.
   */
  "property": FlagSuggestionProperty;
  /**
   * The suggested new value (JSON-encoded for complex properties, empty string for flag-level actions like archive).
   */
  "suggestion"?: string;
  /**
   * Optional metadata for a suggestion.
   */
  "suggestionMetadata"?: SuggestionMetadata;
  /**
   * When the suggestion was last updated.
   */
  "updatedAt"?: Date;
  /**
   * UUID of the user who last updated the suggestion.
   */
  "updatedBy"?: string;

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
    baseFlagHistoryId: {
      baseName: "base_flag_history_id",
      type: "string",
      format: "uuid",
    },
    comment: {
      baseName: "comment",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
      format: "uuid",
    },
    currentStatus: {
      baseName: "current_status",
      type: "FlagSuggestionStatus",
      required: true,
    },
    currentValue: {
      baseName: "current_value",
      type: "string",
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    deletedBy: {
      baseName: "deleted_by",
      type: "string",
    },
    environmentId: {
      baseName: "environment_id",
      type: "string",
    },
    featureFlagId: {
      baseName: "feature_flag_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    message: {
      baseName: "message",
      type: "string",
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
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
      type: "string",
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
    return FlagSuggestionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
