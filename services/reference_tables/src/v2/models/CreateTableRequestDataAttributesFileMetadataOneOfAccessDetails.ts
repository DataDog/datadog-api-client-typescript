import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail } from "./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail";
import { CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail } from "./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail";
import { CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail } from "./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail";

/**
 * The definition of `CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails` object.
 */
export class CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails {
  /**
   * The definition of `CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail` object.
   */
  "awsDetail"?: CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail;
  /**
   * The definition of `CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail` object.
   */
  "azureDetail"?: CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail;
  /**
   * The definition of `CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail` object.
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
