import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSAssumeRoleType } from "./AWSAssumeRoleType";

/**
 * The definition of `AWSAssumeRole` object.
 */
export class AWSAssumeRole {
  /**
   * AWS account the connection is created for
   */
  "accountId": string;
  /**
   * External ID used to scope which connection can be used to assume the role
   */
  "externalId"?: string;
  /**
   * AWS account that will assume the role
   */
  "principalId"?: string;
  /**
   * Role to assume
   */
  "role": string;
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
      required: true,
    },
    externalId: {
      baseName: "external_id",
      type: "string",
    },
    principalId: {
      baseName: "principal_id",
      type: "string",
    },
    role: {
      baseName: "role",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSAssumeRoleType",
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
    return AWSAssumeRole.attributeTypeMap;
  }

  public constructor() {}
}
