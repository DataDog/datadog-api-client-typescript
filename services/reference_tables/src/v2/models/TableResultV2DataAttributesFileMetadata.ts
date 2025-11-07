import { UnparsedObject } from "@datadog/datadog-api-client";

import { TableResultV2DataAttributesFileMetadataCloudStorage } from "./TableResultV2DataAttributesFileMetadataCloudStorage";
import { TableResultV2DataAttributesFileMetadataLocalFile } from "./TableResultV2DataAttributesFileMetadataLocalFile";

/**
 * Metadata specifying where and how to access the reference table's data file.
 */
export type TableResultV2DataAttributesFileMetadata =
  | TableResultV2DataAttributesFileMetadataCloudStorage
  | TableResultV2DataAttributesFileMetadataLocalFile
  | UnparsedObject;
