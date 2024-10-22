/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSNamespacesResponseAttributes } from "./AWSNamespacesResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS Namespaces response body
 */
export class AWSNamespacesResponseData {
  /**
   * AWS Namespaces response body
   */
  "attributes"?: AWSNamespacesResponseAttributes;
  /**
   * The `AWSNamespacesResponseData` `id`.
   */
  "id"?: string;
  /**
   * The `AWSNamespacesResponseData` `type`.
   */
  "type"?: string;

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
      type: "AWSNamespacesResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return AWSNamespacesResponseData.attributeTypeMap;
  }

  public constructor() {}
}
