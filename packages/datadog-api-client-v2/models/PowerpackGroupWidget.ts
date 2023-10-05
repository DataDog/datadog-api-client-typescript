/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpackGroupWidgetDefinition } from "./PowerpackGroupWidgetDefinition";
import { PowerpackGroupWidgetLayout } from "./PowerpackGroupWidgetLayout";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Powerpack group widget definition object.
 */
export class PowerpackGroupWidget {
  /**
   * Powerpack group widget object.
   */
  "definition": PowerpackGroupWidgetDefinition;
  /**
   * Powerpack group widget layout.
   */
  "layout"?: PowerpackGroupWidgetLayout;

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
      type: "PowerpackGroupWidgetDefinition",
      required: true,
    },
    layout: {
      baseName: "layout",
      type: "PowerpackGroupWidgetLayout",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PowerpackGroupWidget.attributeTypeMap;
  }

  public constructor() {}
}
