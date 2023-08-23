/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTiming } from "./SyntheticsTiming";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Result of the last API test run.
 */
export class SyntheticsAPITestResultShortResult {
  /**
   * Describes if the test run has passed or failed.
   */
  "passed"?: boolean;
  /**
   * Object containing all metrics and their values collected for a Synthetic API test.
   * See the [Synthetic Monitoring Metrics documentation](https://docs.datadoghq.com/synthetics/metrics/).
   */
  "timings"?: SyntheticsTiming;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    passed: {
      baseName: "passed",
      type: "boolean",
    },
    timings: {
      baseName: "timings",
      type: "SyntheticsTiming",
    },
  };
}
