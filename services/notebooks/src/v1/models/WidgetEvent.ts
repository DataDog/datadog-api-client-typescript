import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Event overlay control options.
 *
 * See the dedicated [Events JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/widget_json/#events-schema)
 * to learn how to build the `<EVENTS_SCHEMA>`.
 */
export class WidgetEvent {
  /**
   * Query definition.
   */
  "q": string;
  /**
   * The execution method for multi-value filters.
   */
  "tagsExecution"?: string;
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
    q: {
      baseName: "q",
      type: "string",
      required: true,
    },
    tagsExecution: {
      baseName: "tags_execution",
      type: "string",
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
    return WidgetEvent.attributeTypeMap;
  }

  public constructor() {}
}
