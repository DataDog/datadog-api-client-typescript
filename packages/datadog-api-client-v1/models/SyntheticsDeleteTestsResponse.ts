/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsDeletedTest } from "./SyntheticsDeletedTest";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response object for deleting Synthetic tests.
 */

export class SyntheticsDeleteTestsResponse {
  /**
   * Array of objects containing a deleted Synthetic test ID with the associated deletion timestamp.
   */
  "deletedTests"?: Array<SyntheticsDeletedTest>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    deletedTests: {
      baseName: "deleted_tests",
      type: "Array<SyntheticsDeletedTest>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsDeleteTestsResponse.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsDeleteTestsResponse {
    const res = new SyntheticsDeleteTestsResponse();

    res.deletedTests = ObjectSerializer.deserialize(
      data.deleted_tests,
      "Array<SyntheticsDeletedTest>",
      ""
    );

    return res;
  }

  static serialize(
    data: SyntheticsDeleteTestsResponse
  ): { [key: string]: any } {
    const attributeTypes = SyntheticsDeleteTestsResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.deleted_tests = ObjectSerializer.serialize(
      data.deletedTests,
      "Array<SyntheticsDeletedTest>",
      ""
    );

    return res;
  }

  public constructor() {}
}
