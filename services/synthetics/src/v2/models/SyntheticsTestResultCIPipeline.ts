import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Details of the CI pipeline.
 */
export class SyntheticsTestResultCIPipeline {
  /**
   * Pipeline identifier.
   */
  "id"?: string;
  /**
   * Pipeline name.
   */
  "name"?: string;
  /**
   * Pipeline number.
   */
  "number"?: number;
  /**
   * Pipeline URL.
   */
  "url"?: string;
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
    number: {
      baseName: "number",
      type: "number",
      format: "int64",
    },
    url: {
      baseName: "url",
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
    return SyntheticsTestResultCIPipeline.attributeTypeMap;
  }

  public constructor() {}
}
