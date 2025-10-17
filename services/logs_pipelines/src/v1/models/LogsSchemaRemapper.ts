import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsSchemaRemapperType } from "./LogsSchemaRemapperType";
import { TargetFormatType } from "./TargetFormatType";

/**
 * The schema remapper maps source log fields to their correct fields.
 */
export class LogsSchemaRemapper {
  /**
   * Name of the logs schema remapper.
   */
  "name": string;
  /**
   * Override or not the target element if already set.
   */
  "overrideOnConflict"?: boolean;
  /**
   * Remove or preserve the remapped source element.
   */
  "preserveSource"?: boolean;
  /**
   * Array of source attributes.
   */
  "sources": Array<string>;
  /**
   * Target field to map log source field to.
   */
  "target": string;
  /**
   * If the `target_type` of the remapper is `attribute`, try to cast the value to a new specific type.
   * If the cast is not possible, the original type is kept. `string`, `integer`, or `double` are the possible types.
   * If the `target_type` is `tag`, this parameter may not be specified.
   */
  "targetFormat"?: TargetFormatType;
  /**
   * Type of logs schema remapper.
   */
  "type": LogsSchemaRemapperType;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
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
      type: "LogsSchemaRemapperType",
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
    return LogsSchemaRemapper.attributeTypeMap;
  }

  public constructor() {}
}
