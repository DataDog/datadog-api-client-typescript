import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A path expanded to show the events that follow it.
 */
export class JourneyMapExpandedPrefix {
  /**
   * Events of the expanded path, in order.
   */
  "events": Array<string>;
  /**
   * Maximum number of paths shown after the expanded path.
   */
  "pathLimit"?: number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    events: {
      baseName: "events",
      type: "Array<string>",
      required: true,
    },
    pathLimit: {
      baseName: "path_limit",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return JourneyMapExpandedPrefix.attributeTypeMap;
  }

  public constructor() {}
}
