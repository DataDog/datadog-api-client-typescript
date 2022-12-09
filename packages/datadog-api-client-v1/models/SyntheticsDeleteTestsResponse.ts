/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsDeletedTest } from "./SyntheticsDeletedTest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object for deleting Synthetic tests.
 */
export class SyntheticsDeleteTestsResponse {
  /**
   * Array of objects containing a deleted Synthetic test ID with
   * the associated deletion timestamp.
   */
  "deletedTests"?: Array<SyntheticsDeletedTest>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    deletedTests: {
      baseName: "deleted_tests",
      type: "Array<SyntheticsDeletedTest>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsDeleteTestsResponse.attributeTypeMap;
  }

  public constructor() {}
}
