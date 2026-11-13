/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Why the scheduled end couldn't run. It isn't retried until the end or fallback changes. Absent when there's no failure.
 */
export class ExperimentsBanditScheduledEndFailureV2 {
  /**
   * When the scheduled end failed.
   */
  "failedAt": Date;
  /**
   * Why the scheduled end failed.
   */
  "reason": string;

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
    failedAt: {
      baseName: "failed_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    reason: {
      baseName: "reason",
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
    return ExperimentsBanditScheduledEndFailureV2.attributeTypeMap;
  }

  public constructor() {}
}
