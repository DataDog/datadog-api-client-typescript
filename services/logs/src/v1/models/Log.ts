import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogContent } from "./LogContent";

/**
 * Object describing a log after being processed and stored by Datadog.
 */
export class Log {
  /**
   * JSON object containing all log attributes and their associated values.
   */
  "content"?: LogContent;
  /**
   * ID of the Log.
   */
  "id"?: string;
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
    content: {
      baseName: "content",
      type: "LogContent",
    },
    id: {
      baseName: "id",
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
    return Log.attributeTypeMap;
  }

  public constructor() {}
}
