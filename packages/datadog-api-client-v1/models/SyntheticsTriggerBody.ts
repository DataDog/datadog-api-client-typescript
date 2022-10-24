/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTriggerTest } from "./SyntheticsTriggerTest";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Object describing the synthetics tests to trigger.
 */
export class SyntheticsTriggerBody {
  /**
   * Individual synthetics test.
   */
  "tests": Array<SyntheticsTriggerTest>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    tests: {
      baseName: "tests",
      type: "Array<SyntheticsTriggerTest>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTriggerBody.attributeTypeMap;
  }

  public constructor() {}
}
