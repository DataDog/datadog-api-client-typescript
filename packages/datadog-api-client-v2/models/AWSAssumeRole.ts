/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSAssumeRoleType } from "./AWSAssumeRoleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
