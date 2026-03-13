import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CycloneDXComponentType } from "./CycloneDXComponentType";

/**
 * A component (library, application, or operating system) in the BOM.
 */
export class CycloneDXComponent {
  /**
   * Unique reference identifier for this component.
   */
  "bomRef": string;
  /**
   * The name of the component.
   */
  "name": string;
  /**
   * Package URL for the component. Required for library components.
   */
  "purl"?: string;
  /**
   * The type of the component. Supported types are library, application, and operating-system.
   */
  "type": CycloneDXComponentType;
  /**
   * The version of the component.
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
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    purl: {
      baseName: "purl",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CycloneDXComponentType",
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
    return CycloneDXComponent.attributeTypeMap;
  }

  public constructor() {}
}
