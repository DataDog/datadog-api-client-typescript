/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail";
import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail";
import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cloud storage access configuration for the reference table data file.
 */
export class PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails {
  /**
   * Amazon Web Services S3 storage access configuration.
   */
  "awsDetail"?: PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail;
  /**
   * Azure Blob Storage access configuration.
   */
  "azureDetail"?: PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail;
  /**
   * Google Cloud Platform storage access configuration.
   */
  "gcpDetail"?: PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail;

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
      type: "PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail",
    },
    azureDetail: {
      baseName: "azure_detail",
      type: "PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail",
    },
    gcpDetail: {
      baseName: "gcp_detail",
      type: "PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail",
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
    return PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails.attributeTypeMap;
  }

  public constructor() {}
}
