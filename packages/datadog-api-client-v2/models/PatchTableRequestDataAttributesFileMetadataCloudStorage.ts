/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
