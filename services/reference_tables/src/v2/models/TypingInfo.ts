import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreateTableRequest } from "./CreateTableRequest";
import { CreateTableRequestData } from "./CreateTableRequestData";
import { CreateTableRequestDataAttributes } from "./CreateTableRequestDataAttributes";
import { CreateTableRequestDataAttributesFileMetadataCloudStorage } from "./CreateTableRequestDataAttributesFileMetadataCloudStorage";
import { CreateTableRequestDataAttributesFileMetadataLocalFile } from "./CreateTableRequestDataAttributesFileMetadataLocalFile";
import { CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails } from "./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails";
import { CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail } from "./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail";
import { CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail } from "./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail";
import { CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail } from "./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail";
import { CreateTableRequestDataAttributesSchema } from "./CreateTableRequestDataAttributesSchema";
import { CreateTableRequestDataAttributesSchemaFieldsItems } from "./CreateTableRequestDataAttributesSchemaFieldsItems";
import { CreateUploadRequest } from "./CreateUploadRequest";
import { CreateUploadRequestData } from "./CreateUploadRequestData";
import { CreateUploadRequestDataAttributes } from "./CreateUploadRequestDataAttributes";
import { CreateUploadResponse } from "./CreateUploadResponse";
import { CreateUploadResponseData } from "./CreateUploadResponseData";
import { CreateUploadResponseDataAttributes } from "./CreateUploadResponseDataAttributes";
import { PatchTableRequest } from "./PatchTableRequest";
import { PatchTableRequestData } from "./PatchTableRequestData";
import { PatchTableRequestDataAttributes } from "./PatchTableRequestDataAttributes";
import { PatchTableRequestDataAttributesFileMetadataCloudStorage } from "./PatchTableRequestDataAttributesFileMetadataCloudStorage";
import { PatchTableRequestDataAttributesFileMetadataLocalFile } from "./PatchTableRequestDataAttributesFileMetadataLocalFile";
import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails";
import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail";
import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail";
import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail";
import { PatchTableRequestDataAttributesSchema } from "./PatchTableRequestDataAttributesSchema";
import { PatchTableRequestDataAttributesSchemaFieldsItems } from "./PatchTableRequestDataAttributesSchemaFieldsItems";
import { TableResultV2 } from "./TableResultV2";
import { TableResultV2Array } from "./TableResultV2Array";
import { TableResultV2Data } from "./TableResultV2Data";
import { TableResultV2DataAttributes } from "./TableResultV2DataAttributes";
import { TableResultV2DataAttributesFileMetadataCloudStorage } from "./TableResultV2DataAttributesFileMetadataCloudStorage";
import { TableResultV2DataAttributesFileMetadataLocalFile } from "./TableResultV2DataAttributesFileMetadataLocalFile";
import { TableResultV2DataAttributesFileMetadataOneOfAccessDetails } from "./TableResultV2DataAttributesFileMetadataOneOfAccessDetails";
import { TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail } from "./TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail";
import { TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail } from "./TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail";
import { TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail } from "./TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail";
import { TableResultV2DataAttributesSchema } from "./TableResultV2DataAttributesSchema";
import { TableResultV2DataAttributesSchemaFieldsItems } from "./TableResultV2DataAttributesSchemaFieldsItems";
import { TableRowResourceArray } from "./TableRowResourceArray";
import { TableRowResourceData } from "./TableRowResourceData";
import { TableRowResourceDataAttributes } from "./TableRowResourceDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CreateTableRequestDataType: ["reference_table"],
    CreateUploadRequestDataType: ["upload"],
    CreateUploadResponseDataType: ["upload"],
    PatchTableRequestDataType: ["reference_table"],
    ReferenceTableCreateSourceType: ["LOCAL_FILE", "S3", "GCS", "AZURE"],
    ReferenceTableSchemaFieldType: ["STRING", "INT32"],
    ReferenceTableSortType: [
      "updated_at",
      "table_name",
      "status",
      "-updated_at",
      "-table_name",
      "-status",
    ],
    ReferenceTableSourceType: [
      "LOCAL_FILE",
      "S3",
      "GCS",
      "AZURE",
      "SERVICENOW",
      "SALESFORCE",
      "DATABRICKS",
      "SNOWFLAKE",
    ],
    TableResultV2DataAttributesFileMetadataCloudStorageErrorType: [
      "TABLE_SCHEMA_ERROR",
      "FILE_FORMAT_ERROR",
      "CONFIGURATION_ERROR",
      "QUOTA_EXCEEDED",
      "CONFLICT_ERROR",
      "VALIDATION_ERROR",
      "STATE_ERROR",
      "OPERATION_ERROR",
      "SYSTEM_ERROR",
    ],
    TableResultV2DataType: ["reference_table"],
    TableRowResourceDataType: ["row"],
  },
  oneOfMap: {
    CreateTableRequestDataAttributesFileMetadata: [
      "CreateTableRequestDataAttributesFileMetadataCloudStorage",
      "CreateTableRequestDataAttributesFileMetadataLocalFile",
    ],
    PatchTableRequestDataAttributesFileMetadata: [
      "PatchTableRequestDataAttributesFileMetadataCloudStorage",
      "PatchTableRequestDataAttributesFileMetadataLocalFile",
    ],
    TableResultV2DataAttributesFileMetadata: [
      "TableResultV2DataAttributesFileMetadataCloudStorage",
      "TableResultV2DataAttributesFileMetadataLocalFile",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CreateTableRequest: CreateTableRequest,
    CreateTableRequestData: CreateTableRequestData,
    CreateTableRequestDataAttributes: CreateTableRequestDataAttributes,
    CreateTableRequestDataAttributesFileMetadataCloudStorage:
      CreateTableRequestDataAttributesFileMetadataCloudStorage,
    CreateTableRequestDataAttributesFileMetadataLocalFile:
      CreateTableRequestDataAttributesFileMetadataLocalFile,
    CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails:
      CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails,
    CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail:
      CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail,
    CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail:
      CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail,
    CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail:
      CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail,
    CreateTableRequestDataAttributesSchema:
      CreateTableRequestDataAttributesSchema,
    CreateTableRequestDataAttributesSchemaFieldsItems:
      CreateTableRequestDataAttributesSchemaFieldsItems,
    CreateUploadRequest: CreateUploadRequest,
    CreateUploadRequestData: CreateUploadRequestData,
    CreateUploadRequestDataAttributes: CreateUploadRequestDataAttributes,
    CreateUploadResponse: CreateUploadResponse,
    CreateUploadResponseData: CreateUploadResponseData,
    CreateUploadResponseDataAttributes: CreateUploadResponseDataAttributes,
    PatchTableRequest: PatchTableRequest,
    PatchTableRequestData: PatchTableRequestData,
    PatchTableRequestDataAttributes: PatchTableRequestDataAttributes,
    PatchTableRequestDataAttributesFileMetadataCloudStorage:
      PatchTableRequestDataAttributesFileMetadataCloudStorage,
    PatchTableRequestDataAttributesFileMetadataLocalFile:
      PatchTableRequestDataAttributesFileMetadataLocalFile,
    PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails:
      PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails,
    PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail:
      PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail,
    PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail:
      PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail,
    PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail:
      PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail,
    PatchTableRequestDataAttributesSchema:
      PatchTableRequestDataAttributesSchema,
    PatchTableRequestDataAttributesSchemaFieldsItems:
      PatchTableRequestDataAttributesSchemaFieldsItems,
    TableResultV2: TableResultV2,
    TableResultV2Array: TableResultV2Array,
    TableResultV2Data: TableResultV2Data,
    TableResultV2DataAttributes: TableResultV2DataAttributes,
    TableResultV2DataAttributesFileMetadataCloudStorage:
      TableResultV2DataAttributesFileMetadataCloudStorage,
    TableResultV2DataAttributesFileMetadataLocalFile:
      TableResultV2DataAttributesFileMetadataLocalFile,
    TableResultV2DataAttributesFileMetadataOneOfAccessDetails:
      TableResultV2DataAttributesFileMetadataOneOfAccessDetails,
    TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail:
      TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail,
    TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail:
      TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail,
    TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail:
      TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail,
    TableResultV2DataAttributesSchema: TableResultV2DataAttributesSchema,
    TableResultV2DataAttributesSchemaFieldsItems:
      TableResultV2DataAttributesSchemaFieldsItems,
    TableRowResourceArray: TableRowResourceArray,
    TableRowResourceData: TableRowResourceData,
    TableRowResourceDataAttributes: TableRowResourceDataAttributes,
  },
};
