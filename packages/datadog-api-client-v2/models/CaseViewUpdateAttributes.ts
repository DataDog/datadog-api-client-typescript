/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes that can be updated on a work item view. All fields are optional; only provided fields are changed.
 */
export class CaseViewUpdateAttributes {
  /**
   * The name of the view.
   */
  "name"?: string;
  /**
   * Deprecated. This field is ignored. Use `POST /api/v2/cases/projects/{project_id}/notification_rules` to manage project notifications.
   */
  "npRuleId"?: string;
  /**
   * The query used to filter work items in this view.
   */
  "query"?: string;

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
    name: {
      baseName: "name",
      type: "string",
    },
    npRuleId: {
      baseName: "np_rule_id",
      type: "string",
    },
    query: {
      baseName: "query",
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
    return CaseViewUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
