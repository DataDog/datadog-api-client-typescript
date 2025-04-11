import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogAttributes } from "./LogAttributes";
import { LogType } from "./LogType";

/**
 * Object description of a log after being processed and stored by Datadog.
 */
export class Log {
  /**
   * JSON object containing all log attributes and their associated values.
   */
  "attributes"?: LogAttributes;
  /**
   * Unique ID of the Log.
   */
  "id"?: string;
  /**
   * Type of the event.
   */
  "type"?: LogType;
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
      type: "LogAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LogType",
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
    return Log.attributeTypeMap;
  }

  public constructor() {}
}
