/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Reference to a file attached to a Synthetic test request.
 */
export class SyntheticsTestResultFileRef {
  /**
   * Storage bucket key where the file is stored.
   */
  "bucketKey"?: string;
  /**
   * Encoding of the file contents.
   */
  "encoding"?: string;
  /**
   * File name.
   */
  "name"?: string;
  /**
   * File size in bytes.
   */
  "size"?: number;
  /**
   * File MIME type.
   */
  "type"?: string;

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
    bucketKey: {
      baseName: "bucket_key",
      type: "string",
    },
    encoding: {
      baseName: "encoding",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    size: {
      baseName: "size",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return SyntheticsTestResultFileRef.attributeTypeMap;
  }

  public constructor() {}
}
