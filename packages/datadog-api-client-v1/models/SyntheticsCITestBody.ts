/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsCITest } from "./SyntheticsCITest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing the synthetics tests to trigger.
 */
export class SyntheticsCITestBody {
  /**
   * Individual synthetics test.
   */
  "tests"?: Array<SyntheticsCITest>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    tests: {
      baseName: "tests",
      type: "Array<SyntheticsCITest>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsCITestBody.attributeTypeMap;
  }

  public constructor() {}
}
