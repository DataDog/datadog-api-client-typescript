import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An error encountered while validating or applying an operation.
 */
export class TeamsOwnershipMappingBatchError {
  /**
   * A human-readable explanation specific to this error.
   */
  "detail"?: string;
  /**
   * The HTTP status code applicable to this error.
   */
  "status": string;
  /**
   * A short, human-readable summary of the error.
   */
  "title": string;
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
    detail: {
      baseName: "detail",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
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
    return TeamsOwnershipMappingBatchError.attributeTypeMap;
  }

  public constructor() {}
}
