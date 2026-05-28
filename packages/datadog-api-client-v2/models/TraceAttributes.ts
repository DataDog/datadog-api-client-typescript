/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APMTraceSpan } from "./APMTraceSpan";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a trace returned by the Get trace by ID endpoint.
 */
export class TraceAttributes {
  /**
   * Indicates whether the trace was truncated because its size exceeded the maximum response payload.
   */
  "isTruncated": boolean;
  /**
   * The list of spans that compose the trace.
   */
  "spans": Array<APMTraceSpan>;

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
    spans: {
      baseName: "spans",
      type: "Array<APMTraceSpan>",
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
    return TraceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
