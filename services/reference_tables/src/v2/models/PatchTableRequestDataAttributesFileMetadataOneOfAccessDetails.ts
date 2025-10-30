import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail";
import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail";
import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail";

/**
 * The definition of the access details object.
 */
export class PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails {
  /**
   * The definition of the AWS access details object.
   */
  "awsDetail"?: PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail;
  /**
   * The definition of the Azure access details object.
   */
  "azureDetail"?: PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail;
  /**
   * The definition of the GCP access details object.
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
