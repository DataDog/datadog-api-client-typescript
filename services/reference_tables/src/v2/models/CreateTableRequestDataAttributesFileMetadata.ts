import { UnparsedObject } from "@datadog/datadog-api-client";

import { CreateTableRequestDataAttributesFileMetadataCloudStorage } from "./CreateTableRequestDataAttributesFileMetadataCloudStorage";
import { CreateTableRequestDataAttributesFileMetadataLocalFile } from "./CreateTableRequestDataAttributesFileMetadataLocalFile";

/**
 * The definition of the file metadata object.
 */
export type CreateTableRequestDataAttributesFileMetadata =
  | CreateTableRequestDataAttributesFileMetadataCloudStorage
  | CreateTableRequestDataAttributesFileMetadataLocalFile
  | UnparsedObject;
