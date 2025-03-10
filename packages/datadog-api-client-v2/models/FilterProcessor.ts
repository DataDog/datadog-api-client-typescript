/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FilterProcessorType } from "./FilterProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A filter processor component.
 */
export class FilterProcessor {
  /**
   * The unique ID of the processor.
   */
  "id": string;
  /**
   * Inclusion filter for the processor.
   */
  "include": string;
  /**
   * The inputs for the processor.
   */
  "inputs": Array<string>;
  /**
   * The type of processor.
   */
  "type": FilterProcessorType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    include: {
      baseName: "include",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FilterProcessorType",
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
    return FilterProcessor.attributeTypeMap;
  }

  public constructor() {}
}
