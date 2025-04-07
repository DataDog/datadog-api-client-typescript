import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsPatchTestOperationName } from "./SyntheticsPatchTestOperationName";

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
    additionalProperties: {
      baseName: "additionalProperties",
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
