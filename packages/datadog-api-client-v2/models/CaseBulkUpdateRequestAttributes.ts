/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseBulkActionType } from "./CaseBulkActionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for the bulk update, specifying which cases to update and the action to apply.
 */
export class CaseBulkUpdateRequestAttributes {
  /**
   * An array of case identifiers to apply the bulk action to.
   */
  "caseIds": Array<string>;
  /**
   * A key-value map of action-specific parameters. The required keys depend on the action type (for example, `priority` for the priority action, `assignee_id` for assign).
   */
  "payload"?: { [key: string]: string };
  /**
   * The type of action to apply in a bulk update. Allowed values are `priority`, `status`, `assign`, `unassign`, `archive`, `unarchive`, `jira`, `servicenow`, `linear`, `update_project`.
   */
  "type": CaseBulkActionType;

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
    caseIds: {
      baseName: "case_ids",
      type: "Array<string>",
      required: true,
    },
    payload: {
      baseName: "payload",
      type: "{ [key: string]: string; }",
    },
    type: {
      baseName: "type",
      type: "CaseBulkActionType",
      required: true,
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
    return CaseBulkUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
