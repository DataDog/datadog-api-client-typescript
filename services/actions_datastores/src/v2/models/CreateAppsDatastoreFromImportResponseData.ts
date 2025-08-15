import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateAppsDatastoreFromImportResponseDataAttributes } from "./CreateAppsDatastoreFromImportResponseDataAttributes";
import { CreateAppsDatastoreFromImportResponseDataType } from "./CreateAppsDatastoreFromImportResponseDataType";

/**
 * The definition of `CreateAppsDatastoreFromImportResponseData` object.
 */
export class CreateAppsDatastoreFromImportResponseData {
  /**
   * The definition of `CreateAppsDatastoreFromImportResponseDataAttributes` object.
   */
  "attributes"?: CreateAppsDatastoreFromImportResponseDataAttributes;
  /**
   * The `CreateAppsDatastoreFromImportResponseData` `id`.
   */
  "id"?: string;
  /**
   * Datastores resource type.
   */
  "type": CreateAppsDatastoreFromImportResponseDataType;
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
      type: "CreateAppsDatastoreFromImportResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CreateAppsDatastoreFromImportResponseDataType",
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
    return CreateAppsDatastoreFromImportResponseData.attributeTypeMap;
  }

  public constructor() {}
}
