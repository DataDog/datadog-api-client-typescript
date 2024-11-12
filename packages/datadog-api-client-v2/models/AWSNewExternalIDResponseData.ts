/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSNewExternalIDResponseAttributes } from "./AWSNewExternalIDResponseAttributes";
import { AWSNewExternalIDResponseDataType } from "./AWSNewExternalIDResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS External ID response body
 */
export class AWSNewExternalIDResponseData {
  /**
   * AWS External ID response body
   */
  "attributes"?: AWSNewExternalIDResponseAttributes;
  /**
   * The `AWSNewExternalIDResponseData` `id`.
   */
  "id": string;
  /**
   * The `AWSNewExternalIDResponseData` `type`.
   */
  "type": AWSNewExternalIDResponseDataType;

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
      type: "AWSNewExternalIDResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSNewExternalIDResponseDataType",
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
    return AWSNewExternalIDResponseData.attributeTypeMap;
  }

  public constructor() {}
}
