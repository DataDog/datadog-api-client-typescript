import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class DeletedSuitesRequestDeleteAttributes {
  "forceDeleteDependencies"?: boolean;
  "publicIds": Array<string>;
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
    forceDeleteDependencies: {
      baseName: "force_delete_dependencies",
      type: "boolean",
    },
    publicIds: {
      baseName: "public_ids",
      type: "Array<string>",
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
    return DeletedSuitesRequestDeleteAttributes.attributeTypeMap;
  }

  public constructor() {}
}
