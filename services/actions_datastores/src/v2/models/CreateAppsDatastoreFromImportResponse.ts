import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateAppsDatastoreFromImportResponseData } from "./CreateAppsDatastoreFromImportResponseData";

/**
 * The definition of `CreateAppsDatastoreFromImportResponse` object.
 */
export class CreateAppsDatastoreFromImportResponse {
  /**
   * The definition of `CreateAppsDatastoreFromImportResponseData` object.
   */
  "data"?: CreateAppsDatastoreFromImportResponseData;
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
    data: {
      baseName: "data",
      type: "CreateAppsDatastoreFromImportResponseData",
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
    return CreateAppsDatastoreFromImportResponse.attributeTypeMap;
  }

  public constructor() {}
}
