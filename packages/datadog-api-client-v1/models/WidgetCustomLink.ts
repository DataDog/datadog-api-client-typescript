/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Custom links help you connect a data value to a URL, like a Datadog page or your AWS console.
 */
export class WidgetCustomLink {
  /**
   * The flag for toggling context menu link visibility.
   */
  "isHidden"?: boolean;
  /**
   * The label for the custom link URL. Keep the label short and descriptive. Use metrics and tags as variables.
   */
  "label"?: string;
  /**
   * The URL of the custom link. URL must include `http` or `https`. A relative URL must start with `/`.
   */
  "link"?: string;
  /**
   * The label ID that refers to a context menu link. Can be `logs`, `hosts`, `traces`, `profiles`, `processes`, `containers`, or `rum`.
   */
  "overrideLabel"?: string;

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
    isHidden: {
      baseName: "is_hidden",
      type: "boolean",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    link: {
      baseName: "link",
      type: "string",
    },
    overrideLabel: {
      baseName: "override_label",
      type: "string",
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
    return WidgetCustomLink.attributeTypeMap;
  }

  public constructor() {}
}
