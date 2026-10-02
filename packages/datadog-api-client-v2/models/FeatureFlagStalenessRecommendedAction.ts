/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An action suggested for a feature flag based on its staleness state.
 */
export class FeatureFlagStalenessRecommendedAction {
  /**
   * The action to consider. Values include `remove_from_code`, `archive_flag`, `mark_as_permanent`, `snooze`, and `check_sdk_config`.
   */
  "action"?: string;
  /**
   * An explanation of the suggested action.
   */
  "description"?: string;

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
      type: "string",
    },
    description: {
      baseName: "description",
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
    return FeatureFlagStalenessRecommendedAction.attributeTypeMap;
  }

  public constructor() {}
}
