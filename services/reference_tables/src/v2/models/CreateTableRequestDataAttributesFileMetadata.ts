import { UnparsedObject } from "@datadog/datadog-api-client";

import { CreateTableRequestDataAttributesFileMetadataCloudStorage } from "./CreateTableRequestDataAttributesFileMetadataCloudStorage";
import { CreateTableRequestDataAttributesFileMetadataLocalFile } from "./CreateTableRequestDataAttributesFileMetadataLocalFile";

/**
 * Metadata specifying where and how to access the reference table's data file.
 */
export type CreateTableRequestDataAttributesFileMetadata =
  | CreateTableRequestDataAttributesFileMetadataCloudStorage
  | CreateTableRequestDataAttributesFileMetadataLocalFile
  | UnparsedObject;
