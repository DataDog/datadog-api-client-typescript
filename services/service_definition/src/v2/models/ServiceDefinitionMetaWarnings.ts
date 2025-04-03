import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Schema validation warnings.
 */
export class ServiceDefinitionMetaWarnings {
  /**
   * The warning instance location.
   */
  "instanceLocation"?: string;
  /**
   * The warning keyword location.
   */
  "keywordLocation"?: string;
  /**
   * The warning message.
   */
  "message"?: string;
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
    instanceLocation: {
      baseName: "instance-location",
      type: "string",
    },
    keywordLocation: {
      baseName: "keyword-location",
      type: "string",
    },
    message: {
      baseName: "message",
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
    return ServiceDefinitionMetaWarnings.attributeTypeMap;
  }

  public constructor() {}
}
