/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsStringBuilderProcessorType } from "./LogsStringBuilderProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Use the string builder processor to add a new attribute (without spaces or special characters)
 * to a log with the result of the provided template.
 * This enables aggregation of different attributes or raw strings into a single attribute.
 *
 * The template is defined by both raw text and blocks with the syntax `%{attribute_path}`.
 *
 * **Notes**:
 *
 * - The processor only accepts attributes with values or an array of values in the blocks.
 * - If an attribute cannot be used (object or array of object),
 *   it is replaced by an empty string or the entire operation is skipped depending on your selection.
 * - If the target attribute already exists, it is overwritten by the result of the template.
 * - Results of the template cannot exceed 256 characters.
 */
export class LogsStringBuilderProcessor {
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * If true, it replaces all missing attributes of `template` by an empty string.
   * If `false` (default), skips the operation for missing attributes.
   */
  "isReplaceMissing"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * The name of the attribute that contains the result of the template.
   */
  "target": string;
  /**
   * A formula with one or more attributes and raw text.
   */
  "template": string;
  /**
   * Type of logs string builder processor.
   */
  "type": LogsStringBuilderProcessorType;

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
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    isReplaceMissing: {
      baseName: "is_replace_missing",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "string",
      required: true,
    },
    template: {
      baseName: "template",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsStringBuilderProcessorType",
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
    return LogsStringBuilderProcessor.attributeTypeMap;
  }

  public constructor() {}
}
