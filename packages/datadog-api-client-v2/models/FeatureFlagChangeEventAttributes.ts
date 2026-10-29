/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FeatureFlagChangeEventAction } from "./FeatureFlagChangeEventAction";
import { FeatureFlagChangeEventCreationSource } from "./FeatureFlagChangeEventCreationSource";
import { FeatureFlagChangeEventEnvironment } from "./FeatureFlagChangeEventEnvironment";
import { FeatureFlagChangeEventFlag } from "./FeatureFlagChangeEventFlag";
import { FeatureFlagChangeEventProperty } from "./FeatureFlagChangeEventProperty";
import { FeatureFlagChangeEventSuggestionReview } from "./FeatureFlagChangeEventSuggestionReview";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a feature flag change event.
 */
export class FeatureFlagChangeEventAttributes {
  /**
   * The kind of change.
   */
  "action": FeatureFlagChangeEventAction;
  /**
   * Additional details about the change, as a JSON-encoded string.
   */
  "changeMetadata"?: string;
  /**
   * Where the change was made: `UI` for the Datadog app, or `MCP` for a Model Context Protocol (MCP) client.
   */
  "creationSource"?: FeatureFlagChangeEventCreationSource;
  /**
   * A readable sentence describing the change, as shown on the flag history page and in the Action column of the CSV export.
   */
  "description"?: string;
  /**
   * The environment the change applies to. Null for a change to the flag itself rather than to one environment.
   */
  "environment"?: FeatureFlagChangeEventEnvironment;
  /**
   * The feature flag the change applies to.
   */
  "featureFlag": FeatureFlagChangeEventFlag;
  /**
   * The value after the change, serialized as a string.
   */
  "newValue"?: string;
  /**
   * The value before the change, serialized as a string.
   */
  "previousValue"?: string;
  /**
   * The part of the feature flag the change applies to.
   */
  "property": FeatureFlagChangeEventProperty;
  /**
   * Review details of a change request that needed approval.
   * Present on review events, which `include_suggestion_events` adds.
   * Also present on a change that an approved change request applied, even when `include_suggestion_events` is `false`.
   */
  "suggestionReview"?: FeatureFlagChangeEventSuggestionReview;
  /**
   * When the change was made.
   */
  "timestamp": Date;
  /**
   * The ID of the user who made the change. Null when no user made the change.
   */
  "userId"?: string;
  /**
   * The version of the feature flag the change produced.
   */
  "versionNumber": number;

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
      type: "FeatureFlagChangeEventAction",
      required: true,
    },
    changeMetadata: {
      baseName: "change_metadata",
      type: "string",
    },
    creationSource: {
      baseName: "creation_source",
      type: "FeatureFlagChangeEventCreationSource",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    environment: {
      baseName: "environment",
      type: "FeatureFlagChangeEventEnvironment",
    },
    featureFlag: {
      baseName: "feature_flag",
      type: "FeatureFlagChangeEventFlag",
      required: true,
    },
    newValue: {
      baseName: "new_value",
      type: "string",
    },
    previousValue: {
      baseName: "previous_value",
      type: "string",
    },
    property: {
      baseName: "property",
      type: "FeatureFlagChangeEventProperty",
      required: true,
    },
    suggestionReview: {
      baseName: "suggestion_review",
      type: "FeatureFlagChangeEventSuggestionReview",
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",
      required: true,
      format: "date-time",
    },
    userId: {
      baseName: "user_id",
      type: "string",
    },
    versionNumber: {
      baseName: "version_number",
      type: "number",
      required: true,
      format: "int64",
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
    return FeatureFlagChangeEventAttributes.attributeTypeMap;
  }

  public constructor() {}
}
