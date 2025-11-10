import { UnparsedObject } from "@datadog/datadog-api-client";

import { PatchTableRequestDataAttributesFileMetadataCloudStorage } from "./PatchTableRequestDataAttributesFileMetadataCloudStorage";
import { PatchTableRequestDataAttributesFileMetadataLocalFile } from "./PatchTableRequestDataAttributesFileMetadataLocalFile";

/**
 * Metadata specifying where and how to access the reference table's data file.
 */
export type PatchTableRequestDataAttributesFileMetadata =
  | PatchTableRequestDataAttributesFileMetadataCloudStorage
  | PatchTableRequestDataAttributesFileMetadataLocalFile
  | UnparsedObject;
