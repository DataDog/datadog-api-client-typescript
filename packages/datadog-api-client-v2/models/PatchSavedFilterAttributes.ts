/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SavedFilterTargetingRuleRequest } from "./SavedFilterTargetingRuleRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Fields to update. At least one of `name`, `description`, or `targeting_rules` must have a non-null value. Omitted or null fields are preserved. The creation type cannot be changed.
 */
export class PatchSavedFilterAttributes {
  /**
   * The new description. Send an empty string to clear the description. If omitted or null, the existing description is preserved.
   */
  "description"?: string;
  /**
   * The `updated_at` value returned by a previous read, as an RFC 3339 timestamp. If it differs from the stored update time, truncated to seconds, the request returns a 409 response. For metadata-only updates, this check does not prevent all concurrent writes. This field alone does not constitute an update.
   */
  "lastUpdatedAt"?: Date;
  /**
   * The new name of the saved filter. Must not be empty.
   */
  "name"?: string;
  /**
   * The complete replacement targeting rules, combined with OR. Conditions within each rule are combined with AND. Replaces all existing rules. Values are not appended. Must contain at least one rule. Saved filters cannot reference other saved filters.
   */
  "targetingRules"?: Array<SavedFilterTargetingRuleRequest>;

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
    description: {
      baseName: "description",
      type: "string",
    },
    lastUpdatedAt: {
      baseName: "last_updated_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    targetingRules: {
      baseName: "targeting_rules",
      type: "Array<SavedFilterTargetingRuleRequest>",
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
    return PatchSavedFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
