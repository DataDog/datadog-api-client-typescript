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
 * The definition of the access details object.
 */
export class CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails {
  /**
   * The definition of the AWS access details object.
   */
  "awsDetail"?: CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail;
  /**
   * The definition of the Azure access details object.
   */
  "azureDetail"?: CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail;
  /**
   * The definition of the GCP access details object.
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
