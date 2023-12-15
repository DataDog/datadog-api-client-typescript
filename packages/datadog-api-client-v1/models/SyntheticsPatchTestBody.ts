/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsPatchTestOperation } from "./SyntheticsPatchTestOperation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Wrapper around an array of [JSON Patch](https://jsonpatch.com) operations to perform on the test
 */
export class SyntheticsPatchTestBody {
  /**
   * Array of [JSON Patch](https://jsonpatch.com) operations to perform on the test
   */
  "data"?: Array<SyntheticsPatchTestOperation>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<SyntheticsPatchTestOperation>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsPatchTestBody.attributeTypeMap;
  }

  public constructor() {}
}
