import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HistoricalJobFailureReason } from "./HistoricalJobFailureReason";

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
