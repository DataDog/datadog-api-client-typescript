/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail } from "./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail";
import { CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail } from "./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail";
import { CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail } from "./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cloud storage access configuration for the reference table data file.
 */
export class CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails {
  /**
   * Amazon Web Services S3 storage access configuration.
   */
  "awsDetail"?: CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail;
  /**
   * Azure Blob Storage access configuration.
   */
  "azureDetail"?: CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail;
  /**
   * Google Cloud Platform storage access configuration.
   */
  "gcpDetail"?: CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    awsDetail: {
      baseName: "aws_detail",
      type: "CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail",
    },
    azureDetail: {
      baseName: "azure_detail",
      type: "CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail",
    },
    gcpDetail: {
      baseName: "gcp_detail",
      type: "CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails.attributeTypeMap;
  }

  public constructor() {}
}
