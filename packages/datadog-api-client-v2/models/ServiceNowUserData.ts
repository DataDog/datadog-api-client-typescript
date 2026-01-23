/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceNowUserAttributes } from "./ServiceNowUserAttributes";
import { ServiceNowUserType } from "./ServiceNowUserType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a ServiceNow user
 */
export class ServiceNowUserData {
  /**
   * Attributes of a ServiceNow user
   */
  "attributes": ServiceNowUserAttributes;
  /**
   * Unique identifier for the ServiceNow user
   */
  "id": string;
  /**
   * Type identifier for ServiceNow user resources
   */
  "type": ServiceNowUserType;

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
      type: "ServiceNowUserAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ServiceNowUserType",
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
    return ServiceNowUserData.attributeTypeMap;
  }

  public constructor() {}
}
