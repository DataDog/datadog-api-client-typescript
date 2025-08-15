import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateAppsDatastoreFromImportRequestDataAttributes } from "./CreateAppsDatastoreFromImportRequestDataAttributes";
import { CreateAppsDatastoreFromImportRequestDataType } from "./CreateAppsDatastoreFromImportRequestDataType";

/**
 * The definition of `CreateAppsDatastoreFromImportRequestData` object.
 */
export class CreateAppsDatastoreFromImportRequestData {
  /**
   * The definition of `CreateAppsDatastoreFromImportRequestDataAttributes` object.
   */
  "attributes"?: CreateAppsDatastoreFromImportRequestDataAttributes;
  /**
   * The `CreateAppsDatastoreFromImportRequestData` `id`.
   */
  "id"?: string;
  /**
   * Datastores resource type.
   */
  "type": CreateAppsDatastoreFromImportRequestDataType;
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
      type: "CreateAppsDatastoreFromImportRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CreateAppsDatastoreFromImportRequestDataType",
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
    return CreateAppsDatastoreFromImportRequestData.attributeTypeMap;
  }

  public constructor() {}
}
