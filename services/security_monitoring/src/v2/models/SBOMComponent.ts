import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SBOMComponentLicense } from "./SBOMComponentLicense";
import { SBOMComponentProperty } from "./SBOMComponentProperty";
import { SBOMComponentSupplier } from "./SBOMComponentSupplier";
import { SBOMComponentType } from "./SBOMComponentType";

/**
 * Software or hardware component.
 */
export class SBOMComponent {
  /**
   * An optional identifier that can be used to reference the component elsewhere in the BOM.
   */
  "bomRef"?: string;
  /**
   * The software licenses of the SBOM component.
   */
  "licenses"?: Array<SBOMComponentLicense>;
  /**
   * The name of the component. This will often be a shortened, single name of the component.
   */
  "name": string;
  /**
   * The custom properties of the component of the SBOM.
   */
  "properties"?: Array<SBOMComponentProperty>;
  /**
   * Specifies the package-url (purl). The purl, if specified, MUST be valid and conform to the [specification](https://github.com/package-url/purl-spec).
   */
  "purl"?: string;
  /**
   * The supplier of the component.
   */
  "supplier": SBOMComponentSupplier;
  /**
   * The SBOM component type
   */
  "type": SBOMComponentType;
  /**
   * The component version.
   */
  "version": string;
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
    licenses: {
      baseName: "licenses",
      type: "Array<SBOMComponentLicense>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    properties: {
      baseName: "properties",
      type: "Array<SBOMComponentProperty>",
    },
    purl: {
      baseName: "purl",
      type: "string",
    },
    supplier: {
      baseName: "supplier",
      type: "SBOMComponentSupplier",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SBOMComponentType",
      required: true,
    },
    version: {
      baseName: "version",
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
    return SBOMComponent.attributeTypeMap;
  }

  public constructor() {}
}
