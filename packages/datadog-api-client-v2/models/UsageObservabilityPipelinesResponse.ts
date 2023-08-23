/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageDataObject } from "./UsageDataObject";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Observability Pipelines usage response.
 */
export class UsageObservabilityPipelinesResponse {
  /**
   * Response containing Observability Pipelines usage.
   */
  "data"?: Array<UsageDataObject>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "Array<UsageDataObject>",
    },
  };
}
