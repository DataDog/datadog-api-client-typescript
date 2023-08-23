/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorOptionsSchedulingOptionsEvaluationWindow } from "./MonitorOptionsSchedulingOptionsEvaluationWindow";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration options for scheduling.
 */
export class MonitorOptionsSchedulingOptions {
  /**
   * Configuration options for the evaluation window. If `hour_starts` is set, no other fields may be set. Otherwise, `day_starts` and `month_starts` must be set together.
   */
  "evaluationWindow"?: MonitorOptionsSchedulingOptionsEvaluationWindow;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    evaluationWindow: {
      baseName: "evaluation_window",
      type: "MonitorOptionsSchedulingOptionsEvaluationWindow",
    },
  };
}
