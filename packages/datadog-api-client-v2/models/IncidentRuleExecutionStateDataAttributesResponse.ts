/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an incident rule execution state.
 */
export class IncidentRuleExecutionStateDataAttributesResponse {
  /**
   * Timestamp when the state was created.
   */
  "created": Date;
  /**
   * The incident identifier.
   */
  "incidentUuid": string;
  /**
   * Timestamp of the last rule execution.
   */
  "lastExecutedAt"?: Date;
  /**
   * Timestamp when the state was last modified.
   */
  "modified": Date;
  /**
   * The rule identifier.
   */
  "ruleUuid": string;

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
    created: {
      baseName: "created",
      type: "Date",
      required: true,
      format: "date-time",
    },
    incidentUuid: {
      baseName: "incident_uuid",
      type: "string",
      required: true,
      format: "uuid",
    },
    lastExecutedAt: {
      baseName: "last_executed_at",
      type: "Date",
      format: "date-time",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
    },
    ruleUuid: {
      baseName: "rule_uuid",
      type: "string",
      required: true,
      format: "uuid",
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
    return IncidentRuleExecutionStateDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
