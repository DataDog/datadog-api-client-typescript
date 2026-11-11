/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FeatureFlagChangeEventSuggestionLifecycleStatus } from "./FeatureFlagChangeEventSuggestionLifecycleStatus";
import { FeatureFlagChangeEventSuggestionStatus } from "./FeatureFlagChangeEventSuggestionStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Review details of a change request that needed approval.
 * Present on review events, which `include_suggestion_events` adds.
 * Also present on a change that an approved change request applied, even when `include_suggestion_events` is `false`.
 */
export class FeatureFlagChangeEventSuggestionReview {
  /**
   * Where the change request is in its lifecycle.
   */
  "lifecycleStatus": FeatureFlagChangeEventSuggestionLifecycleStatus;
  /**
   * The comment left by the person who requested the change.
   */
  "requesterComment"?: string;
  /**
   * The comment left by the reviewer.
   */
  "reviewerComment"?: string;
  /**
   * The review status of the change request.
   */
  "status": FeatureFlagChangeEventSuggestionStatus;
  /**
   * The ID of the user who requested the change.
   */
  "suggestionCreatedBy"?: string;

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
    lifecycleStatus: {
      baseName: "lifecycle_status",
      type: "FeatureFlagChangeEventSuggestionLifecycleStatus",
      required: true,
    },
    requesterComment: {
      baseName: "requester_comment",
      type: "string",
    },
    reviewerComment: {
      baseName: "reviewer_comment",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "FeatureFlagChangeEventSuggestionStatus",
      required: true,
    },
    suggestionCreatedBy: {
      baseName: "suggestion_created_by",
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
    return FeatureFlagChangeEventSuggestionReview.attributeTypeMap;
  }

  public constructor() {}
}
