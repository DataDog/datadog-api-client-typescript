/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CycloneDXComponent } from "./CycloneDXComponent";
import { CycloneDXMetadata } from "./CycloneDXMetadata";
import { CycloneDXVulnerability } from "./CycloneDXVulnerability";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * CycloneDX 1.5 Bill of Materials (BOM) for importing vulnerabilities.
 */
export class CycloneDXBOM {
  /**
   * The format of the BOM. Must be "CycloneDX".
   */
  "bomFormat": string;
  /**
   * List of components (libraries, applications, or operating systems) that are affected by vulnerabilities.
   */
  "components": Array<CycloneDXComponent>;
  /**
   * Metadata for the CycloneDX BOM.
   */
  "metadata": CycloneDXMetadata;
  /**
   * The version of the CycloneDX specification. Must be "1.5".
   */
  "specVersion": string;
  /**
   * The version of the BOM.
   */
  "version": number;
  /**
   * List of vulnerabilities to be imported.
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
      required: true,
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
    return CycloneDXBOM.attributeTypeMap;
  }

  public constructor() {}
}
