/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTriggerCITestLocation } from "./SyntheticsTriggerCITestLocation";
import { SyntheticsTriggerCITestRunResult } from "./SyntheticsTriggerCITestRunResult";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing information about the tests triggered.
 */
export class SyntheticsTriggerCITestsResponse {
  /**
   * The public ID of the batch triggered.
   */
  "batchId"?: string;
  /**
   * List of Synthetic locations.
   */
  "locations"?: Array<SyntheticsTriggerCITestLocation>;
  /**
   * Information about the tests runs.
   */
  "results"?: Array<SyntheticsTriggerCITestRunResult>;
  /**
   * The public IDs of the Synthetic test triggered.
   */
  "triggeredCheckIds"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    batchId: {
      baseName: "batch_id",
      type: "string",
    },
    locations: {
      type: "Array<SyntheticsTriggerCITestLocation>",
    },
    results: {
      type: "Array<SyntheticsTriggerCITestRunResult>",
    },
    triggeredCheckIds: {
      baseName: "triggered_check_ids",
      type: "Array<string>",
    },
  };
}
