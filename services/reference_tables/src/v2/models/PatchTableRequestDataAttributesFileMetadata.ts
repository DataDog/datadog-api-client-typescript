import { UnparsedObject } from "@datadog/datadog-api-client";

import { PatchTableRequestDataAttributesFileMetadataCloudStorage } from "./PatchTableRequestDataAttributesFileMetadataCloudStorage";
import { PatchTableRequestDataAttributesFileMetadataLocalFile } from "./PatchTableRequestDataAttributesFileMetadataLocalFile";

/**
 * The definition of `PatchTableRequestDataAttributesFileMetadata` object.
 */
export type PatchTableRequestDataAttributesFileMetadata =
  | PatchTableRequestDataAttributesFileMetadataCloudStorage
  | PatchTableRequestDataAttributesFileMetadataLocalFile
  | UnparsedObject;
