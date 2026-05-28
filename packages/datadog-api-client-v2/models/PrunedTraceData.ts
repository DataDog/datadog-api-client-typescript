/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PrunedTraceAttributes } from "./PrunedTraceAttributes";
import { PrunedTraceType } from "./PrunedTraceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A pruned trace resource document.
 */
export class PrunedTraceData {
  /**
   * The attributes of a pruned trace returned by the Get pruned trace by ID endpoint.
   */
  "attributes": PrunedTraceAttributes;
  /**
   * The full 128-bit trace ID, encoded as a 32-character hexadecimal string.
   */
  "id": string;
  /**
   * The type of the pruned trace resource. The value is always `pruned_trace`.
   */
  "type": PrunedTraceType;

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
      type: "PrunedTraceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PrunedTraceType",
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
    return PrunedTraceData.attributeTypeMap;
  }

  public constructor() {}
}
