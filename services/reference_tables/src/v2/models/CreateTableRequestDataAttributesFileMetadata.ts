import { UnparsedObject } from "@datadog/datadog-api-client";

import { CreateTableRequestDataAttributesFileMetadataCloudStorage } from "./CreateTableRequestDataAttributesFileMetadataCloudStorage";
import { CreateTableRequestDataAttributesFileMetadataLocalFile } from "./CreateTableRequestDataAttributesFileMetadataLocalFile";

/**
 * The definition of `CreateTableRequestDataAttributesFileMetadata` object.
 */
export type CreateTableRequestDataAttributesFileMetadata =
  | CreateTableRequestDataAttributesFileMetadataCloudStorage
  | CreateTableRequestDataAttributesFileMetadataLocalFile
  | UnparsedObject;
