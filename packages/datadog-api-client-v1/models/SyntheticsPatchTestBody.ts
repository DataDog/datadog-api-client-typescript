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
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
