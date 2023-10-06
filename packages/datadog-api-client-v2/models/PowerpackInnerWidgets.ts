/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpackInnerWidgetLayout } from "./PowerpackInnerWidgetLayout";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Powerpack group widget definition of individual widgets.
 */
export class PowerpackInnerWidgets {
  /**
   * Information about widget.
   */
  "definition": { [key: string]: any };
  /**
   * Powerpack inner widget layout.
   */
  "layout"?: PowerpackInnerWidgetLayout;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    definition: {
      baseName: "definition",
      type: "{ [key: string]: any; }",
      required: true,
    },
    layout: {
      baseName: "layout",
      type: "PowerpackInnerWidgetLayout",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PowerpackInnerWidgets.attributeTypeMap;
  }

  public constructor() {}
}
