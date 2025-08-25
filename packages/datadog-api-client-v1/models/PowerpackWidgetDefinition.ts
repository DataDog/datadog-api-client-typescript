/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpackTemplateVariables } from "./PowerpackTemplateVariables";
import { PowerpackWidgetDefinitionType } from "./PowerpackWidgetDefinitionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The powerpack widget allows you to keep similar graphs together on your timeboard. Each group has a custom header, can hold one to many graphs, and is collapsible.
 */
export class PowerpackWidgetDefinition {
  /**
   * Background color of the powerpack title.
   */
  "backgroundColor"?: string;
  /**
   * URL of image to display as a banner for the powerpack.
   */
  "bannerImg"?: string;
  /**
   * UUID of the associated powerpack.
   */
  "powerpackId": string;
  /**
   * Whether to show the title or not.
   */
  "showTitle"?: boolean;
  /**
   * Powerpack template variables.
   */
  "templateVariables"?: PowerpackTemplateVariables;
  /**
   * Title of the widget.
   */
  "title"?: string;
  /**
   * Type of the powerpack widget.
   */
  "type": PowerpackWidgetDefinitionType;

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
    backgroundColor: {
      baseName: "background_color",
      type: "string",
    },
    bannerImg: {
      baseName: "banner_img",
      type: "string",
    },
    powerpackId: {
      baseName: "powerpack_id",
      type: "string",
      required: true,
    },
    showTitle: {
      baseName: "show_title",
      type: "boolean",
    },
    templateVariables: {
      baseName: "template_variables",
      type: "PowerpackTemplateVariables",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "PowerpackWidgetDefinitionType",
      required: true,
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
    return PowerpackWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
