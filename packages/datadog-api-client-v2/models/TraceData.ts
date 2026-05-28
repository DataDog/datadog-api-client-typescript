/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TraceAttributes } from "./TraceAttributes";
import { TraceType } from "./TraceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A trace resource document.
 */
export class TraceData {
  /**
   * The attributes of a trace returned by the Get trace by ID endpoint.
   */
  "attributes": TraceAttributes;
  /**
   * The full 128-bit trace ID, encoded as a 32-character hexadecimal string.
   */
  "id": string;
  /**
   * The type of the trace resource. The value is always `trace`.
   */
  "type": TraceType;

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
    attributes: {
      baseName: "attributes",
      type: "TraceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TraceType",
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
    return TraceData.attributeTypeMap;
  }

  public constructor() {}
}
