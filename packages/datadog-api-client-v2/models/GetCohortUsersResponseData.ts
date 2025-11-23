/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetCohortUsersResponseDataAttributes } from "./GetCohortUsersResponseDataAttributes";
import { GetCohortUsersResponseDataType } from "./GetCohortUsersResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class GetCohortUsersResponseData {
  "attributes"?: GetCohortUsersResponseDataAttributes;
  "id"?: string;
  "type": GetCohortUsersResponseDataType;

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
      type: "GetCohortUsersResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GetCohortUsersResponseDataType",
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
    return GetCohortUsersResponseData.attributeTypeMap;
  }

  public constructor() {}
}
