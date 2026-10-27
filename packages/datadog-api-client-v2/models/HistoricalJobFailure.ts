/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HistoricalJobFailureReason } from "./HistoricalJobFailureReason";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details about why the job failed. Only present when the job has failed and won't be retried.
 */
export class HistoricalJobFailure {
  /**
   * A suggestion to fix the failure.
   */
  "hint"?: string;
  /**
   * The reason why the job failed.
   */
  "reason"?: HistoricalJobFailureReason;

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
    hint: {
      baseName: "hint",
      type: "string",
    },
    reason: {
      baseName: "reason",
      type: "HistoricalJobFailureReason",
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
    return HistoricalJobFailure.attributeTypeMap;
  }

  public constructor() {}
}
