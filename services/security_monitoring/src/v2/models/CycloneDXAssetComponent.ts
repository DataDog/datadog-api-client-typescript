import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The asset component represents the system or host being scanned.
 */
export class CycloneDXAssetComponent {
  /**
   * Optional reference to a component in the components list.
   */
  "bomRef"?: string;
  /**
   * The name of the asset.
   */
  "name": string;
  /**
   * The type of the asset component.
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
    bomRef: {
      baseName: "bom-ref",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
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
    return CycloneDXAssetComponent.attributeTypeMap;
  }

  public constructor() {}
}
