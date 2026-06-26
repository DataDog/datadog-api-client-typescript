import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CycloneDXComponent } from "./CycloneDXComponent";
import { CycloneDXMetadata } from "./CycloneDXMetadata";
import { CycloneDXVulnerability } from "./CycloneDXVulnerability";

/**
 * A CycloneDX 1.5 Bill of Materials (BOM) document containing vulnerability data.
 */
export class CycloneDXBom {
  /**
   * The BOM format identifier. Must be `CycloneDX`.
   */
  "bomFormat": string;
  /**
   * The list of scanned software components. Cannot be empty.
   */
  "components": Array<CycloneDXComponent>;
  /**
   * Metadata about the BOM, including the scanned asset and the scanner tool.
   */
  "metadata": CycloneDXMetadata;
  /**
   * The CycloneDX specification version. Must be `1.5`.
   */
  "specVersion": string;
  /**
   * The version number of the BOM document.
   */
  "version"?: number;
  /**
   * The list of detected vulnerabilities. Cannot be empty.
   */
  "vulnerabilities": Array<CycloneDXVulnerability>;
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
    bomFormat: {
      baseName: "bomFormat",
      type: "string",
      required: true,
    },
    components: {
      baseName: "components",
      type: "Array<CycloneDXComponent>",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "CycloneDXMetadata",
      required: true,
    },
    specVersion: {
      baseName: "specVersion",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
    },
    vulnerabilities: {
      baseName: "vulnerabilities",
      type: "Array<CycloneDXVulnerability>",
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
    return CycloneDXBom.attributeTypeMap;
  }

  public constructor() {}
}
