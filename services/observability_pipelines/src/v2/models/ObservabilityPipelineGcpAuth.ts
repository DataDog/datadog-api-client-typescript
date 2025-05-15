import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * GCP credentials used to authenticate with Google Cloud Storage.
 */
export class ObservabilityPipelineGcpAuth {
  /**
   * Path to the GCP service account key file.
   */
  "credentialsFile": string;
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
    credentialsFile: {
      baseName: "credentials_file",
      type: "string",
      required: true,
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
    return ObservabilityPipelineGcpAuth.attributeTypeMap;
  }

  public constructor() {}
}
