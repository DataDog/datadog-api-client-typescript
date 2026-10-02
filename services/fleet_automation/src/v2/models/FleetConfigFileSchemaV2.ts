import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetConfigFileSchemaV2Attributes } from "./FleetConfigFileSchemaV2Attributes";
import { FleetConfigFileSchemaV2ResourceType } from "./FleetConfigFileSchemaV2ResourceType";

/**
 * A configuration file's schema.
 */
export class FleetConfigFileSchemaV2 {
  /**
   * Attributes for a configuration file's schema.
   */
  "attributes": FleetConfigFileSchemaV2Attributes;
  /**
   * An identifier for the resolved schema.
   */
  "id": string;
  /**
   * The type of the configuration file schema resource.
   */
  "type": FleetConfigFileSchemaV2ResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "FleetConfigFileSchemaV2Attributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FleetConfigFileSchemaV2ResourceType",
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
    return FleetConfigFileSchemaV2.attributeTypeMap;
  }

  public constructor() {}
}
