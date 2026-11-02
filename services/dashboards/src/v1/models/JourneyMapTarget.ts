import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The pair of journey steps the paths are visualized between.
 */
export class JourneyMapTarget {
  /**
   * Key of the end step in `search.node_objects`.
   */
  "end": string;
  /**
   * Key of the start step in `search.node_objects`.
   */
  "start": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    end: {
      baseName: "end",
      type: "string",
      required: true,
    },
    start: {
      baseName: "start",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return JourneyMapTarget.attributeTypeMap;
  }

  public constructor() {}
}
