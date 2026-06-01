/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an AI-generated incident postmortem.
 */
export class IncidentAIPostmortemDataAttributesResponse {
  /**
   * Action items to prevent recurrence.
   */
  "actionItems"?: string;
  /**
   * The impact of the incident on customers.
   */
  "customerImpact"?: string;
  /**
   * An executive summary of the incident.
   */
  "executiveSummary"?: string;
  /**
   * Key insights from the incident.
   */
  "keyInsights"?: string;
  /**
   * Key timeline events during the incident.
   */
  "keyTimeline"?: string;
  /**
   * Lessons learned from the incident.
   */
  "lessonsLearned"?: string;
  /**
   * An overview of the affected systems.
   */
  "systemOverview"?: string;

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
    actionItems: {
      baseName: "action_items",
      type: "string",
    },
    customerImpact: {
      baseName: "customer_impact",
      type: "string",
    },
    executiveSummary: {
      baseName: "executive_summary",
      type: "string",
    },
    keyInsights: {
      baseName: "key_insights",
      type: "string",
    },
    keyTimeline: {
      baseName: "key_timeline",
      type: "string",
    },
    lessonsLearned: {
      baseName: "lessons_learned",
      type: "string",
    },
    systemOverview: {
      baseName: "system_overview",
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
    return IncidentAIPostmortemDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
