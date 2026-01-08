/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JsonPatchOperationOp } from "./JsonPatchOperationOp";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A JSON Patch operation as per RFC 6902.
 */
export class JsonPatchOperation {
  /**
   * The operation to perform.
   */
  "op": JsonPatchOperationOp;
  /**
   * A JSON Pointer path (e.g., "/name", "/value/secure").
   */
  "path": string;
  /**
   * The value to use for the operation (not applicable for "remove" and "test" operations).
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
      type: "JsonPatchOperationOp",
      required: true,
    },
    path: {
      baseName: "path",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "any",
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
    return JsonPatchOperation.attributeTypeMap;
  }

  public constructor() {}
}
