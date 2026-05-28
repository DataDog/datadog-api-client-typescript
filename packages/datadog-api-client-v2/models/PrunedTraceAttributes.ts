/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SummarizedTrace } from "./SummarizedTrace";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a pruned trace returned by the Get pruned trace by ID endpoint.
 */
export class PrunedTraceAttributes {
  /**
   * Indicates whether the underlying trace was truncated because its size
   * exceeded the maximum that can be retrieved from storage.
   */
  "isTruncated": boolean;
  /**
   * The size, in bytes, of the original (non-pruned) trace before summarization.
   */
  "sizeBytes": number;
  /**
   * A summarized, hierarchical view of a trace.
   */
  "summarizedTrace": SummarizedTrace;

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
    isTruncated: {
      baseName: "is_truncated",
      type: "boolean",
      required: true,
    },
    sizeBytes: {
      baseName: "size_bytes",
      type: "number",
      required: true,
      format: "int32",
    },
    summarizedTrace: {
      baseName: "summarized_trace",
      type: "SummarizedTrace",
      required: true,
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
    return PrunedTraceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
