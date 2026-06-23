import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsArrayMapProcessorType } from "./LogsArrayMapProcessorType";
import { LogsArrayMapSubProcessor } from "./LogsArrayMapSubProcessor";

/**
 * The array-map processor transforms each element of a source array by applying
 * sub-processors in order and collecting the results into a target array.
 * Results can be written to a new array, to the source array (in-place), or to
 * an existing target array. Sub-processors can read from `$sourceElem.<field>`
 * (object element field), bare `$sourceElem` (primitive element), or any parent
 * log attribute path. Sub-processors write to `$targetElem.<field>` (object
 * output field) or bare `$targetElem` (primitive output).
 */
export class LogsArrayMapProcessor {
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * When `false` and `source != target`, the source attribute is removed after
   * processing. Cannot be `false` when `source == target`.
   */
  "preserveSource"?: boolean;
  /**
   * Sub-processors applied to each element. Allowed types: `attribute-remapper`,
   * `string-builder-processor`, `arithmetic-processor`, `category-processor`.
   */
  "processors": Array<LogsArrayMapSubProcessor>;
  /**
   * Attribute path of the source array. Elements are read-only via `$sourceElem`
   * inside sub-processors.
   */
  "source": string;
  /**
   * Attribute path of the output array. Sub-processors write to `$targetElem`
   * (or `$targetElem.<field>`) to build each output element.
   */
  "target": string;
  /**
   * Type of logs array-map processor.
   */
  "type": LogsArrayMapProcessorType;
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
    name: {
      baseName: "name",
      type: "string",
    },
    preserveSource: {
      baseName: "preserve_source",
      type: "boolean",
    },
    processors: {
      baseName: "processors",
      type: "Array<LogsArrayMapSubProcessor>",
      required: true,
    },
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
      type: "LogsArrayMapProcessorType",
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
    return LogsArrayMapProcessor.attributeTypeMap;
  }

  public constructor() {}
}
