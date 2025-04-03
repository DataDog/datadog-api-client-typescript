import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The event query.
 */
export class EventQueryDefinition {
  /**
   * The query being made on the event.
   */
  "search": string;
  /**
   * The execution method for multi-value filters. Can be either and or or.
   */
  "tagsExecution": string;
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
    search: {
      baseName: "search",
      type: "string",
      required: true,
    },
    tagsExecution: {
      baseName: "tags_execution",
      type: "string",
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
    return EventQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
