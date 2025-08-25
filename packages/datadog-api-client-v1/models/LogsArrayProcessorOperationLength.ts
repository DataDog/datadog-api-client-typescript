/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArrayProcessorOperationLengthType } from "./LogsArrayProcessorOperationLengthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Operation that computes the length of a `source` array and stores the result in the `target` attribute.
 */
export class LogsArrayProcessorOperationLength {
  /**
   * Attribute path of the array to measure.
   */
  "source": string;
  /**
   * Attribute that receives the computed length.
   */
  "target": string;
  /**
   * Operation type.
   */
  "type": LogsArrayProcessorOperationLengthType;

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
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    target: {
      baseName: "target",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsArrayProcessorOperationLengthType",
      required: true,
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
    return LogsArrayProcessorOperationLength.attributeTypeMap;
  }

  public constructor() {}
}
