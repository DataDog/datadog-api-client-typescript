/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ParseJSONProcessorType } from "./ParseJSONProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Parse JSON processor component.
 */
export class ParseJSONProcessor {
  /**
   * The field to parse.
   */
  "field": string;
  /**
   * The unique ID of the processor.
   */
  "id": string;
  /**
   * Inclusion filter for the processor.
   */
  "include"?: string;
  /**
   * The inputs for the processor.
   */
  "inputs": Array<string>;
  /**
   * The type of processor.
   */
  "type": ParseJSONProcessorType;

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
    field: {
      baseName: "field",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    include: {
      baseName: "include",
      type: "string",
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ParseJSONProcessorType",
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
    return ParseJSONProcessor.attributeTypeMap;
  }

  public constructor() {}
}
