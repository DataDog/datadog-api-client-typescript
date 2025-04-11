import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IFrameWidgetDefinitionType } from "./IFrameWidgetDefinitionType";

/**
 * The iframe widget allows you to embed a portion of any other web page on your dashboard. Only available on FREE layout dashboards.
 */
export class IFrameWidgetDefinition {
  /**
   * Type of the iframe widget.
   */
  "type": IFrameWidgetDefinitionType;
  /**
   * URL of the iframe.
   */
  "url": string;
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
    type: {
      baseName: "type",
      type: "IFrameWidgetDefinitionType",
      required: true,
    },
    url: {
      baseName: "url",
      type: "string",
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
    return IFrameWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
