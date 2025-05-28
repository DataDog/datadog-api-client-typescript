/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsAttributeRemapperType } from "./LogsAttributeRemapperType";
import { TargetFormatType } from "./TargetFormatType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The remapper processor remaps any source attribute(s) or tag to another target attribute or tag.
 * Constraints on the tag/attribute name are explained in the [Tag Best Practice documentation](https://docs.datadoghq.com/logs/guide/log-parsing-best-practice).
 * Some additional constraints are applied as `:` or `,` are not allowed in the target tag/attribute name.
*/
export class LogsAttributeRemapper {
  /**
   * Whether or not the processor is enabled.
  */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
  */
  "name"?: string;
  /**
   * Override or not the target element if already set,
  */
  "overrideOnConflict"?: boolean;
  /**
   * Remove or preserve the remapped source element.
  */
  "preserveSource"?: boolean;
  /**
   * Defines if the sources are from log `attribute` or `tag`.
  */
  "sourceType"?: string;
  /**
   * Array of source attributes.
  */
  "sources": Array<string>;
  /**
   * Final attribute or tag name to remap the sources to.
  */
  "target": string;
  /**
   * If the `target_type` of the remapper is `attribute`, try to cast the value to a new specific type.
   * If the cast is not possible, the original type is kept. `string`, `integer`, or `double` are the possible types.
   * If the `target_type` is `tag`, this parameter may not be specified.
  */
  "targetFormat"?: TargetFormatType;
  /**
   * Defines if the final attribute or tag name is from log `attribute` or `tag`.
  */
  "targetType"?: string;
  /**
   * Type of logs attribute remapper.
  */
  "type": LogsAttributeRemapperType;

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
    "isEnabled": {
      "baseName": "is_enabled",
      "type": "boolean",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "overrideOnConflict": {
      "baseName": "override_on_conflict",
      "type": "boolean",
    },
    "preserveSource": {
      "baseName": "preserve_source",
      "type": "boolean",
    },
    "sourceType": {
      "baseName": "source_type",
      "type": "string",
    },
    "sources": {
      "baseName": "sources",
      "type": "Array<string>",
      "required": true,
    },
    "target": {
      "baseName": "target",
      "type": "string",
      "required": true,
    },
    "targetFormat": {
      "baseName": "target_format",
      "type": "TargetFormatType",
    },
    "targetType": {
      "baseName": "target_type",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "LogsAttributeRemapperType",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return LogsAttributeRemapper.attributeTypeMap;

  }

  public constructor() {











  }
}









