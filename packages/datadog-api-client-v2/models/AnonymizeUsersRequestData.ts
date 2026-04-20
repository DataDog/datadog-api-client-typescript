/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnonymizeUsersRequestAttributes } from "./AnonymizeUsersRequestAttributes";
import { AnonymizeUsersRequestType } from "./AnonymizeUsersRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object to anonymize a list of users.
 */
export class AnonymizeUsersRequestData {
  /**
   * Attributes of an anonymize users request.
   */
  "attributes": AnonymizeUsersRequestAttributes;
  /**
   * Unique identifier for the request. Not used server-side.
   */
  "id"?: string;
  /**
   * Type of the anonymize users request.
   */
  "type": AnonymizeUsersRequestType;

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
    attributes: {
      baseName: "attributes",
      type: "AnonymizeUsersRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AnonymizeUsersRequestType",
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
    return AnonymizeUsersRequestData.attributeTypeMap;
  }

  public constructor() {}
}
