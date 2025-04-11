import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsBasicAuthNTLMType } from "./SyntheticsBasicAuthNTLMType";

/**
 * Object to handle `NTLM` authentication when performing the test.
 */
export class SyntheticsBasicAuthNTLM {
  /**
   * Domain for the authentication to use when performing the test.
   */
  "domain"?: string;
  /**
   * Password for the authentication to use when performing the test.
   */
  "password"?: string;
  /**
   * The type of authentication to use when performing the test.
   */
  "type": SyntheticsBasicAuthNTLMType;
  /**
   * Username for the authentication to use when performing the test.
   */
  "username"?: string;
  /**
   * Workstation for the authentication to use when performing the test.
   */
  "workstation"?: string;
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
    domain: {
      baseName: "domain",
      type: "string",
    },
    password: {
      baseName: "password",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsBasicAuthNTLMType",
      required: true,
    },
    username: {
      baseName: "username",
      type: "string",
    },
    workstation: {
      baseName: "workstation",
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
    return SyntheticsBasicAuthNTLM.attributeTypeMap;
  }

  public constructor() {}
}
