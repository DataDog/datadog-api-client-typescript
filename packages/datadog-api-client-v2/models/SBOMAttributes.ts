/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SBOMComponent } from "./SBOMComponent";
import { SBOMMetadata } from "./SBOMMetadata";
import { SpecVersion } from "./SpecVersion";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API attributes of the SBOM.
 */
export class SBOMAttributes {
  /**
   * Specifies the format of the BOM. This helps to identify the file as CycloneDX since BOM do not have a filename convention nor does JSON schema support namespaces. This value MUST be `CycloneDX`.
   */
  "bomFormat": string;
  /**
   * A list of software and hardware components.
   */
  "components": Array<SBOMComponent>;
  /**
   * Provides additional information about a BOM.
   */
  "metadata": SBOMMetadata;
  /**
   * Every BOM generated has a unique serial number, even if the contents of the BOM have not changed overt time. The serial number follows [RFC-4122](https://datatracker.ietf.org/doc/html/rfc4122)
   */
  "serialNumber": string;
  /**
   * The version of the CycloneDX specification a BOM conforms to.
   */
  "specVersion": SpecVersion;
  /**
   * It increments when a BOM is modified. The default value is 1.
   */
  "version": number;

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
      type: "Array<SBOMComponent>",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "SBOMMetadata",
      required: true,
    },
    serialNumber: {
      baseName: "serialNumber",
      type: "string",
      required: true,
    },
    specVersion: {
      baseName: "specVersion",
      type: "SpecVersion",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int64",
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
    return SBOMAttributes.attributeTypeMap;
  }

  public constructor() {}
}
