/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecureEmbedUpdateResponseData } from "./SecureEmbedUpdateResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for updating a secure embed shared dashboard.
 */
export class SecureEmbedUpdateResponse {
  /**
   * Data object for a secure embed update response.
   */
  "data": SecureEmbedUpdateResponseData;

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
    data: {
      baseName: "data",
      type: "SecureEmbedUpdateResponseData",
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
    return SecureEmbedUpdateResponse.attributeTypeMap;
  }

  public constructor() {}
}
