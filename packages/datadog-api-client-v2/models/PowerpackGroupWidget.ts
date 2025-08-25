/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpackGroupWidgetDefinition } from "./PowerpackGroupWidgetDefinition";
import { PowerpackGroupWidgetLayout } from "./PowerpackGroupWidgetLayout";
import { WidgetLiveSpan } from "./WidgetLiveSpan";

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
   * The available timeframes depend on the widget you are using.
   */
  "liveSpan"?: WidgetLiveSpan;

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
    definition: {
      baseName: "definition",
      type: "PowerpackGroupWidgetDefinition",
      required: true,
    },
    layout: {
      baseName: "layout",
      type: "PowerpackGroupWidgetLayout",
    },
    liveSpan: {
      baseName: "live_span",
      type: "WidgetLiveSpan",
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
    return PowerpackGroupWidget.attributeTypeMap;
  }

  public constructor() {}
}
