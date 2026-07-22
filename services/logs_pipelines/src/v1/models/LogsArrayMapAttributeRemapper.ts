import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsAttributeRemapperType } from "./LogsAttributeRemapperType";
import { TargetFormatType } from "./TargetFormatType";

/**
 * An attribute remapper sub-processor for use inside an array-map processor.
 * Unlike the top-level attribute remapper, `is_enabled`, `source_type`, and
 * `target_type` are not supported.
 */
export class LogsArrayMapAttributeRemapper {
  /**
   * Name of the sub-processor.
   */
  "name"?: string;
  /**
   * Override the target element if already set.
   */
  "overrideOnConflict"?: boolean;
  /**
   * Remove or preserve the remapped source element.
   */
  "preserveSource"?: boolean;
  /**
   * Array of source attribute paths.
   */
  "sources": Array<string>;
  /**
   * Target attribute path.
   */
  "target": string;
  /**
   * If the `target_type` of the remapper is `attribute`, try to cast the value to a new specific type.
   * If the cast is not possible, the original type is kept. `string`, `integer`, or `double` are the possible types.
   * If the `target_type` is `tag`, this parameter may not be specified.
   */
  "targetFormat"?: TargetFormatType;
  /**
   * Type of logs attribute remapper.
   */
  "type": LogsAttributeRemapperType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
    },
    overrideOnConflict: {
      baseName: "override_on_conflict",
      type: "boolean",
    },
    preserveSource: {
      baseName: "preserve_source",
      type: "boolean",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
      required: true,
    },
    target: {
      baseName: "target",
      type: "string",
      required: true,
    },
    targetFormat: {
      baseName: "target_format",
      type: "TargetFormatType",
    },
    type: {
      baseName: "type",
      type: "LogsAttributeRemapperType",
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
    return LogsArrayMapAttributeRemapper.attributeTypeMap;
  }

  public constructor() {}
}
