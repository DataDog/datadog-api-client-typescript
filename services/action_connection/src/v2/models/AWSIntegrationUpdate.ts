import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCredentialsUpdate } from "./AWSCredentialsUpdate";
import { AWSIntegrationType } from "./AWSIntegrationType";

/**
 * The definition of `AWSIntegrationUpdate` object.
 */
export class AWSIntegrationUpdate {
  /**
   * The definition of `AWSCredentialsUpdate` object.
   */
  "credentials"?: AWSCredentialsUpdate;
  /**
   * The definition of `AWSIntegrationType` object.
   */
  "type": AWSIntegrationType;
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
    credentials: {
      baseName: "credentials",
      type: "AWSCredentialsUpdate",
    },
    type: {
      baseName: "type",
      type: "AWSIntegrationType",
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
    return AWSIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
