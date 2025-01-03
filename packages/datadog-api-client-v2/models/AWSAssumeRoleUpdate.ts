/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSAssumeRoleType } from "./AWSAssumeRoleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
