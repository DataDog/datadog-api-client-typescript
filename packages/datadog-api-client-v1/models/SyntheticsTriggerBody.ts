/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTriggerTest } from "./SyntheticsTriggerTest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing the Synthetic tests to trigger.
 */
export class SyntheticsTriggerBody {
  /**
   * Individual Synthetic test.
   */
  "tests": Array<SyntheticsTriggerTest>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    tests: {
      type: "Array<SyntheticsTriggerTest>",
      required: true,
    },
  };
}
