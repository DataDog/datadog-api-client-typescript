/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The best practice associated with an insight. Populated with the first active best practice
 * matched to the insight; `null` when no best practice is attached.
 */
export class GovernanceBestPracticeDefinition {
  /**
   * The value driver the best practice is grouped under, such as `access_governance`,
   * `security`, `compliance`, or `operational_hygiene`.
   */
  "category": string;
  /**
   * A relative link to the configuration page where the best practice can be acted upon.
   */
  "deepLink": string;
  /**
   * The full rationale and guidance for the best practice.
   */
  "description": string;
  /**
   * An optional association to a control's detection type. `null` when not associated with a control.
   */
  "detectionType"?: string;
  /**
   * The unique identifier of the best practice.
   */
  "id": string;
  /**
   * The expected impact of following the best practice.
   */
  "impact": string;
  /**
   * A priority hint for ordering best practices by expected impact. Lower values indicate
   * higher priority.
   */
  "impactHint": number;
  /**
   * The permissions required for the user to act on the best practice.
   */
  "permissions": Array<string>;
  /**
   * Whether the best practice is currently `active` or `deprecated`.
   */
  "status": string;
  /**
   * A one-line explanation of why this best practice matters.
   */
  "summary": string;
  /**
   * A short, human-readable name for the best practice.
   */
  "title": string;
  /**
   * The condition that surfaces the best practice. For an `insight` trigger, the insight
   * slug; for a `static` trigger, a descriptive condition key.
   */
  "triggerCondition": string;
  /**
   * How the best practice is surfaced. `insight` ties it to an insight; `static` surfaces it
   * unless its condition is met.
   */
  "triggerType": string;

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
    category: {
      baseName: "category",
      type: "string",
      required: true,
    },
    deepLink: {
      baseName: "deep_link",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    detectionType: {
      baseName: "detection_type",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    impact: {
      baseName: "impact",
      type: "string",
      required: true,
    },
    impactHint: {
      baseName: "impact_hint",
      type: "number",
      required: true,
      format: "int64",
    },
    permissions: {
      baseName: "permissions",
      type: "Array<string>",
      required: true,
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    summary: {
      baseName: "summary",
      type: "string",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    triggerCondition: {
      baseName: "trigger_condition",
      type: "string",
      required: true,
    },
    triggerType: {
      baseName: "trigger_type",
      type: "string",
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
    return GovernanceBestPracticeDefinition.attributeTypeMap;
  }

  public constructor() {}
}
