/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSIntegrationIamPermissionsResponseAttributes } from "./AWSIntegrationIamPermissionsResponseAttributes";
import { AWSIntegrationIamPermissionsResponseDataType } from "./AWSIntegrationIamPermissionsResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS Integration IAM Permissions response data.
 */
export class AWSIntegrationIamPermissionsResponseData {
  /**
   * AWS Integration IAM Permissions response attributes.
   */
  "attributes"?: AWSIntegrationIamPermissionsResponseAttributes;
  /**
   * The `AWSIntegrationIamPermissionsResponseData` `id`.
   */
  "id"?: string;
  /**
   * The `AWSIntegrationIamPermissionsResponseData` `type`.
   */
  "type"?: AWSIntegrationIamPermissionsResponseDataType;

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
      type: "AWSIntegrationIamPermissionsResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AWSIntegrationIamPermissionsResponseDataType",
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
    return AWSIntegrationIamPermissionsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
