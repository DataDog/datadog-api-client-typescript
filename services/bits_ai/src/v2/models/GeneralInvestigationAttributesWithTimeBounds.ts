import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for a general investigation with an explicit time window.
 */
export class GeneralInvestigationAttributesWithTimeBounds {
  /**
   * A free-form description of what to investigate, up to 4,096 characters.
   */
  "description": string;
  /**
   * The end of the investigation window, in Unix milliseconds.
   */
  "endTime": number;
  /**
   * The start of the investigation window, in Unix milliseconds.
   */
  "startTime": number;
  /**
   * Tags scoping the investigation.
   */
  "tags"?: Array<string>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    endTime: {
      baseName: "end_time",
      type: "number",
      required: true,
      format: "int64",
    },
    startTime: {
      baseName: "start_time",
      type: "number",
      required: true,
      format: "int64",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeneralInvestigationAttributesWithTimeBounds.attributeTypeMap;
  }

  public constructor() {}
}
