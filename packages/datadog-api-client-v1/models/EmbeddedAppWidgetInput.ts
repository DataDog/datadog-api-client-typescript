/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EmbeddedAppWidgetInputValue } from "./EmbeddedAppWidgetInputValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An input passed to the embedded app.
 */
export class EmbeddedAppWidgetInput {
  /**
   * Name of the app input.
   */
  "name": string;
  /**
   * Value of the app input. This can be a string, number, boolean, object, or a non-empty homogeneous array of those types.
   */
  "value": EmbeddedAppWidgetInputValue;

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
    value: {
      baseName: "value",
      type: "EmbeddedAppWidgetInputValue",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EmbeddedAppWidgetInput.attributeTypeMap;
  }

  public constructor() {}
}
