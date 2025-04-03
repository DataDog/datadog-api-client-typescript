import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The component that the BOM describes.
 */
export class SBOMMetadataComponent {
  /**
   * The name of the component. This will often be a shortened, single name of the component.
   */
  "name"?: string;
  /**
   * Specifies the type of the component.
   */
  "type"?: string;
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
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return SBOMMetadataComponent.attributeTypeMap;
  }

  public constructor() {}
}
