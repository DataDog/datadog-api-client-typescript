import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class WatcherDataAttributes {
  "handle": string;
  "icon"?: string;
  "lastWatchedAt": Date;
  "name"?: string;
  "watchCount": number;
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
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    icon: {
      baseName: "icon",
      type: "string",
    },
    lastWatchedAt: {
      baseName: "last_watched_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    watchCount: {
      baseName: "watch_count",
      type: "number",
      required: true,
      format: "int32",
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
    return WatcherDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
