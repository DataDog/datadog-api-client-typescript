/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail } from "./TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail";
import { TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail } from "./TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail";
import { TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail } from "./TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `TableResultV2DataAttributesFileMetadataOneOfAccessDetails` object.
 */
export class TableResultV2DataAttributesFileMetadataOneOfAccessDetails {
  /**
   * The definition of `TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail` object.
   */
  "awsDetail"?: TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail;
  /**
   * The definition of `TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail` object.
   */
  "azureDetail"?: TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail;
  /**
   * The definition of `TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail` object.
   */
  "gcpDetail"?: TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail;

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
      type: "TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail",
    },
    azureDetail: {
      baseName: "azure_detail",
      type: "TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail",
    },
    gcpDetail: {
      baseName: "gcp_detail",
      type: "TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail",
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
    return TableResultV2DataAttributesFileMetadataOneOfAccessDetails.attributeTypeMap;
  }

  public constructor() {}
}
