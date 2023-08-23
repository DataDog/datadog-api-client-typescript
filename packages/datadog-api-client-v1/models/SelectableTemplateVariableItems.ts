/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the template variable's name, associated tag/attribute, default value and selectable values.
 */
export class SelectableTemplateVariableItems {
  /**
   * The default value of the template variable.
   */
  "defaultValue"?: string;
  /**
   * Name of the template variable.
   */
  "name"?: string;
  /**
   * The tag/attribute key associated with the template variable.
   */
  "prefix"?: string;
  /**
   * List of visible tag values on the shared dashboard.
   */
  "visibleTags"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    defaultValue: {
      baseName: "default_value",
      type: "string",
    },
    name: {
      type: "string",
    },
    prefix: {
      type: "string",
    },
    visibleTags: {
      baseName: "visible_tags",
      type: "Array<string>",
    },
  };
}
