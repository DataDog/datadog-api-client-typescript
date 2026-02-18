import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSSecretManager } from "./AWSSecretManager";

export class ExternalSecretsManagerOneOf {
  /**
   * AWS Secrets Manager configuration.
   */
  "aws": AWSSecretManager;
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
    aws: {
      baseName: "aws",
      type: "AWSSecretManager",
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
    return ExternalSecretsManagerOneOf.attributeTypeMap;
  }

  public constructor() {}
}
