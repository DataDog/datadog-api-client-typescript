import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSAssumeRoleType } from "./AWSAssumeRoleType";

/**
 * The definition of `AWSAssumeRoleUpdate` object.
 */
export class AWSAssumeRoleUpdate {
  /**
   * AWS account the connection is created for
   */
  "accountId"?: string;
  /**
   * The `AWSAssumeRoleUpdate` `generate_new_external_id`.
   */
  "generateNewExternalId"?: boolean;
  /**
   * Role to assume
   */
  "role"?: string;
  /**
   * The definition of `AWSAssumeRoleType` object.
   */
  "type": AWSAssumeRoleType;
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
    accountId: {
      baseName: "account_id",
      type: "string",
    },
    generateNewExternalId: {
      baseName: "generate_new_external_id",
      type: "boolean",
    },
    role: {
      baseName: "role",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AWSAssumeRoleType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSAssumeRoleUpdate.attributeTypeMap;
  }

  public constructor() {}
}
