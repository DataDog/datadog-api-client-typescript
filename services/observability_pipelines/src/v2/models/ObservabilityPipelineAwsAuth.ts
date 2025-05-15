import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS authentication credentials used for accessing AWS services such as S3.
 * If omitted, the system’s default credentials are used (for example, the IAM role and environment variables).
 */
export class ObservabilityPipelineAwsAuth {
  /**
   * The Amazon Resource Name (ARN) of the role to assume.
   */
  "assumeRole"?: string;
  /**
   * A unique identifier for cross-account role assumption.
   */
  "externalId"?: string;
  /**
   * A session identifier used for logging and tracing the assumed role session.
   */
  "sessionName"?: string;
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
    assumeRole: {
      baseName: "assume_role",
      type: "string",
    },
    externalId: {
      baseName: "external_id",
      type: "string",
    },
    sessionName: {
      baseName: "session_name",
      type: "string",
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
    return ObservabilityPipelineAwsAuth.attributeTypeMap;
  }

  public constructor() {}
}
