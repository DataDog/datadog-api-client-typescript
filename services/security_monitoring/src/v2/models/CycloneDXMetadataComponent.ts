import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The asset that was scanned (for example, a host or container image).
 */
export class CycloneDXMetadataComponent {
  /**
   * A unique reference identifier for this metadata component. If set, must match a `bom-ref` in `components`.
   */
  "bomRef"?: string;
  /**
   * The name or identifier of the scanned asset (for example, an instance ID or hostname).
   */
  "name": string;
  /**
   * The type of the scanned asset.
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
    return CycloneDXMetadataComponent.attributeTypeMap;
  }

  public constructor() {}
}
