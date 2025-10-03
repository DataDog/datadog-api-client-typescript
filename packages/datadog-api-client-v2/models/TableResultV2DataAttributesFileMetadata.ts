/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableResultV2DataAttributesFileMetadataCloudStorage } from "./TableResultV2DataAttributesFileMetadataCloudStorage";
import { TableResultV2DataAttributesFileMetadataLocalFile } from "./TableResultV2DataAttributesFileMetadataLocalFile";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The definition of `TableResultV2DataAttributesFileMetadata` object.
 */

export type TableResultV2DataAttributesFileMetadata =
  | TableResultV2DataAttributesFileMetadataCloudStorage
  | TableResultV2DataAttributesFileMetadataLocalFile
  | UnparsedObject;
