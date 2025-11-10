import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails } from "./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails";

/**
 * Cloud storage file metadata for create requests. Both access_details and sync_enabled are required.
 */
export class CreateTableRequestDataAttributesFileMetadataCloudStorage {
  /**
   * Cloud storage access configuration for the reference table data file.
   */
  "accessDetails": CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails;
  /**
   * Whether this table is synced automatically.
   */
  "syncEnabled": boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accessDetails: {
      baseName: "access_details",
      type: "CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails",
      required: true,
    },
    syncEnabled: {
      baseName: "sync_enabled",
      type: "boolean",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateTableRequestDataAttributesFileMetadataCloudStorage.attributeTypeMap;
  }

  public constructor() {}
}
