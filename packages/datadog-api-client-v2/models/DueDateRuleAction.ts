/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DueDateFrom } from "./DueDateFrom";
import { DueDatePerSeverityItem } from "./DueDatePerSeverityItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The action to take when the due date rule matches a finding.
 */
export class DueDateRuleAction {
  /**
   * A list of severity-to-due-date mappings. Each severity may appear at most once.
   */
  "dueDaysPerSeverity": Array<DueDatePerSeverityItem>;
  /**
   * The reference point from which the due date is calculated. When `fix_available` is selected but not applicable to the finding type, `first_seen` is used instead.
   */
  "dueFrom": DueDateFrom;
  /**
   * An optional description providing more context for the due date assignment.
   */
  "reasonDescription"?: string;

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
    dueDaysPerSeverity: {
      baseName: "due_days_per_severity",
      type: "Array<DueDatePerSeverityItem>",
      required: true,
    },
    dueFrom: {
      baseName: "due_from",
      type: "DueDateFrom",
      required: true,
    },
    reasonDescription: {
      baseName: "reason_description",
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
    return DueDateRuleAction.attributeTypeMap;
  }

  public constructor() {}
}
