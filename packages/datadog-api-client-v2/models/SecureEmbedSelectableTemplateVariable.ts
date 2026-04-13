/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A template variable that viewers can modify on the secure embed shared dashboard.
 */
export class SecureEmbedSelectableTemplateVariable {
  /**
   * Default selected values for the variable.
   */
  "defaultValues"?: Array<string>;
  /**
   * Name of the template variable. Usually matches the prefix unless you want a different display name.
   */
  "name"?: string;
  /**
   * Tag prefix for the variable (e.g., `environment`, `service`).
   */
  "prefix"?: string;
  /**
   * Restrict which tag values are visible to the viewer.
   */
  "visibleTags"?: Array<string>;

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
    defaultValues: {
      baseName: "default_values",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    prefix: {
      baseName: "prefix",
      type: "string",
    },
    visibleTags: {
      baseName: "visible_tags",
      type: "Array<string>",
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
    return SecureEmbedSelectableTemplateVariable.attributeTypeMap;
  }

  public constructor() {}
}
