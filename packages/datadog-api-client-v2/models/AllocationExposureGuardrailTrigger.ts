/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Guardrail trigger details for a progressive rollout.
 */
export class AllocationExposureGuardrailTrigger {
  /**
   * The progressive rollout ID this trigger belongs to.
   */
  "allocationExposureScheduleId": string;
  /**
   * The timestamp when this trigger was created.
   */
  "createdAt": Date;
  /**
   * The variant ID that triggered this event.
   */
  "flaggingVariantId": string;
  /**
   * The unique identifier of the guardrail trigger.
   */
  "id": string;
  /**
   * The metric ID associated with the trigger.
   */
  "metricId": string;
  /**
   * The action that was triggered.
   */
  "triggeredAction": string;
  /**
   * The timestamp when this trigger was last updated.
   */
  "updatedAt": Date;

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
    allocationExposureScheduleId: {
      baseName: "allocation_exposure_schedule_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    flaggingVariantId: {
      baseName: "flagging_variant_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    metricId: {
      baseName: "metric_id",
      type: "string",
      required: true,
    },
    triggeredAction: {
      baseName: "triggered_action",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return AllocationExposureGuardrailTrigger.attributeTypeMap;
  }

  public constructor() {}
}
