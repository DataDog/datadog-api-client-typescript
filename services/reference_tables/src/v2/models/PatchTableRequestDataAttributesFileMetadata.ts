import { UnparsedObject } from "@datadog/datadog-api-client";

import { PatchTableRequestDataAttributesFileMetadataCloudStorage } from "./PatchTableRequestDataAttributesFileMetadataCloudStorage";
import { PatchTableRequestDataAttributesFileMetadataLocalFile } from "./PatchTableRequestDataAttributesFileMetadataLocalFile";

/**
 * The definition of the file metadata object.
 */
export type PatchTableRequestDataAttributesFileMetadata =
  | PatchTableRequestDataAttributesFileMetadataCloudStorage
  | PatchTableRequestDataAttributesFileMetadataLocalFile
  | UnparsedObject;
