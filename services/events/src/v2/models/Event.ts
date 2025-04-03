import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The metadata associated with a request.
 */
export class Event {
  /**
   * Event ID.
   */
  "id"?: string;
  /**
   * The event name.
   */
  "name"?: string;
  /**
   * Event source ID.
   */
  "sourceId"?: number;
  /**
   * Event type.
   */
  "type"?: string;
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
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    sourceId: {
      baseName: "source_id",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
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
    return Event.attributeTypeMap;
  }

  public constructor() {}
}
