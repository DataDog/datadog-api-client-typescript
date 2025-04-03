import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The creator of the SLO
 */
export class SLOCreator {
  /**
   * Email of the creator.
   */
  "email"?: string;
  /**
   * User ID of the creator.
   */
  "id"?: number;
  /**
   * Name of the creator.
   */
  "name"?: string;
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
    email: {
      baseName: "email",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
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
    return SLOCreator.attributeTypeMap;
  }

  public constructor() {}
}
