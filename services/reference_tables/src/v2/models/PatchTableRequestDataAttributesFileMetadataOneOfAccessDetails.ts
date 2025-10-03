import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail";
import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail";
import { PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail } from "./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail";

/**
 * The definition of `PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails` object.
 */
export class PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails {
  /**
   * The definition of `PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail` object.
   */
  "awsDetail"?: PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail;
  /**
   * The definition of `PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail` object.
   */
  "azureDetail"?: PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail;
  /**
   * The definition of `PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail` object.
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
