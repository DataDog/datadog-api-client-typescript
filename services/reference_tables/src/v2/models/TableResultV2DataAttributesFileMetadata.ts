import { UnparsedObject } from "@datadog/datadog-api-client";

import { TableResultV2DataAttributesFileMetadataCloudStorage } from "./TableResultV2DataAttributesFileMetadataCloudStorage";
import { TableResultV2DataAttributesFileMetadataLocalFile } from "./TableResultV2DataAttributesFileMetadataLocalFile";

/**
 * The definition of `TableResultV2DataAttributesFileMetadata` object.
 */
export type TableResultV2DataAttributesFileMetadata =
  | TableResultV2DataAttributesFileMetadataCloudStorage
  | TableResultV2DataAttributesFileMetadataLocalFile
  | UnparsedObject;
