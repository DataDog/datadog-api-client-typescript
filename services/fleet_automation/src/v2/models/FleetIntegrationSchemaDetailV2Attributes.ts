import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetIntegrationSchemaFileSpecV2 } from "./FleetIntegrationSchemaFileSpecV2";

/**
 * Attributes for a single integration's configuration schema.
 */
export class FleetIntegrationSchemaDetailV2Attributes {
  /**
   * The configuration file specifications for the integration. Always present, returned as an empty array when there are none.
   */
  "files": Array<FleetIntegrationSchemaFileSpecV2>;
  /**
   * The integration folder key. Absent from the response when empty.
   */
  "folder"?: string;
  /**
   * The display name of the integration. Absent from the response when empty.
   */
  "name"?: string;
  /**
   * The integration version. Absent from the response when empty.
   */
  "version"?: string;
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
    files: {
      baseName: "files",
      type: "Array<FleetIntegrationSchemaFileSpecV2>",
      required: true,
    },
    folder: {
      baseName: "folder",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    version: {
      baseName: "version",
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
    return FleetIntegrationSchemaDetailV2Attributes.attributeTypeMap;
  }

  public constructor() {}
}
