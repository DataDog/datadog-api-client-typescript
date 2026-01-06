import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class DeletedSuiteResponseDataAttributes {
  /**
   * Deletion timestamp of the Synthetic suite ID.
   */
  "deletedAt"?: string;
  /**
   * The Synthetic suite ID deleted.
   */
  "publicId"?: string;
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
    deletedAt: {
      baseName: "deleted_at",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
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
    return DeletedSuiteResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
