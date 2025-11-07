import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails";

/**
 * Cloud storage file metadata for patch requests. Allows partial updates of access_details and sync_enabled.
 */
export class PatchTableRequestDataAttributesFileMetadataCloudStorage {
  /**
   * Cloud storage access configuration for the reference table data file.
   */
  "accessDetails"?: PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails;
  /**
   * Whether this table is synced automatically.
   */
  "syncEnabled"?: boolean;
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
      type: "PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails",
    },
    syncEnabled: {
      baseName: "sync_enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PatchTableRequestDataAttributesFileMetadataCloudStorage.attributeTypeMap;
  }

  public constructor() {}
}
