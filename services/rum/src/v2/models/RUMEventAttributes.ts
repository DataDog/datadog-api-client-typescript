import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * JSON object containing all event attributes and their associated values.
 */
export class RUMEventAttributes {
  /**
   * JSON object of attributes from RUM events.
   */
  "attributes"?: { [key: string]: any };
  /**
   * The name of the application or service generating RUM events.
   * It is used to switch from RUM to APM, so make sure you define the same
   * value when you use both products.
   */
  "service"?: string;
  /**
   * Array of tags associated with your event.
   */
  "tags"?: Array<string>;
  /**
   * Timestamp of your event.
   */
  "timestamp"?: Date;
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
    attributes: {
      baseName: "attributes",
      type: "{ [key: string]: any; }",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",
      format: "date-time",
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
    return RUMEventAttributes.attributeTypeMap;
  }

  public constructor() {}
}
