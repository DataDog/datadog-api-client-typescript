/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsPatchTestOperationName } from "./SyntheticsPatchTestOperationName";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single [JSON Patch](https://jsonpatch.com) operation to perform on the test
 */
export class SyntheticsPatchTestOperation {
  /**
   * The operation to perform
   */
  "op"?: SyntheticsPatchTestOperationName;
  /**
   * The path to the value to modify
   */
  "path"?: string;
  /**
   * A value to use in a [JSON Patch](https://jsonpatch.com) operation
   */
  "value"?: any;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    op: {
      baseName: "op",
      type: "SyntheticsPatchTestOperationName",
    },
    path: {
      baseName: "path",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsPatchTestOperation.attributeTypeMap;
  }

  public constructor() {}
}
